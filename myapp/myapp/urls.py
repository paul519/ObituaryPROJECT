from django.urls import path
from .views import submit_myapp

urlpatterns = [
    path('submit_myapp/', submit_obituary, name='submit_myapp'),
]
