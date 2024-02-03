//Editar formulario de Clientes
$(document).ready(function () {
  $('.btn-editar-trigger').click(function () {
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

//EditarFormulario de Productos
$(document).ready(function () {
  $('.btn-editar-trigger').click(function () {
    var pedidoID = $(this).data('pedido-id')
    var modalID = '#modalEditarPedido'

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
      .text()
    var direccionEntrega = $(this)
      .closest('tr')
      .find('[data-direccionEntrega]')
      .text()
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
