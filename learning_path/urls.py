from django.urls import path
from .views import get_user_courses

urlpatterns = [
    path('usercourses/', get_user_courses),
]
