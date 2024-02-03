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
