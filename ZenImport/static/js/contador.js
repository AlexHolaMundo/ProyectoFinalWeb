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

  // Llama a la función para actualizar el número de clientes al cargar la página
  actualizarNumeroClientes()

  // Puedes llamar a actualizarNumeroClientes() después de guardar un nuevo cliente para actualizar el número en tiempo real.
})
