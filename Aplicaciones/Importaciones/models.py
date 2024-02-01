from django.db import models

# Create your models here.
class Proveedor(models.Model):
    idProveedor=models.AutoField(primary_key=True)
    nombre=models.CharField(max_length=50)
    email=models.CharField(max_length=150)
    pais=models.CharField(max_length=50)
    ciudad=models.CharField(max_length=50)
    logo=models.FileField(upload_to='proveedores', null=True, blank=True)

    def __str__(self):
        fila='{1} {2} {3} {4} {5} {6}'
        return fila.format(self.idProveedor, self.nombre, self.email, self.pais, self.ciudad, self.logo)

class Catalogo(models.Model):
    idCatalogo=models.AutoField(primary_key=True)
    categoria=models.CharField(max_length=50)
    descripcion=models.CharFiled(max_length=150)

    def __str__(self):
        fila='{1} {2} {3}'
        return fila.format(self.idCatalogo, self.categoria, self.descripcion)