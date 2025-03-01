from rest_framework.decorators import api_view
from rest_framework.response import Response
import subprocess
import os

@api_view(['POST'])
def run_code(request):
    code = request.data.get("code", "")
    language = request.data.get("language", "")

    if not code or not language:
        return Response({"error": "Missing code or language"}, status=400)

    try:
        if language == "java":
            filename = "Code.java"
            compile_cmd = ["javac", filename]
            run_cmd = ["java", "Code"]
        elif language == "python":
            filename = "script.py"
            compile_cmd = None  # Python no compilation required
            run_cmd = ["python3", filename]
        elif language == "cpp":
            filename = "program.cpp"
            output_file = "program"
            compile_cmd = ["g++", filename, "-o", output_file]
            run_cmd = ["./" + output_file]
        else:
            return Response({"error": "Unsupported language"}, status=400)

        # Write code to file
        with open(filename, "w") as f:
            f.write(code)

        if compile_cmd:
            compile_process = subprocess.run(compile_cmd, capture_output=True, text=True)
            if compile_process.returncode != 0:
                return Response({"error": compile_process.stderr})

        # Run the code
        run_process = subprocess.run(run_cmd, capture_output=True, text=True)
        return Response({"output": run_process.stdout})

    except Exception as e:
        return Response({"error": str(e)}, status=500)
