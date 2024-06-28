from django.shortcuts import render

from .models import Adventure

# Create your views here.
def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def adventures_index(request):
    adventures = Adventure.objects.all()
    return render(request, 'adventures/index.html',
    {
        'adventures': adventures
    })

def adventures_detail(request, adventure_id):
    adventure = Adventure.objects.get(id=adventure_id)
    return render(request, 'adventures/detail.html', { 'adventure': adventure })

    