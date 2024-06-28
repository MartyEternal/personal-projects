from django import forms
from .models import Adventure

class AdventureCreateForm(forms.ModelForm):
    class Meta:
        model = Adventure
        fields = ['title', 'description']

    def clean_title(self):
        title = self.cleaned_data.get('title')
        return title.lower()

class AdventureUpdateForm(forms.ModelForm):
    class Meta:
        model = Adventure
        fields = ['title', 'age_range', 'description', 'end_count']

    def clean_title(self):
        title = self.cleaned_data.get('title')
        return title.lower()