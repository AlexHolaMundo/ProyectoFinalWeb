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
  'Solo puede ingresar números'
)
// validacion para que la fecha no sea pasada
$.validator.addMethod(
  'fechaNoPasada',
  function (value, element) {
    var now = new Date()
    // Restar un día a la fecha actual
    now.setDate(now.getDate() - 1)
    var selectedDate = new Date(value)
    return selectedDate >= now
  },
  'La fecha de inicio no puede ser una fecha pasada'
)

//validacion para que la fecha tenga al menos 1 dia de diferencia
$.validator.addMethod(
  'fechaNoPasadaEntrega',
  function (value, element) {
    var now = new Date()
    // Restar un día a la fecha actual
    now.setDate(now.getDate() + 1)
    var selectedDate = new Date(value)
    return selectedDate >= now
  },
  'La fecha de entrega debe tener al menos 1 dia de diferencia'
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
          fechaNoPasada: true,
        },
        fechaEntrega: {
          required: true,
          date: true,
          fechaNoPasadaEntrega: true,
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
        },
        fechaEntrega: {
          required: 'La fecha de entrega es obligatoria',
          date: 'La fecha de entrega debe ser válida',
          fechaNoPasadaEntrega:
            'La fecha de entrega debe tener al menos 1 dia de diferencia ',
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
          minlength: 'El pais debe tener al menos 3 caracteres',
          maxlength: 'El pais debe tener menos de 50 caracteres',
        },
        ciudad: {
          required: 'La ciudad es obligatoria',
          lettersonly: 'Solo se permiten letras en este campo',
          minlength: 'La ciudad debe tener al menos 3 caracteres',
          maxlength: 'La ciudad debe tener menos de 50 caracteres',
        },
        logo: {
          required: 'El logo es obligatorio',
        },
      },
      ignore: function (index, element) {
        return $(element).hasClass('ignore-validation')
      },
    })
  })
})
//Validacion de detalle
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
          minlength: 1,
          maxlength: 2,
          numberonlyCommaPoint: true,
        },
        precioUnitario: {
          numberonlyCommaPoint: true,
          minlength: 1,
          maxlength: 6,
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
          minlength: 'La cantidad debe tener al menos 1 dígito',
          maxlength: 'La cantidad debe tener menos de 4 dígitos',
        },
        precioUnitario: {
          required: 'El precio unitario es obligatorio',
          minlength: 'El precio unitario debe tener al menos 1 dígito',
          maxlength: 'El precio unitario debe tener menos de 5 dígitos',
          numberonlyCommaPoint: 'Este campo solo admite números',
        },
        descuento: {
          required: 'El descuento es obligatorio',
          numberonlyCommaPoint: 'Este campo solo admite números',
        },
        subtotal: {
          required: 'El subtotal es obligatorio',
          numberonlyCommaPoint: 'Este campo solo admite números',
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
//Validacion de Catalogo
$(document).ready(function () {
  $('#formCatalogos, .modal-catalogoForm').each(function () {
    $(this).validate({
      rules: {
        idCatalogo: {
          required: true,
          number: true,
        },
        categoria: {
          required: true,
          lettersonly: true,
          minlength: 3,
          maxlength: 50,
        },
        descripcion: {
          required: true,
          lettersonly: true,
          minlength: 3,
          maxlength: 100,
        },
      },
      messages: {
        idCatalogo: {
          required: 'El id del catalogo es obligatorio',
          number: 'Este campo solo admite números',
        },
        categoria: {
          required: 'La Categoria es obligatorio',
          lettersonly: 'Solo se permiten letras en este campo',
          minlength: 'La Categoria debe tener al menos 3 caracteres',
          maxlength: 'La Categoria debe tener menos de 50 caracteres',
        },
        descripcion: {
          required: 'La Descripcion es obligatoria',
          lettersonly: 'Solo se permiten letras en este campo',
          minlength: 'La Descripcion debe tener al menos 3 caracteres',
          maxlength: 'La Descripcion debe tener menos de 100 caracteres',
        },
      },
      ignore: function (index, element) {
        return $(element).hasClass('ignore-validation')
      },
    })
  })
})
//Validacion de Producto
$(document).ready(function () {
  $('#formProductos, .modal-productoForm').each(function () {
    $(this).validate({
      rules: {
        idProducto: {
          required: true,
          number: true,
        },
        nombre: {
          required: true,
          lettersonly: true,
          minlength: 3,
          maxlength: 50,
        },
        precio: {
          numberonlyCommaPoint: true,
          required: true,
        },
        stock: {
          number: true,
          required: true,
        },
        descripcion: {
          required: true,
          minlength: 3,
          maxlength: 100,
        },
        fotografia: {
          required: true,
        },
        idCatalogo: {
          required: true,
        },
        idProveedor: {
          required: true,
        },
      },
      messages: {
        idProducto: {
          required: 'El id del detalle es obligatorio',
          number: 'Este campo solo admite números',
        },
        nombre: {
          required: 'El nombre es obligatorio',
          lettersonly: 'Solo se permiten letras en este campo',
          minlength: 'El nombre debe tener al menos 3 caracteres',
          maxlength: 'El nombre debe tener menos de 50 caracteres',
        },
        precio: {
          required: 'El precio  es obligatorio',
          numberonlyCommaPoint: 'Este campo solo admite números',
        },
        stock: {
          required: 'el stock es obligatorio',
          number: 'Este campo solo admite números',
        },
        descripcion: {
          required: 'La Descripcion es obligatoria',
          minlength: 'El nombre debe tener al menos 3 caracteres',
          maxlength: 'El nombre debe tener menos de 100 caracteres',
        },
        fotografia: {
          required: 'La Fotografia es obligatoria',
        },
        idCatalogo: {
          required: 'El catalogo es obligatorio',
        },
        idProveedor: {
          required: 'El proveedor es obligatorio',
        },
      },
      ignore: function (index, element) {
        return $(element).hasClass('ignore-validation')
      },
    })
  })
})

//Validacion de Producto
$(document).ready(function () {
  $('#formContacto').each(function () {
    $(this).validate({
      rules: {
        nombreEmisor: {
          required: true,
          lettersonly: true,
          minlength: 3,
          maxlength: 50,
        },
        destinatario: {
          required: true,
          email: true,
          minlength: 3,
          maxlength: 50,
        },
        asunto: {
          required: true,
          minlength: 3,
          maxlength: 100,
        },
        mensaje: {
          required: true,
          minlength: 3,
          maxlength: 1000,
        },
      },
      messages: {
        nombreEmisor: {
          required: 'El nombre es obligatorio',
          minlength: 'El nombre debe tener al menos 3 caracteres',
          maxlength: 'El nombre debe tener menos de 50 caracteres',
        },
        destinatario: {
          required: 'El destinatario es obligatorio',
          email: 'Ingrese un correo electronico valido',
          minlength: 'El destinatario debe tener al menos 3 caracteres',
          maxlength: 'El destinatario debe tener menos de 50 caracteres',
        },
        asunto: {
          required: 'El asunto es obligatorio',
          minlength: 'El asunto debe tener al menos 3 caracteres',
          maxlength: 'El asunto debe tener menos de 100 caracteres',
        },
        mensaje: {
          required: 'El mensaje es obligatorio',
          minlength: 'El mensaje debe tener al menos 3 caracteres',
          maxlength: 'El mensaje debe tener menos de 1000 caracteres',
        },
      },
      ignore: function (index, element) {
        return $(element).hasClass('ignore-validation')
      },
    })
  })
})
