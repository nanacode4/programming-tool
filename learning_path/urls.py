from django.urls import path
from .views import learning_path

urlpatterns = [
    path('', learning_path, name='learning_path'),
]
