from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('adventures/', views.adventures_index, name='index'),
    path('adventures/<int:adventure_id>/', views.adventures_detail, name='detail'),

]