from django import forms
from .models import myapp

class myappForm(forms.ModelForm):
    class Meta:
        model = myapp
        fields = ['name', 'date_of_birth', 'date_of_death', 'content', 'author']
