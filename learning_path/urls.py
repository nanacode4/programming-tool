from django.urls import path
from .views import mark_topic_complete, get_course_progress

urlpatterns = [
    path('api/user_progress/', mark_topic_complete, name='mark_topic_complete'),
    path('api/user_progress/summary/', get_course_progress, name='get_course_progress'),
]