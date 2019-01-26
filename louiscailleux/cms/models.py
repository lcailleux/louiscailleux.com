from django.db import models


class Block(models.Model):
    title = models.CharField(max_length=255)
    identifier = models.CharField(max_length=255)
    content = models.TextField()
    is_active = models.BooleanField(default=1)

    def __str__(self):
        return self.identifier

    def get_title(self):
        return self.title
