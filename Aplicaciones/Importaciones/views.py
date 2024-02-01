from django.shortcuts import render, redirect
from .models import Cliente, Proveedor, Catalogo, Pedido, Producto

# Create your views here.
def plantilla(request):
    return render(request, 'plantilla.html')

#Listar datos de la tabla Cliente
def listaClientes(request):
    clienteBdd=Cliente.objects.all()
    return render(request, 'listaClientes.html', {'clientes':clienteBdd})

#Lsitar datos de la tabla Proveedor
def listaProveedores(request):
    proveedorBdd=Proveedor.objects.all()
    return render(request, 'listaProveedores.html', {'proveedores':proveedorBdd})

#Listar datos de la tabla Catalogo
def listaCatalogos(request):
    catalogoBdd=Catalogo.objects.all()
    return render(request, 'listaCatalogos.html', {'catalogos':catalogoBdd})