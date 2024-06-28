from django.db import models

# Create your models here.
class Adventure(models.Model):
    title = models.CharField(max_length=100)
    age_range = models.IntegerField(default=5)
    description = models.TextField(max_length=300)
    end_count = models.IntegerField(default=1)
    # category

    def __str__(self):
        return self.name