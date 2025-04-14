from django.contrib import admin
from .models import UserCourse

@admin.register(UserCourse)
class UserCourseAdmin(admin.ModelAdmin):
    list_display = ("username", "course", "level")
