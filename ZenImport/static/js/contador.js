//Contador Clientes
document.addEventListener('DOMContentLoaded', () => {
  function actualizarNumeroClientes() {
    fetch('/obtener_cantidad_clientes/')
      .then((response) => response.json())
      .then((data) => {
        const totalClientesElement = document.getElementById('totalClientes')
        totalClientesElement.innerText = data.total_clientes
      })
      .catch((error) => {
        console.error('Error al obtener la cantidad de clientes:', error)
      })
  }
  actualizarNumeroClientes()
})

//Contador Pedidos
document.addEventListener('DOMContentLoaded', () => {
  function actualizarNumeroPedidos() {
    fetch('/obtener_cantidad_pedidos/')
      .then((response) => response.json())
      .then((data) => {
        const totalPedidosElement = document.getElementById('totalPedidos')
        totalPedidosElement.innerText = data.total_pedidos
      })
      .catch((error) => {
        console.error('Error al obtener la cantidad de pedidos:', error)
      })
  }
  actualizarNumeroPedidos()
})

//Contador Detalles
document.addEventListener('DOMContentLoaded', () => {
  function actualizarNumeroDetalles() {
    fetch('/obtener_cantidad_detalles/')
      .then((response) => response.json())
      .then((data) => {
        const totalDetallesElement = document.getElementById('totalDetalles')
        totalDetallesElement.innerText = data.total_detalles
      })
      .catch((error) => {
        console.error('Error al obtener la cantidad de detalles:', error)
      })
  }
  actualizarNumeroDetalles()
})

//Contador Proveedores
document.addEventListener('DOMContentLoaded', () => {
  function actualizarNumeroProveedores() {
    fetch('/obtener_cantidad_proveedores/')
      .then((response) => response.json())
      .then((data) => {
        const totalProveedoresElement = document.getElementById('totalProveedores')
        totalProveedoresElement.innerText = data.total_proveedores
      })
      .catch((error) => {
        console.error('Error al obtener la cantidad de proveedores:', error)
      })
  }
  actualizarNumeroProveedores()
})

//Contador Catalogo
document.addEventListener('DOMContentLoaded', () => {
  function actualizarNumeroCatalogos() {
    fetch('/obtener_cantidad_catalogos/')
      .then((response) => response.json())
      .then((data) => {
        const totalCatalogosElement = document.getElementById('totalCatalogos')
        totalCatalogosElement.innerText = data.total_catalogos
      })
      .catch((error) => {
        console.error('Error al obtener la cantidad de catalogos:', error)
      })
  }
  actualizarNumeroCatalogos()
})
//Contador Productos
document.addEventListener('DOMContentLoaded', () => {
  function actualizarNumeroProductos() {
    fetch('/obtener_cantidad_productos/')
      .then((response) => response.json())
      .then((data) => {
        const totalProductosElement = document.getElementById('totalProductos')
        totalProductosElement.innerText = data.total_productos
      })
      .catch((error) => {
        console.error('Error al obtener la cantidad de productos:', error)
      })
  }
  actualizarNumeroProductos()
})