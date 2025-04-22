from django.urls import path
from .views import all_quiz_questions,quiz_detail


urlpatterns = [
    path('', all_quiz_questions, name='all_quizzes'),
    path('<int:pk>/', quiz_detail, name='quiz_detail'),
]

