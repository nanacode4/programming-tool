from django.urls import path
from .views import all_quiz_questions,quiz_detail,wrong_answer_list,get_wrong_answers


urlpatterns = [
    path('', all_quiz_questions, name='all_quizzes'),
    path('<int:pk>/', quiz_detail, name='quiz_detail'),
    path('wrong_answers/', wrong_answer_list, name='wrong_answers'),

    path('get_wrong_answers/', get_wrong_answers, name='get_wrong_answers')


]

