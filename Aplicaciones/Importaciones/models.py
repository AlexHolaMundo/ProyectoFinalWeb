from django.db import models

# Create your models here.
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