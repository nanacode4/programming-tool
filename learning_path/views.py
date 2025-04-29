from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from .models import UserCourseProgress
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def mark_topic_complete(request):
    topic = request.data.get('topic')
    course = request.data.get('course', 'Python')  

    if not topic:
        return Response({'error': 'Topic is required.'}, status=400)

    UserCourseProgress.objects.get_or_create(
        user=request.user,
        course=course,
        topic=topic
    )
    return Response({'status': 'recorded', 'topic': topic, 'course': course})

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_course_progress(request):
    course = request.GET.get('course', 'Python')
    total_topics = 15 if course == 'Python' else 0

    completed = UserCourseProgress.objects.filter(user=request.user, course=course).count()
    percentage = round((completed / total_topics) * 100) if total_topics > 0 else 0

    return Response({
        'course': course,
        'completed': completed,
        'total': total_topics,
        'percentage': percentage
    })