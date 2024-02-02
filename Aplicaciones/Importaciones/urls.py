from django.urls import path
from . import views
urlpatterns = [
    path('', views.home),
    path('listaClientes/', views.listaClientes),
    path('listaProveedores/', views.listaProveedores),
    path('listaCatalogos/', views.listaCatalogos),
    path('listaPedidos/', views.listaPedidos),
    path('listaProductos/', views.listaProductos),
    path('listaDetalles/', views.listaDetalles),
    ]