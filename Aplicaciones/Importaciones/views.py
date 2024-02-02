from django.shortcuts import render, redirect
from .models import Cliente, Proveedor, Catalogo, Pedido, Producto, Detalle
from django.contrib import messages

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
        messages.success(request, 'Cliete guardado correctamente')
        return redirect('listaClientes')

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

#Listar datos de la tabla Catalogo
def listaCatalogos(request):
    catalogoBdd=Catalogo.objects.all()
    return render(request, 'listaCatalogos.html', {'catalogos':catalogoBdd})

#Listar datos de la tabla Pedido
def listaPedidos(request):
    pedidoBdd=Pedido.objects.all()
    return render(request, 'listaPedidos.html', {'pedidos':pedidoBdd})

#Listar datos de la tabla Producto
def listaProductos(request):
    productoBdd=Producto.objects.all()
    return render(request, 'listaProductos.html', {'productos':productoBdd})

#Listar datos de la tabla Detalle
def listaDetalles(request):
    detalleBdd=Detalle.objects.all()
    return render(request, 'listaDetalles.html', {'detalles':detalleBdd})