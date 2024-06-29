from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),

    # Adventures CRUD pathing
    path('adventures/', views.adventures_index, name='index'),
    path('adventures/<int:adventure_id>/', views.adventures_detail, name='detail'),
    path('adventures/create/', views.AdventureCreate.as_view(), name='adventures_create'),
    path('adventures/<int:pk>/update', views.AdventureUpdate.as_view(), name='adventures_update'),
    path('adventures/<int:pk>/delete', views.AdventureDelete.as_view(), name='adventures_delete'),

    # Magic School pathing
    path('adventures/magicschool/000_intro.html', views.AdventureDelete.as_view(), name='adventures_delete'),
]