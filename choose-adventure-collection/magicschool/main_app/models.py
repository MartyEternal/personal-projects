from django.db import models
from django.urls import reverse

# Create your models here.
class Adventure(models.Model):
    title = models.CharField(max_length=100)
    age_range = models.IntegerField(default=5)
    description = models.TextField(max_length=300)
    end_count = models.IntegerField(default=1)
    # category

    def __str__(self):
        return f'{self.name} ({self.id})'
    
    def get_absolute_url(self):
        return reverse('detail', kwargs={'adventure_id': self.id})
    
    def save(self, *args, **kwargs):
        self.title = self.title.lower()
        super().save(*args, **kwargs)

class Player(models.Model):
    char_first_name = models.CharField(max_length=50)
    char_last_name = models.CharField(max_length=50)
    char_age = models.IntegerField()
    char_sex = models.IntegerField()
    adventure = models.ForeignKey(Adventure, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.char_first_name} {self.char_last_name}'