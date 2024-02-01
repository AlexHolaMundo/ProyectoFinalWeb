from django.db import models

# Create your models here.
#modelo CLiente
class Cliente(models.Model):
    idCliente = models.AutoField(primary_key=True)
    cedula = models.CharField(max_length=10)
    nombre = models.CharField(max_length=50)
    direccion = models.CharField(max_length=100)
    email = models.EmailField()
    telefono = models.CharField(max_length=15)

    def __str__(self):
        fila="{0} => {1} => {2} => {3} => {4} => {5}"
        return fila.format(self.idCliente, self.cedula, self.nombre, self.direccion, self.email, self.telefono)
#modelo Proveedor
class Proveedor(models.Model):
    idProveedor=models.AutoField(primary_key=True)
    nombre=models.CharField(max_length=50)
    email=models.CharField(max_length=150)
    pais=models.CharField(max_length=50)
    ciudad=models.CharField(max_length=50)
    logo=models.FileField(upload_to='proveedores', null=True, blank=True)

    def __str__(self):
        fila='{0} => {1} => {2} => {3} => {4} => {5}'
        return fila.format(self.idProveedor, self.nombre, self.email, self.pais, self.ciudad, self.logo)
#modelo Catalogo
class Catalogo(models.Model):
    idCatalogo=models.AutoField(primary_key=True)
    categoria=models.CharField(max_length=50)
    descripcion=models.CharFiled(max_length=150)

    def __str__(self):
        fila='{0} => {1} => {2}'
        return fila.format(self.idCatalogo, self.categoria, self.descripcion)

class Pedido(models.Model):
    idPedido=models.AutoField(primary_key=True)
    fechaPedido=models.DateField()
    fechaEntrega=models.DateField()
    observaciones=models.CharField(max_length=150)
    direccionEntrega=models.CharField(max_length=150)
    cliente=models.ForeignKey(Cliente, null=True, blank=True, on_delete=models.CASCADE)

    def __str__(self):
        fila='{0} => {1} => {2} => {3} => {4}'
        return fila.format(self.idPedido, self.fechaPedido, self.fechaEntrega, self.observaciones, self.direccionEntrega, self.cliente)