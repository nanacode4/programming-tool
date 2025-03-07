from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def dashboard_data(request):
    # Example user progress data
    modules = [
        {"name": "Variables", "progress": 80},
        {"name": "Loops", "progress": 60},
        {"name": "Functions", "progress": 30},
        {"name": "OOP", "progress": 10},
    ]

    # Example achievements (badges for completed modules)
    achievements = [
        {"name": "Beginner Badge"},
        {"name": "Loop Master"},
    ]

    return Response({
        "modules": modules,
        "achievements": achievements
    })
