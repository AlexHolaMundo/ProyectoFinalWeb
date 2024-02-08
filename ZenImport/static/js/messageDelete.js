//Mensajes de confirmación para eliminar un cliente
function eliminarCliente(url) {
  iziToast.show({
    timeout: 15000,
    close: true,
    overlay: true,
    displayMode: 'once',
    id: 'question',
    zindex: 999,
    title: '<i class="bi bi-exclamation-octagon"></i> Advertencia',
    message: `¿Está seguro de eliminar el <strong>cliente</strong> seleccionado?
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Esta acción no se puede deshacer.</strong>`,
    position: 'center',
    progressBarColor: '#c1e2f9',
    buttons: [
      [
        '<button class="btn-eliminar-si"><i class="bi bi-check2-circle"></i> SI</button>',
        function (instance, toast) {
          instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
          window.location.href = url
        },
        true,
      ],
      [
        '<button class="btn-eliminar-no"><i class="bi bi-ban"></i> NO</button>',
        function (instance, toast) {
          instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
        },
      ],
    ],
    messageColor: 'dark',
    messageSize: '18px',
    messageLineHeight: '24px',
    theme: '#222222',
    color: '#dbf2f2',
    closeOnEscape: true,
    drag: true,
  })
}

//Mensajes de confirmación para eliminar un pedido
function eliminarPedido(url) {
  iziToast.show({
    timeout: 15000,
    close: true,
    overlay: true,
    displayMode: 'once',
    id: 'question',
    zindex: 999,
    title: '<i class="bi bi-exclamation-octagon"></i> Advertencia',
    message: `¿Está seguro de eliminar el <strong>pedido</strong> seleccionado?
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Esta acción no se puede deshacer.</strong>`,
    position: 'center',
    progressBarColor: '#c1e2f9',
    buttons: [
      [
        '<button class="btn-eliminar-si"><i class="bi bi-check2-circle"></i> SI</button>',
        function (instance, toast) {
          instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
          window.location.href = url
        },
        true,
      ],
      [
        '<button class="btn-eliminar-no"><i class="bi bi-ban"></i> NO</button>',
        function (instance, toast) {
          instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
        },
      ],
    ],
    messageColor: 'dark',
    messageSize: '18px',
    messageLineHeight: '24px',
    theme: '#222222',
    color: '#dbf2f2',
    closeOnEscape: true,
    drag: true,
  })
}
//Mensajes de confirmación para eliminar un proveedor
function eliminarProveedor(url) {
  iziToast.show({
    timeout: 15000,
    close: true,
    overlay: true,
    displayMode: 'once',
    id: 'question',
    zindex: 999,
    title: '<i class="bi bi-exclamation-octagon"></i> Advertencia',
    message: `¿Está seguro de eliminar el <strong>proveedor</strong> seleccionado?
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Esta acción no se puede deshacer.</strong>`,
    position: 'center',
    progressBarColor: '#c1e2f9',
    buttons: [
      [
        '<button class="btn-eliminar-si"><i class="bi bi-check2-circle"></i> SI</button>',
        function (instance, toast) {
          instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
          window.location.href = url
        },
        true,
      ],
      [
        '<button class="btn-eliminar-no"><i class="bi bi-ban"></i> NO</button>',
        function (instance, toast) {
          instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
        },
      ],
    ],
    messageColor: 'dark',
    messageSize: '18px',
    messageLineHeight: '24px',
    theme: '#222222',
    color: '#dbf2f2',
    closeOnEscape: true,
    drag: true,
  })
}
//Mensajes de confirmación para eliminar un catalogo
function eliminarCatalogo(url) {
  iziToast.show({
    timeout: 15000,
    close: true,
    overlay: true,
    displayMode: 'once',
    id: 'question',
    zindex: 999,
    title: '<i class="bi bi-exclamation-octagon"></i> Advertencia',
    message: `¿Está seguro de eliminar el <strong>catalogo</strong> seleccionado?
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Esta acción no se puede deshacer.</strong>`,
    position: 'center',
    progressBarColor: '#c1e2f9',
    buttons: [
      [
        '<button class="btn-eliminar-si"><i class="bi bi-check2-circle"></i> SI</button>',
        function (instance, toast) {
          instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
          window.location.href = url
        },
        true,
      ],
      [
        '<button class="btn-eliminar-no"><i class="bi bi-ban"></i> NO</button>',
        function (instance, toast) {
          instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
        },
      ],
    ],
    messageColor: 'dark',
    messageSize: '18px',
    messageLineHeight: '24px',
    theme: '#222222',
    color: '#dbf2f2',
    closeOnEscape: true,
    drag: true,
  })
}
//Mensajes de confirmación para eliminar un detalle
function eliminarDetalle(url) {
  iziToast.show({
    timeout: 15000,
    close: true,
    overlay: true,
    displayMode: 'once',
    id: 'question',
    zindex: 999,
    title: '<i class="bi bi-exclamation-octagon"></i> Advertencia',
    message: `¿Está seguro de eliminar el <strong>detalle</strong> seleccionado?
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Esta acción no se puede deshacer.</strong>`,
    position: 'center',
    progressBarColor: '#c1e2f9',
    buttons: [
      [
        '<button class="btn-eliminar-si"><i class="bi bi-check2-circle"></i> SI</button>',
        function (instance, toast) {
          instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
          window.location.href = url
        },
        true,
      ],
      [
        '<button class="btn-eliminar-no"><i class="bi bi-ban"></i> NO</button>',
        function (instance, toast) {
          instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
        },
      ],
    ],
    messageColor: 'dark',
    messageSize: '18px',
    messageLineHeight: '24px',
    theme: '#222222',
    color: '#dbf2f2',
    closeOnEscape: true,
    drag: true,
  })
}//Mensajes de confirmación para eliminar un producto
function eliminarProducto(url) {
  iziToast.show({
    timeout: 15000,
    close: true,
    overlay: true,
    displayMode: 'once',
    id: 'question',
    zindex: 999,
    title: '<i class="bi bi-exclamation-octagon"></i> Advertencia',
    message: `¿Está seguro de eliminar el <strong>producto</strong> seleccionado?
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Esta acción no se puede deshacer.</strong>`,
    position: 'center',
    progressBarColor: '#c1e2f9',
    buttons: [
      [
        '<button class="btn-eliminar-si"><i class="bi bi-check2-circle"></i> SI</button>',
        function (instance, toast) {
          instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
          window.location.href = url
        },
        true,
      ],
      [
        '<button class="btn-eliminar-no"><i class="bi bi-ban"></i> NO</button>',
        function (instance, toast) {
          instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
        },
      ],
    ],
    messageColor: 'dark',
    messageSize: '18px',
    messageLineHeight: '24px',
    theme: '#222222',
    color: '#dbf2f2',
    closeOnEscape: true,
    drag: true,
  })
}