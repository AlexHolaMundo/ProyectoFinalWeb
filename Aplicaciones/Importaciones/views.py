from django.shortcuts import render, redirect
from .models import Cliente, Proveedor, Catalogo, Pedido, Producto, Detalle
from django.contrib import messages
from django.http import JsonResponse
from django.db import models
from django.db.models import Count
from decimal import Decimal
from django.core.mail import send_mail
from django.conf import settings
from django.http import HttpResponseRedirect
# Create your views here.
def home(request):
    return render(request, 'index.html')

#Listar datos de la tabla Cliente
def listaClientes(request):
    clienteBdd=Cliente.objects.all()
    return render(request, 'Cliente/listaClientes.html', {'clientes':clienteBdd})

#guardar cliente
def guardarCliente(request):
    cedula=request.POST["cedula"]
    nombre=request.POST["nombre"]
    direccion=request.POST["direccion"]
    email=request.POST["email"]
    telefono=request.POST["telefono"]
    nuevoCliente=Cliente.objects.create(
        cedula=cedula,
        nombre=nombre,
        direccion=direccion,
        email=email,
        telefono=telefono
    )
    messages.success(request, 'Cliente guardado correctamente')
    return redirect('/listaClientes')

#Cantidad de clientes para index
def obtener_cantidad_clientes(request):
    total_clientes = Cliente.objects.count()
    return JsonResponse({'total_clientes': total_clientes})

#Eliminar cliente
def eliminarCliente(request, id):
    clienteEliminar=Cliente.objects.get(idCliente=id)
    clienteEliminar.delete()
    messages.success(request, 'Cliente eliminado correctamente')
    return redirect('/listaClientes')

#Editar cliente
def editarCliente(request, id):
    clienteEditar=Cliente.objects.get(idCliente=id)
    return render(request, 'Cliente/listaClientes.html', {'clientes':clienteEditar})

#Actualizar cliente
def actualizarCliente(request):
    id=request.POST["idCliente"]
    cedula=request.POST["cedula"]
    nombre=request.POST["nombre"]
    direccion=request.POST["direccion"]
    email=request.POST["email"]
    telefono=request.POST["telefono"]

    clienteActualizar=Cliente(
        idCliente=id,
        cedula=cedula,
        nombre=nombre,
        direccion=direccion,
        email=email,
        telefono=telefono
    )
    clienteActualizar.save()
    messages.success(request, 'Cliente actualizado correctamente')
    return redirect('/listaClientes')

#Estadisticas de clientes Charts
def estadisticasDireccion(request):
    try:
        estadisticas_direccion = Cliente.objects.values('direccion').annotate(registros=models.Count('direccion'))
        labels = [estadistica['direccion'] for estadistica in estadisticas_direccion]
        datos = [estadistica['registros'] for estadistica in estadisticas_direccion]
        return JsonResponse({'labels': labels, 'datos': datos})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)



#Lsitar datos de la tabla Proveedor
def listaProveedores(request):
    proveedorBdd=Proveedor.objects.all()
    return render(request, 'Proveedor/listaProveedores.html', {'proveedores':proveedorBdd})

#Cantidad de provedores para index
def obtener_cantidad_proveedores(request):
    total_proveedores = Proveedor.objects.count()
    return JsonResponse({'total_proveedores': total_proveedores})

#Guardar datos de la tabla Proveedores
def guardarProveedor(request):
    nombre=request.POST['nombre']
    email=request.POST['email']
    pais=request.POST['pais']
    ciudad=request.POST['ciudad']
    logo=request.FILES.get('logo')
    nuevoProveedor=Proveedor.objects.create(
        nombre=nombre,
        email=email,
        pais=pais,
        ciudad=ciudad,
        logo=logo
    )
    messages.success(request, "Proveedor guardado correctamente")
    return redirect('/listaProveedores')

#Eliminar datos de la tabla Proveedores
def eliminarProveedor(request, id):
    proveedorEliminar=Proveedor.objects.get(idProveedor=id)
    proveedorEliminar.delete()
    messages.warning(request, 'Proveedor eliminado correctamente')
    return redirect('/listaProveedores')

#Editar datos de la tabla Proveedores
def editarProveedor(request,idProveedor):
    proveedorEditar=Proveedor.objects.get(idProveedor=idProveedor)
    return render(request,'editarProveedor.html',{'proveedor':proveedorEditar})

