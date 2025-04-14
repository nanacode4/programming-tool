from django.db import models

class UserCourse(models.Model):
    username = models.CharField(max_length=100)
    course = models.CharField(max_length=100)
    level = models.CharField(max_length=50, default='0')

    def __str__(self):
        return f"{self.username} - {self.course} ({self.level})"
