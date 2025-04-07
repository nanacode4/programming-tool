from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User
from django.contrib.auth.hashers import check_password

@api_view(['POST'])
def login_user(request):
    username = request.data.get('username')
    password = request.data.get('password')

    try:
        user = User.objects.get(username=username)
    except User.DoesNotExist:
        return Response({"error": "User not found"}, status=404)

    if check_password(password, user.password):
        return Response({
            "message": "Login successful",
            "username": user.username,
            "role": user.role
        })
    else:
        return Response({"error": "Invalid password"}, status=401)