#Actualizar datos de Proveedores
def actualizacionProveedor(request,idProveedor):
    idProveedor=request.POST["idProveedor"]
    nombre=request.POST['nombre']
    email=request.POST['email']
    pais=request.POST['pais']
    ciudad=request.POST['ciudad']
    logo=request.FILES.get('logo')
    proveedorEditar=Proveedor.objects.get(idProveedor=idProveedor)
    proveedorEditar.nombre=nombre
    proveedorEditar.email=email
    proveedorEditar.pais=pais
    proveedorEditar.ciudad=ciudad
    proveedorEditar.logo=logo
    proveedorEditar.save()
    messages.success(request,'Proveedor actualizado correctamente')
    return redirect('/listaProveedores')

def estadisticasPais(request):
    try:
        estadisticas_pais = Proveedor.objects.values('pais').annotate(registros=models.Count('pais'))
        labels = [estadistica['pais'] for estadistica in estadisticas_pais]
        datos = [estadistica['registros'] for estadistica in estadisticas_pais]
        return JsonResponse({'labels': labels, 'datos': datos})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

#Listar datos de la tabla Catalogo
def listaCatalogos(request):
    catalogoBdd=Catalogo.objects.all()
    return render(request, 'Catalogo/listaCatalogos.html', {'catalogos':catalogoBdd})

#Guardar datos de la tabla Catalogo
def guardarCatalogo(request):
    categoria=request.POST["categoria"]
    descripcion=request.POST["descripcion"]
    nuevoCatalogo=Catalogo.objects.create(
        categoria=categoria,
        descripcion=descripcion
    )
    messages.success(request, "Catalogo guardado correctamente")
    return redirect('/listaCatalogos')

#Cantidad de Catalogo para index
def obtener_cantidad_Catalogos(request):
    total_catalogos = Catalogo.objects.count()
    return JsonResponse({'total_catalogos': total_catalogos})

#Eliminar datos de la tabla Catalogo
def eliminarCatalogo(request, id):
    catalogoEliminar=Catalogo.objects.get(idCatalogo=id)
    catalogoEliminar.delete()
    messages.warning(request,'Catalogo eliminado correctamente')
    return redirect('/listaCatalogos')

#Editar datos de la tabla Catalogo
def editarCatalogo(request,idCatalogo):
    catalogoEditar=Catalogo.objects.get(idCatalogo=idCatalogo)
    return render(request, 'editarCatalogo.html',{'catalogo':catalogoEditar})

#Actualizar datos de Catalogo
def actualizacionCatalogo(request):
    idCatalogo=request.POST["idCatalogo"]
    categoria=request.POST["categoria"]
    descripcion=request.POST["descripcion"]
    catalogoEditar=Catalogo.objects.get(idCatalogo=idCatalogo)
    catalogoEditar.categoria=categoria
    catalogoEditar.descripcion=descripcion
    catalogoEditar.save()
    messages.success(request,'Catalogo actualizado correctamente')
    return redirect('/listaCatalogos')

#Listar datos de la tabla Pedido
def listaPedidos(request):
    pedidoBdd = Pedido.objects.all()
    clienteBdd = Cliente.objects.all()
    return render(request, 'Pedido/listaPedidos.html', {'pedidos': pedidoBdd, 'clientes': clienteBdd})


#Guardar datos de la tabla Pedido
def guardarPedido(request):
    fechaPedido=request.POST["fechaPedido"]
    fechaEntrega=request.POST["fechaEntrega"]
    observaciones=request.POST["observaciones"]
    direccionEntrega=request.POST["direccionEntrega"]

    cliente=request.POST["idCliente"]
    clienteSeleccionado=Cliente.objects.get(idCliente=cliente)
    nuevoPedido=Pedido.objects.create(
        fechaPedido=fechaPedido,
        fechaEntrega=fechaEntrega,
        observaciones=observaciones,
        direccionEntrega=direccionEntrega,
        cliente=clienteSeleccionado
    )
    messages.success(request,'Pedido realizado correctamente')
    return redirect('/listaPedidos')

#Cantidad de pedidos para index
def obtener_cantidad_pedidos(request):
    total_pedidos = Pedido.objects.count()
    return JsonResponse({'total_pedidos': total_pedidos})

#Eliminar datos de la tabla Pedido
def eliminarPedido(request, id):
    pedidoEliminar=Pedido.objects.get(idPedido=id)
    pedidoEliminar.delete()
    messages.warning(request,'Pedido eliminado correctamente')
    return redirect('/listaPedidos')

#Editar datos de la tabla Pedido
def editarPedido(request,id):
    pedidoEditar=Pedido.objects.get(idPedido=id)
    clienteBdd=Cliente.objects.all()
    return render(request, 'listaPedidos.html',{'pedidos':pedidoEditar, 'clientes':clienteBdd})

