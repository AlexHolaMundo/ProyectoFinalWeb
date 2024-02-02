from django.urls import path
from . import views
urlpatterns = [
    #Ruta Inicio
    path('', views.home),
    
    #Rutas Cliente
    path('listaClientes/', views.listaClientes),
    path('guardarCliente/', views.guardarCliente),
    path('listaProveedores/', views.listaProveedores),
    path('listaCatalogos/', views.listaCatalogos),
    path('listaPedidos/', views.listaPedidos),
    path('listaProductos/', views.listaProductos),
    path('listaDetalles/', views.listaDetalles),
    ]