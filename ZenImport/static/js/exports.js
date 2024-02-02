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
      },
      {
        extend: 'csv',
        text: '<i class="bi bi-filetype-csv"></i>',
        className: 'btn-csv',
      },
      {
        extend: 'excel',
        text: '<i class="bi bi-file-excel"></i>',
        className: 'btn-excel',
      },
      {
        extend: 'pdf',
        text: '<i class="bi bi-file-earmark-pdf"></i>',
        className: 'btn-pdf',
      },
      {
        extend: 'print',
        text: '<i class="bi bi-printer"></i>',
        className: 'btn-imprimir',
      },
    ],
  })
})
