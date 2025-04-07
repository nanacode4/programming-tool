from django.urls import path
from .views import all_quiz_questions


urlpatterns = [
    path('', all_quiz_questions, name='all_quizzes'),
]

