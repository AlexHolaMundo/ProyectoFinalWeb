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
    path('obtener_cantidad_clientes/', views.obtener_cantidad_clientes, name='obtener_cantidad_clientes'),
    #Rutas Pedido
    path('listaPedidos/', views.listaPedidos),
    path('guardarPedido/', views.guardarPedido),
    path('editarPedido/<int:id>', views.editarPedido),
    path('eliminarPedido/<int:id>', views.eliminarPedido),
    path('actualizarPedido/', views.actualizarPedido),
    path('obtenerEstadisticasFecha/', views.estadisticasFecha, name='obtener_estadisticas_fecha'),
    path('obtener_cantidad_pedidos/', views.obtener_cantidad_pedidos, name='obtener_cantidad_pedidos'),
    #Rutas Proveedor
    path('listaProveedores/', views.listaProveedores),
    path('guardarProveedor/', views.guardarProveedor),
    path('editarProveedor/<idProveedor>', views.editarProveedor),
    path('eliminarProveedor/<idProveedor>', views.eliminarProveedor),
    path('actualizacionProveedor/', views.actualizacionProveedor),
    #Rutas Catalogo
    path('listaCatalogos/', views.listaCatalogos),
    path('listaProductos/', views.listaProductos),
    #Rutas Detalle
    path('listaDetalles/', views.listaDetalles),
    path('guardarDetalle/', views.guardarDetalle),
    path('editarDetalle/<int:id>', views.editarDetalle),
    path('eliminarDetalle/<int:id>', views.eliminarDetalle),
    path('actualizarDetalle/', views.actualizarDetalle),
    path('obtener_cantidad_detalles/', views.obtener_cantidad_detalles, name='obtener_cantidad_detalles'),
    path('obtenerEstadisticasProducto/', views.estadisticasProducto, name='obtener_estadisticas_producto'),
    ]