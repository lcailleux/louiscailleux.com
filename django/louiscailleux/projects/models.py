from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    link = models.TextField()
    image = models.TextField()
    language_code = models.CharField(max_length=3, default='en')

    def __str__(self):
        return self.title

    def get_description(self):
        return self.description
