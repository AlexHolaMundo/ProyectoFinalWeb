//validacion para que permita el ingreso de letras y espacios
$.validator.addMethod(
  'lettersonly',
  function (value, element) {
    return this.optional(element) || /^[a-zA-Z\s]*$/.test(value)
  },
  'Solo se permiten letras en este campo'
)
//validacion para que permita el ingreso de comas y puntos en un campo con decimales
$.validator.addMethod(
  'numberonlyCommaPoint',
  function (value, element) {
    return this.optional(element) || /^[0-9,.]*$/.test(value)
  },
  'Solo puede ingresar números, puntos y comas'
)
$(document).ready(function () {
  $('#formClientes, .modal-clienteForm').each(function () {
    $(this).validate({
      rules: {
        idCliente: {
          required: true,
          number: true,
        },
        cedula: {
          required: true,
          number: true,
          minlength: 10,
          maxlength: 10,
        },
        nombre: {
          required: true,
          lettersonly: true,
          minlength: 3,
          maxlength: 50,
        },
        direccion: {
          required: true,
          minlength: 3,
          maxlength: 100,
        },
        email: {
          required: true,
          email: true,
        },
        telefono: {
          required: true,
          number: true,
          minlength: 7,
          maxlength: 10,
        },
      },
      messages: {
        idCliente: {
          required: 'El id del cliente es obligatorio',
          number: 'Este campo solo admite números',
        },
        cedula: {
          required: 'La cedula es obligatoria',
          number: 'Este campo solo admite números',
          minlength: 'La cedula debe tener 10 dígitos',
          maxlength: 'La cedula debe tener 10 dígitos',
        },
        nombre: {
          required: 'El nombre es obligatorio',
          lettersonly: 'Solo se permiten letras en este campo',
          minlength: 'El nombre debe tener al menos 3 caracteres',
          maxlength: 'El nombre debe tener menos de 50 caracteres',
        },
        direccion: {
          required: 'La direccion es obligatoria',
          minlength: 'La direccion debe tener al menos 3 caracteres',
          maxlength: 'La direccion debe tener menos de 100 caracteres',
        },
        email: {
          required: 'El email es obligatorio',
          email: 'El email debe ser válido',
        },
        telefono: {
          required: 'El telefono es obligatorio',
          number: 'El telefono debe ser un número',
          minlength: 'El telefono debe tener al menos 7 dígitos',
          maxlength: 'El telefono debe tener menos de 10 dígitos',
        },
      },
      ignore: function (index, element) {
        return $(element).hasClass('ignore-validation')
      },
    })
  })
})
//EditarFormulario de pedidos
$(document).ready(function () {
  $('#formPedidos, .modal-pedidoFormform').each(function () {
    $(this).validate({
      rules: {
        idPedido: {
          required: true,
          number: true,
        },
        fechaPedido: {
          required: true,
          date: true,
        },
        fechaEntrega: {
          required: true,
          date: true,
        },
        observaciones: {
          required: true,
          minlength: 3,
          maxlength: 100,
        },
        direccionEntrega: {
          required: true,
          minlength: 3,
          maxlength: 100,
          lettersonly: true,
        },
        idCliente: {
          required: true,
        },
      },
      messages: {
        idPedido: {
          required: 'El pedido es obligatorio',
          number: 'Este campo solo admite números',
        },
        fechaPedido: {
          required: 'La fecha de pedido es obligatoria',
          date: 'La fecha de pedido debe ser válida',
        },
        fechaEntrega: {
          required: 'La fecha de entrega es obligatoria',
          date: 'La fecha de entrega debe ser válida',
        },
        observaciones: {
          required: 'Las observaciones son obligatorias',
          minlength: 'Las observaciones deben tener al menos 3 caracteres',
          maxlength: 'Las observaciones deben tener menos de 100 caracteres',
        },
        direccionEntrega: {
          required: 'La direccion de entrega es obligatoria',
          minlength: 'La direccion de entrega debe tener al menos 3 caracteres',
          maxlength:
            'La direccion de entrega debe tener menos de 100 caracteres',
          lettersonly: 'Solo se permiten letras en este campo',
        },
        idCliente: {
          required: 'El cliente es obligatorio',
        },
      },
      ignore: function (index, element) {
        return $(element).hasClass('ignore-validation')
      },
    })
  })
})
//Validacion de proveedores
$(document).ready(function () {
  $('#formProveedores, .modal-proveedorForm').each(function () {
    $(this).validate({
      rules: {
        idProveedor: {
          required: true,
          number: true,
        },
        nombre: {
          required: true,
          lettersonly: true,
          minlength: 3,
          maxlength: 50,
        },
        email: {
          required: true,
          email: true,
        },
        pais: {
          required: true,
          lettersonly: true,
          minlength: 3,
          maxlength: 50,
        },
        ciudad: {
          required: true,
          lettersonly: true,
          minlength: 3,
          maxlength: 50,
        },
        logo: {
          required: true,
        },
      },
      messages: {
        idProveedor: {
          required: 'El id del proveedor es obligatorio',
          number: 'Este campo solo admite números',
        },
        nombre: {
          required: 'El nombre es obligatorio',
          lettersonly: 'Solo se permiten letras en este campo',
          minlength: 'El nombre debe tener al menos 3 caracteres',
          maxlength: 'El nombre debe tener menos de 50 caracteres',
        },
        email: {
          required: 'El email es obligatorio',
          email: 'El email debe ser válido',
        },
        pais: {
          required: 'El pais es obligatoria',
          lettersonly: 'Solo se permiten letras en este campo',
          minlength: 'El nombre debe tener al menos 3 caracteres',
          maxlength: 'El nombre debe tener menos de 50 caracteres',
        },
        ciudad: {
          required: 'La ciudad es obligatoria',
          lettersonly: 'Solo se permiten letras en este campo',
          minlength: 'El nombre debe tener al menos 3 caracteres',
          maxlength: 'El nombre debe tener menos de 50 caracteres',
        },
        logo: {
          required: 'El logo es obligatorios',
        },
      },
      ignore: function (index, element) {
        return $(element).hasClass('ignore-validation')
      },
    })
  })
})
//Validacion de proveedores
$(document).ready(function () {
  $('#formDetalles, .modal-detalleForm').each(function () {
    $(this).validate({
      rules: {
        idDetalle: {
          required: true,
          number: true,
        },
        cantidad: {
          number: true,
          required: true,
        },
        precioUnitario: {
          numberonlyCommaPoint: true,
          required: true,
        },
        descuento: {
          numberonlyCommaPoint: true,
          required: true,
        },
        subtotal: {
          numberonlyCommaPoint: true,
          required: true,
        },
        idPedido: {
          required: true,
          number: true,
        },
        idProducto: {
          required: true,
          number: true,
        },
      },
      messages: {
        idDetalle: {
          required: 'El id del detalle es obligatorio',
          number: 'Este campo solo admite números',
        },
        cantidad: {
          required: 'La cantidad es obligatoria',
          number: 'Este campo solo admite números',
        },
        precioUnitario: {
          required: 'El precio unitario es obligatorio',
        },
        descuento: {
          required: 'El descuento es obligatorio',
        },
        subtotal: {
          required: 'El subtotal es obligatorio',
        },
        idPedido: {
          required: 'El pedido es obligatorio',
          number: 'Este campo solo admite números',
        },
        idProducto: {
          required: 'El producto es obligatorio',
          number: 'Este campo solo admite números',
        },
      },
      ignore: function (index, element) {
        return $(element).hasClass('ignore-validation')
      },
    })
  })
})
