$(document).ready(function () {
  $.validator.addMethod(
    'lettersonly',
    function (value, element) {
      return this.optional(element) || /^[a-zA-Z\s]*$/.test(value)
    },
    'Solo se permiten letras en este campo'
  )

  $('#formClientes, .modal-body form').each(function () {
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