#Actualizar datos de Pedido
def actualizarPedido(request):
    idPedido=request.POST["idPedido"]
    fechaPedido=request.POST["fechaPedido"]
    fechaEntrega=request.POST["fechaEntrega"]
    observaciones=request.POST["observaciones"]
    direccionEntrega=request.POST["direccionEntrega"]

    cliente=request.POST["idCliente"]
    clienteSeleccionado=Cliente.objects.get(idCliente=cliente)

    pedidoActualizar=Pedido(
        idPedido=idPedido,
        fechaPedido=fechaPedido,
        fechaEntrega=fechaEntrega,
        observaciones=observaciones,
        direccionEntrega=direccionEntrega,
        cliente=clienteSeleccionado
    )
    pedidoActualizar.save()
    messages.success(request,'Pedido actualizado correctamente')
    return redirect('/listaPedidos')

#Estadisticas de fechas Charts
def estadisticasFecha(request):
    try:
        estadisticas_fecha = Pedido.objects.values('fechaPedido').annotate(registros=models.Count('fechaPedido'))
        labels = [estadistica['fechaPedido'] for estadistica in estadisticas_fecha]
        datos = [estadistica['registros'] for estadistica in estadisticas_fecha]
        return JsonResponse({'labels': labels, 'datos': datos})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
#Listar datos de la tabla Producto
def listaProductos(request):
    productoBdd=Producto.objects.all()
    proveedorBdd=Proveedor.objects.all()
    catalogoBdd=Catalogo.objects.all()
    return render(request, 'Producto/listaProductos.html',
    {
        'productos':productoBdd,
        'proveedores':proveedorBdd,
        'catalogos':catalogoBdd
    })

#Cantidad de productos para index
def obtener_cantidad_Productos(request):
    total_productos = Producto.objects.count()
    return JsonResponse({'total_productos': total_productos})
#Guardar datos de la tabla Productos
def guardarProducto(request):
    nombre=request.POST["nombre"]
    precio=Decimal(request.POST["precio"].replace(',', '.'))
    descripcion=request.POST["descripcion"]
    stock=request.POST["stock"]
    fotografia=request.FILES.get('fotografia')

    catalogo=request.POST["idCatalogo"]
    catalogoSeleccionado=Catalogo.objects.get(idCatalogo=catalogo)

    proveedor=request.POST["idProveedor"]
    proveedorSeleccionado=Proveedor.objects.get(idProveedor=proveedor)

    nuevoProducto=Producto.objects.create(
        nombre=nombre, precio=precio,
        descripcion=descripcion,
        stock=stock, fotografia=fotografia,
        catalogo=catalogoSeleccionado,
        proveedor=proveedorSeleccionado
    )
    messages.success(request,'Producto guardado correctamente')
    return redirect('/listaProductos')

#Eliminar datos de la tabla Productos
def eliminarProducto(request, id):
    productoEliminar=Producto.objects.get(idProducto=id)
    productoEliminar.delete()
    messages.warning(request,'Producto eliminado correctamente')
    return redirect('/listaProductos')

#Editar datos de Productos
def editarProducto(request,idProducto):
    productoEditar=Producto.objects.get(idProducto=idProducto)
    proveedorBdd=Proveedor.objects.all()
    catalogoBdd=Catalogo.objects.all()
    return render(request, 'editarProducto.html',
    {
        'producto':productoEditar,
        'proveedor':proveedorBdd,
        'catalogo':catalogoBdd
    })

#Actualizar datos de Productos
def actualizarProducto(request):
    idProducto=request.POST["idProducto"]
    nombre=request.POST["nombre"]
    precio=Decimal(request.POST["precio"].replace(',', '.'))
    descripcion=request.POST["descripcion"]
    stock=request.POST["stock"]
    fotografia=request.FILES.get('fotografia')

    catalogo=request.POST["idCatalogo"]
    catalogoSeleccionado=Catalogo.objects.get(idCatalogo=catalogo)

    proveedor=request.POST["idProveedor"]
    proveedorSeleccionado=Proveedor.objects.get(idProveedor=proveedor)

    productoActualizar=Producto.objects.get(idProducto=idProducto)
    productoActualizar.nombre=nombre
    productoActualizar.precio=precio
    productoActualizar.descripcion=descripcion
    productoActualizar.stock=stock
    productoActualizar.fotografia=fotografia
    productoActualizar.catalogo=catalogoSeleccionado
    productoActualizar.proveedor=proveedorSeleccionado
    
    productoActualizar.save()
    messages.success(request,'Producto actualizado correctamente')
    return redirect('/listaProductos')

def estadisticaProducto(request):
    try:
        estadistica_producto = Producto.objects.values('precio').annotate(registros=models.Count('precio'))
        labels = [estadistica['precio'] for estadistica in estadistica_producto]
        datos = [estadistica['registros'] for estadistica in estadistica_producto]
        return JsonResponse({'labels': labels, 'datos': datos})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

