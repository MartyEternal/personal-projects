from django.shortcuts import render
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from .models import Adventure
from .forms import AdventureCreateForm, AdventureUpdateForm

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

class AdventureCreate(CreateView):
    model = Adventure
    form_class = AdventureCreateForm
    template_name = 'main_app/adventure_form.html'
    # fields = ['title', 'age_range', 'description']
    success_url = reverse_lazy('index')

class AdventureUpdate(UpdateView):
    model = Adventure
    form_class = AdventureUpdateForm
    template_name = 'main_app/adventure_form.html'
    success_url = reverse_lazy('index')

class AdventureDelete(DeleteView):
    model = Adventure
    success_url = '/adventures'