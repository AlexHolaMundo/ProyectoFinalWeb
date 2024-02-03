from django.urls import path
from . import views
urlpatterns = [
    #Ruta Inicio
    path('', views.home),

    #Rutas Cliente
    path('listaClientes/', views.listaClientes),
    path('guardarCliente/', views.guardarCliente),
    path('editarCiente/<int:id>', views.editarCliente),
    path('eliminarCliente/<int:id>', views.eliminarCliente),
    path('actualizarCliente/', views.actualizarCliente),
    path('obtenerEstadisticasDireccion/', views.estadisticasDireccion, name='obtener_estadisticas_direccion'),
    # Asumiendo que tienes algo similar en tu archivo urls.py
    path('obtener_cantidad_clientes/', views.obtener_cantidad_clientes, name='obtener_cantidad_clientes'),

    path('listaProveedores/', views.listaProveedores),
    path('listaCatalogos/', views.listaCatalogos),
    path('listaPedidos/', views.listaPedidos),
    path('listaProductos/', views.listaProductos),
    path('listaDetalles/', views.listaDetalles),
    ]