#Listar datos de la tabla Detalle
def listaDetalles(request):
    detalleBdd=Detalle.objects.all()
    pedidoBdd=Pedido.objects.all()
    productoBdd=Producto.objects.all()
    return render(request, 'Detalle/listaDetalles.html', {'detalles':detalleBdd, 'pedidos':pedidoBdd, 'productos':productoBdd})

# Guardar datos de la tabla Detalle
def guardarDetalle(request):
    cantidad = Decimal(request.POST["cantidad"].replace(',', '.'))
    precioUnitario = Decimal(request.POST["precioUnitario"].replace(',', '.'))
    descuento = Decimal(request.POST["descuento"].replace(',', '.'))
    subtotal = Decimal(request.POST["subtotal"].replace(',', '.'))

    pedido = request.POST["idPedido"]
    pedidoSeleccionado = Pedido.objects.get(idPedido=pedido)

    producto = request.POST["idProducto"]
    productoSeleccionado = Producto.objects.get(idProducto=producto)

    nuevoDetalle = Detalle.objects.create(
        cantidad=cantidad,
        precioUnitario=precioUnitario,
        descuento=descuento,
        subtotal=subtotal,
        pedido=pedidoSeleccionado,
        producto=productoSeleccionado
    )
    messages.success(request, 'Detalle guardado correctamente')
    return redirect('/listaDetalles')


#Cantidad de detalles para index
def obtener_cantidad_detalles(request):
    total_detalles = Detalle.objects.count()
    return JsonResponse({'total_detalles': total_detalles})

#Eliminar datos de la tabla Detalle
def eliminarDetalle(request, id):
    detalleEliminar=Detalle.objects.get(idDetalle=id)
    detalleEliminar.delete()
    messages.warning(request,'Detalle eliminado correctamente')
    return redirect('/listaDetalles')

#Editar datos de la tabla Detalle
def editarDetalle(request,idDetalle):
    detalleEditar=Detalle.objects.get(idDetalle=idDetalle)
    pedidoBdd=Pedido.objects.all()
    productoBdd=Producto.objects.all()
    return render(request, 'editarDetalle.html',
    {
        'detalle':detalleEditar,
        'pedidos':pedidoBdd,
        'productos':productoBdd
    })


# Actualizar datos de Detalle
def actualizarDetalle(request):
    try:
        idDetalle = int(request.POST["idDetalle"])
        cantidad = Decimal(request.POST["cantidad"].replace(',', '.'))
        precioUnitario = Decimal(request.POST["precioUnitario"].replace(',', '.'))
        descuento = Decimal(request.POST["descuento"].replace(',', '.'))
        subtotal = Decimal(request.POST["subtotal"].replace(',', '.'))

        pedido_id = int(request.POST["idPedido"])
        pedidoSeleccionado = Pedido.objects.get(idPedido=pedido_id)

        producto_id = int(request.POST["idProducto"])
        productoSeleccionado = Producto.objects.get(idProducto=producto_id)

        detalleActualizar = Detalle.objects.get(idDetalle=idDetalle)
        detalleActualizar.cantidad = cantidad
        detalleActualizar.precioUnitario = precioUnitario
        detalleActualizar.descuento = descuento
        detalleActualizar.subtotal = subtotal
        detalleActualizar.pedido = pedidoSeleccionado
        detalleActualizar.producto = productoSeleccionado
        detalleActualizar.save()

        messages.success(request, 'Detalle actualizado correctamente')
    except Exception as e:
        messages.error(request, f'Error al actualizar el detalle: {e}')

    return redirect('/listaDetalles')


#Estadisticas de detalles Charts
def estadisticasProducto(request):
    try:
        estadisticas_producto = Detalle.objects.values('producto__nombre').annotate(registros=Count('producto'))
        labels = [estadistica['producto__nombre'] for estadistica in estadisticas_producto]
        datos = [estadistica['registros'] for estadistica in estadisticas_producto]
        return JsonResponse({'labels': labels, 'datos': datos})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

#Enviar Correo Electronico a travez de Gmail
def enviarCorreo(request):
    if request.method == 'POST':
        destinatario = request.POST.get('destinatario')
        asunto = request.POST.get('asunto')
        mensaje = request.POST.get('mensaje')

        send_mail(asunto, mensaje, settings.EMAIL_HOST_USER, [destinatario], fail_silently=False)

        messages.success(request, 'Correo enviado correctamente')
        return HttpResponseRedirect('/enviarCorreo')
    return render(request, 'Contacto/correo.html')