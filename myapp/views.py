from django.shortcuts import render, redirect
from .forms import myappForm

def submit_obituary(request):
    if request.method == 'POST':
        form = ObituaryForm(request.POST)
        if form.is_valid():
            obituary = form.save(commit=False)
            # Generate slug from the name
            obituary.slug = form.cleaned_data['name'].replace(' ', '-').lower()
            obituary.save()
            return redirect('view_obituaries')  # Redirect to a page that lists obituaries
    else:
        form = ObituaryForm()
    
    return render(request, 'obituaries/obituary_form.html', {'form': form})
