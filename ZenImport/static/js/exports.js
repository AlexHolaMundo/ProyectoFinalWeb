$(document).ready(function () {
  $('#exportaciones').DataTable({
    paging: false,
    searching: false,
    ordering: false,
    info: false,
    dom: 'Bfrtip',
    buttons: [
      {
        extend: 'copy',
        text: '<i class="bi bi-copy"></i>',
        className: 'btn-copiar',
        init: function (api, node, config) {
          $(node).attr('title', 'Copiar al portapapeles')
        },
      },
      {
        extend: 'csv',
        text: '<i class="bi bi-filetype-csv"></i>',
        className: 'btn-csv',
        init: function (api, node, config) {
          $(node).attr('title', 'Exportar a CSV')
        },
      },
      {
        extend: 'excel',
        text: '<i class="bi bi-file-excel"></i>',
        className: 'btn-excel',
        init: function (api, node, config) {
          $(node).attr('title', 'Exportar a Excel')
        },
      },
      {
        extend: 'pdf',
        text: '<i class="bi bi-file-earmark-pdf"></i>',
        className: 'btn-pdf',
        init: function (api, node, config) {
          $(node).attr('title', 'Exportar a PDF')
        },
      },
      {
        extend: 'print',
        text: '<i class="bi bi-printer"></i>',
        className: 'btn-imprimir',
        init: function (api, node, config) {
          $(node).attr('title', 'Imprimir')
        },
      },
    ],
  })
})
