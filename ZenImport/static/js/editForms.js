//Editar formulario de Clientes
$(document).ready(function () {
  $('.btn-editar-trigger-cliente').click(function () {
    var clienteID = $(this).data('cliente-id')
    var modalID = '#modalEditar'

    var cedula = $(this).closest('tr').find('[data-cedula]').data('cedula')
    var nombre = $(this).closest('tr').find('[data-nombre]').data('nombre')
    var direccion = $(this)
      .closest('tr')
      .find('[data-direccion]')
      .data('direccion')
    var email = $(this).closest('tr').find('[data-email]').data('email')
    var telefono = $(this)
      .closest('tr')
      .find('[data-telefono]')
      .data('telefono')

    $(modalID + ' #idCliente').val(clienteID)
    $(modalID + ' #cedula').val(cedula)
    $(modalID + ' #nombre').val(nombre)
    $(modalID + ' #direccion').val(direccion)
    $(modalID + ' #email').val(email)
    $(modalID + ' #telefono').val(telefono)

    $(modalID).modal('show')
    return false
  })
})

//EditarFormulario de Pedidos
$(document).ready(function () {
  $('.btn-editar-trigger-pedido').click(function () {
    var pedidoID = $(this).data('pedido-id')
    var modalID = '#modalEditarPedido'
    var tr = $(this).closest('tr')

    var fechaPedido = $(this)
      .closest('tr')
      .find('[data-fechaPedido]')
      .attr('data-fechaPedido')
    var fechaEntrega = $(this)
      .closest('tr')
      .find('[data-fechaEntrega]')
      .attr('data-fechaEntrega')
    var observaciones = $(this)
      .closest('tr')
      .find('[data-observaciones]')
      .data('observaciones')
    var direccionEntrega = tr.find('[data-direccionEntrega]').text().trim()

    var cliente = $(this).closest('tr').find('[data-cliente]').data('cliente')

    $(modalID + ' #idPedido').val(pedidoID)
    $(modalID + ' #fechaPedido').val(fechaPedido)
    $(modalID + ' #fechaEntrega').val(fechaEntrega)
    $(modalID + ' #observaciones').val(observaciones)
    $(modalID + ' #direccionEntrega').val(direccionEntrega)
    $(modalID + ' #idCliente').val(cliente)

    $(modalID).modal('show')
    return false
  })
})
//Editar formulario de Proveedores
$(document).ready(function () {
  $('.btn-editar-trigger-proveedor').click(function () {
    var proveedorID = $(this).data('proveedor-id')
    var modalID = '#modalEditar'

    var nombre = $(this).closest('tr').find('[data-nombre]').data('nombre')
    var email = $(this).closest('tr').find('[data-email]').data('email')
    var pais = $(this).closest('tr').find('[data-pais]').data('pais')
    var ciudad = $(this).closest('tr').find('[data-ciudad]').data('ciudad')
    var logo = $(this).closest('tr').find('[data-logo]').data('logo')

    $(modalID + ' #idProveedor').val(proveedorID)
    $(modalID + ' #nombre').val(nombre)
    $(modalID + ' #email').val(email)
    $(modalID + ' #pais').val(pais)
    $(modalID + ' #ciudad').val(ciudad)
    $(modalID + ' #logo').val(logo)

    $(modalID).modal('show')
    return false
  })
})

//Editar formulario Detalles
$(document).ready(function () {
  $('.btn-editar-trigger-detalle').click(function () {
    var detalleID = $(this).data('detalle-id')
    var modalID = '#modalEditarDetalle'
    var tr = $(this).closest('tr')
    var cantidad = tr.find('[data-cantidad]').data('cantidad')
    var precioUnitario = tr.find('[data-precioUnitario]').data('preciounitario')
    var descuento = tr.find('[data-descuento]').data('descuento')
    var subtotal = tr.find('[data-subtotal]').data('subtotal')
    var direccionEntrega = tr
      .find('[data-direccionEntrega]')
      .data('direccionentrega')
    var productoNombre = tr.find('[data-productoNombre]').data('productonombre')

    // Asignar los valores al formulario y mostrar el modal
    $(modalID + ' #idDetalle').val(detalleID)
    $(modalID + ' #cantidad').val(cantidad)
    $(modalID + ' #precioUnitario').val(precioUnitario)
    $(modalID + ' #descuento').val(descuento)
    $(modalID + ' #subtotal').val(subtotal)
    $(modalID + ' #idPedido').val(direccionEntrega)
    $(modalID + ' #idProducto').val(productoNombre)

    $(modalID).modal('show')
    return false
  })
})
//Editar formulario de Catalogos
$(document).ready(function () {
  $('.btn-editar-trigger-catalogo').click(function () {
    var catalogoID = $(this).data('catalogo-id')
    var modalID = '#modalEditar'

    var categoria = $(this).closest('tr').find('[data-categoria]').data('categoria')
    var descripcion = $(this).closest('tr').find('[data-descripcion]').data('descripcion')
    
    $(modalID + ' #idCatalogo').val(catalogoID)
    $(modalID + ' #categoria').val(categoria)
    $(modalID + ' #descripcion').val(descripcion)

    $(modalID).modal('show')
    return false
  })
})

//Editar formulario Productos
$(document).ready(function () {
  $('.btn-editar-trigger-producto').click(function () {
    var productoID = $(this).data('producto-id')
    var modalID = '#modalEditarProducto'
    var tr = $(this).closest('tr')
    var nombre = tr.find('[data-nombre]').data('nombre')
    var descripcion = tr.find('[data-descripcion]').data('descripcion')
    var precio = tr.find('[data-precio]').data('precio')
    var stock = tr.find('[data-stock]').data('stock')
    var fotografia = tr.find('[data-fotografia]').data('fotografia')
    var nombreProveedor = tr.find('[data-nombreProveedor]').data('nombreProveedor')
    var categoria = tr.find('[data-categoria]').data('categoria')

    // Asignar los valores al formulario y mostrar el modal
    $(modalID + ' #idDetalle').val(detalleID)
    $(modalID + ' #nombre').val(nombre)
    $(modalID + ' #descripcion').val(descripcion)
    $(modalID + ' #precio').val(precio)
    $(modalID + ' #stock').val(stock)
    $(modalID + ' #fotografia').val(fotografia)
    $(modalID + ' #idProveedor').val(nombreProveedor)
    $(modalID + ' #idCatalogo').val(categoria)

    $(modalID).modal('show')
    return false
  })
})