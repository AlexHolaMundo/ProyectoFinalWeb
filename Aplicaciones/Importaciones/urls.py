from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
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
    path('obtenerEstadisticasPais/', views.estadisticasPais, name='obtener_estadisticas_pais'),
    path('obtener_cantidad_proveedores/', views.obtener_cantidad_proveedores, name='obtener_cantidad_proveedores'),
       
    #Rutas Catalogo
    path('listaCatalogos/', views.listaCatalogos),
    path('guardarCatalogo/', views.guardarCatalogo),
    path('editarCatalogo/<idCatalogo>', views.editarCatalogo),
    path('eliminarCatalogo/<idCatalogo>', views.eliminarCatalogo),
    path('actualizacionCatalogo/', views.actualizacionCatalogo),
    path('obtener_cantidad_catalogos/', views.obtener_cantidad_Catalogos, name='obtener_cantidad_catalogos'),
    
    #Rutas Productos
    path('listaProductos/', views.listaProductos),
    path('guardarProducto/', views.guardarProducto),
    path('editarProducto/<idProducto>', views.editarProducto),
    path('eliminarProducto/<idProducto>', views.eliminarProducto),
    path('actualizarProducto/', views.actualizarProducto),
    path('obtenerEstadisticaProducto/', views.estadisticaProducto, name='obtener_estadistica_producto'),
    path('obtener_cantidad_productos/', views.obtener_cantidad_Productos, name='obtener_cantidad_productos'),
    
    #Rutas Detalle
    path('listaDetalles/', views.listaDetalles),
    path('guardarDetalle/', views.guardarDetalle),
    path('editarDetalle/<int:id>', views.editarDetalle),
    path('eliminarDetalle/<int:id>', views.eliminarDetalle),
    path('actualizarDetalle/', views.actualizarDetalle),
    path('obtener_cantidad_detalles/', views.obtener_cantidad_detalles, name='obtener_cantidad_detalles'),
    path('obtenerEstadisticasProducto/', views.estadisticasProducto, name='obtener_estadisticas_producto'),
    #Ruta Correo Electronico
    path('enviarCorreo/', views.enviarCorreo),
    ]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)