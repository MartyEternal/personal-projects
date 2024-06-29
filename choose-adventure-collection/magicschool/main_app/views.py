from django.shortcuts import render, redirect
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse, reverse_lazy
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




# Starting the Adventure
def intro_view(request):
    if request.method == 'POST':
        char_first_name = request.POST.get('char_first_name')
        char_last_name = request.POST.get('char_last_name')
        char_age = request.POST.get('char_age')
        char_sex = request.POST.get('char_sex')

        # Save the character information in the session
        request.session['char_first_name'] = char_first_name
        request.session['char_last_name'] = char_last_name
        request.session['char_age'] = char_age
        request.session['char_sex'] = char_sex

        # Redirect to the start of the adventure
        return redirect('start_adventure')

    adventure = Adventure.objects.first()  # Assuming you have an adventure to start with
    return render(request, '000_intro.html', {'adventure': adventure})

def start_adventure_view(request):
    # Ensure the session has character info
    if 'char_first_name' not in request.session:
        return redirect('intro')
    
    char_first_name = request.session['char_first_name']
    char_last_name = request.session['char_last_name']
    char_age = request.session['char_age']
    char_sex = request.session['char_sex']

    # Customize the adventure start based on the character info
    context = {
        'char_first_name': char_first_name,
        'char_last_name': char_last_name,
        'char_age': char_age,
        'char_sex': char_sex,
    }

    return render(request, 'start_adventure.html', context)