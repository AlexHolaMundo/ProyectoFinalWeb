# Generated by Django 4.2.6 on 2024-02-13 14:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Importaciones', '0002_pedido_producto'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pedido',
            name='producto',
        ),
    ]
