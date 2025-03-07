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
            compile_cmd = None  # Python does not require compilation
            run_cmd = ["python3", filename]
        elif language == "cpp":
            filename = "program.cpp"
            output_file = "program"
            compile_cmd = ["g++", filename, "-o", output_file]
            run_cmd = ["./" + output_file]
        else:
            return Response({"error": "Unsupported language"}, status=400)

        # Write the user's code into a file
        with open(filename, "w") as f:
            f.write(code)

        # If the language requires compilation (Java, C++), compile the code first
        if compile_cmd:
            compile_process = subprocess.run(compile_cmd, capture_output=True, text=True)
            if compile_process.returncode != 0:
                return Response({"error": compile_process.stderr.strip()}, status=400)

        # Execute the compiled or interpreted code and capture standard output and errors
        run_process = subprocess.run(run_cmd, capture_output=True, text=True)
        output = run_process.stdout.strip()
        error = run_process.stderr.strip()

        # Handle Python output type validation
        if language == "python" and output:
            try:
                # Check only if the output is a numeric or structured data format
                if output.replace(".", "", 1).isdigit() or output.startswith("[") or output.startswith("{"):
                    result = eval(output)
                    if not isinstance(result, int):
                        raise TypeError(f"Expected return type int, but got {type(result).__name__}")
            except (SyntaxError, NameError, TypeError, ValueError) as e:
                return Response({"error": str(e), "output": ""})

        return Response({
            "output": output,
            "error": error
        })

    except Exception as e:
        return Response({"error": str(e)}, status=500)
