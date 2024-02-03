from django.shortcuts import render, redirect
from .models import Cliente, Proveedor, Catalogo, Pedido, Producto, Detalle
from django.contrib import messages
from django.http import JsonResponse
from django.db import models

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
        nuevoCliente=Cliente.objects.create(cedula=cedula, nombre=nombre, direccion=direccion, email=email, telefono=telefono)
        messages.success(request, 'Cliente guardado correctamente')
        return redirect('/listaClientes')

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
    return render(request, 'listaProveedores.html', {'proveedores':proveedorBdd})

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

#Listar datos de la tabla Catalogo
def listaCatalogos(request):
    catalogoBdd=Catalogo.objects.all()
    return render(request, 'listaCatalogos.html', {'catalogos':catalogoBdd})

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
    pedidoBdd=Pedido.objects.all()
    return render(request, 'listaPedidos.html', {'pedidos':pedidoBdd})

#Listar datos de la tabla Producto
def listaProductos(request):
    productoBdd=Producto.objects.all()
    proveedorBdd=Proveedor.objects.all()
    catalogoBdd=Catalogo.objects.all()
    return render(request, 'listaProductos.html',
    {
        'productos':productoBdd,
        'proveedores':proveedorBdd,
        'catalogos':catalogoBdd
    })

#Guardar datos de la tabla Productos
def guardarProducto(request):
    nombre=request.POST["nombre"]
    precio=request.POST["precio"]
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
    precio=request.POST["precio"]
    descripcion=request.POST["descripcion"]
    stock=request.POST["stock"]
    fotografia=request.FILES.get('fotografia')

    catalogo=request.POST["idCatalogo"]
    catalogoSeleccionado=Catalogo.objects.get(idCatalogo=catalogo)

    proveedor=request.POST["idProveedor"]
    catalogoSeleccionado=Proveedor.objects.get(idProveedor=proveedor)

    productoActualizar=Producto(
        idProducto=idProducto,
        nombre=nombre,
        precio=precio,
        descripcion=descripcion,
        stock=stock,
        fotografia=fotografia,
        catalogo=catalogoSeleccionado,
        proveedor=catalogoSeleccionado
    )
    productoActualizar.save()
    messages.success(request,'Producto actualizado correctamente')
    return redirect('/listaProductos')

#Listar datos de la tabla Detalle
def listaDetalles(request):
    detalleBdd=Detalle.objects.all()
    return render(request, 'listaDetalles.html', {'detalles':detalleBdd})