from .models import UserCourseProgress
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def mark_topic_complete(request):
    user = request.user
    topic = request.data.get('topic')
    course = request.data.get('course')

    if not topic or not course:
        return Response({'error': 'Missing topic or course'}, status=400)

    UserCourseProgress.objects.get_or_create(user=user, topic=topic, course=course)
    return Response({'message': 'Progress saved successfully'})


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


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_topics(request):
    user = request.user
    topics = UserCourseProgress.objects.filter(user=user, course='Python')

    return Response([{'topic': t.topic} for t in topics])


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def unmark_topic_complete(request):
    user = request.user
    topic = request.data.get('topic')
    course = request.data.get('course')

    if not topic or not course:
        return Response({'error': 'Missing topic or course'}, status=400)

    deleted, _ = UserCourseProgress.objects.filter(user=user, topic=topic, course=course).delete()

    if deleted:
        return Response({'message': 'Progress removed successfully'})
    else:
        return Response({'error': 'Progress not found'}, status=404)
