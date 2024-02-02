from django.contrib import admin
from .models import Cliente, Proveedor, Catalogo, Pedido, Producto, Detalle
# Register your models here.
admin.site.register(Cliente)
admin.site.register(Proveedor)
admin.site.register(Catalogo)
admin.site.register(Pedido)
admin.site.register(Producto)
admin.site.register(Detalle)