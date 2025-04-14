from django.http import JsonResponse
from .models import UserCourse

def get_user_courses(request):
    data = []

    for entry in UserCourse.objects.all():
        data.append({
            "username": entry.username,
            "course": entry.course,
            "level": entry.level,
        })

    return JsonResponse(data, safe=False)









# @api_view(['POST'])
# def learning_path(request):
#     try:
#         data = request.data
#         experience = data.get("experience", "")
#         programming = data.get("programming", "")
#         algorithms = data.get("algorithms", "")
#         interest = data.get("interest", "")
#
#         level = "Beginner"
#         path = "Start with basic computer concepts, Python programming, and computational thinking."
#
#         if experience == "basic" or programming == "yes":
#             level = "Intermediate"
#             path = "Learn data structures, algorithms, front-end or back-end development, and databases."
#         elif experience == "good" and algorithms in ["some", "advanced"]:
#             level = "Advanced"
#             path = "Explore system design, machine learning, operating systems, and security."
#
#         if interest == "web":
#             path += " Focus on web development (HTML/CSS/JavaScript, Django/Node.js)."
#         elif interest == "ai":
#             path += " Focus on AI and machine learning (TensorFlow, PyTorch)."
#         elif interest == "system":
#             path += " Focus on system design, architecture, and security."
#
#         return Response({"level": level, "path": path})
#     except Exception as e:
#         return Response({"error": str(e)}, status=400)
