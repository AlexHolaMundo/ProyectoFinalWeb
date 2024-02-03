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
