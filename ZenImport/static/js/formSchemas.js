$(document).ready(function () {
  $.validator.addMethod(
    'lettersonly',
    function (value, element) {
      return this.optional(element) || /^[a-zA-Z\s]*$/.test(value)
    },
    'Solo se permiten letras en este campo'
  )

  $('#formClientes, .modal-clienteForm').each(function () {
    $(this).validate({
      rules: {
        idCliente: {
          required: true,
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
          required: 'El id de la carrera es obligatorio',
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
  $.validator.addMethod(
    'lettersonly',
    function (value, element) {
      return this.optional(element) || /^[a-zA-Z\s]*$/.test(value)
    },
    'Solo se permiten letras en este campo'
  )

  $('#formPedidos, .modal-pedidoFormform').each(function () {
    $(this).validate({
      rules: {
        idPedido: {
          required: true,
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
          required: 'El id de la carrera es obligatorio',
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
  $.validator.addMethod(
    'lettersonly',
    function (value, element) {
      return this.optional(element) || /^[a-zA-Z\s]*$/.test(value)
    },
    'Solo se permiten letras en este campo'
  )

  $('#formProveedores, .modal-proveedorForm').each(function () {
    $(this).validate({
      rules: {       
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