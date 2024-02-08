// chartScript.js
//chart CLIENTES
document.addEventListener('DOMContentLoaded', () => {
  let statsVisible = true

  function updateChart() {
    fetch('/obtenerEstadisticasDireccion/')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        const ctx = document.getElementById('chartClientes').getContext('2d')
        const datasets = [
          {
            label: 'Ocultar estadísticas',
            data: data.datos,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
              'rgb(300, 102, 350, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
              'rgb(300, 102, 350)',
            ],
            borderWidth: 1,
          },
        ]

        if (statsVisible) {
          datasets.push({
            label: 'Ampliar',
            data: data.anchos_columnas,
            borderColor: 'rgba(0,0,0,0)',
            borderWidth: 0,
            backgroundColor: 'rgba(0,0,0,0)',
          })
        }

        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: data.labels,
            datasets: datasets,
          },
          options: {
            scales: {
              x: {
                position: 'bottom',
              },
              y: {
                beginAtZero: true,
                stepSize: 1,
              },
            },
            indexAxis: 'x',
          },
        })
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error)
      })
  }

  function toggleStats() {
    statsVisible = !statsVisible
    updateChart()
  }

  updateChart()
})

//chart Pedidos
document.addEventListener('DOMContentLoaded', () => {
  let statsVisible = true

  function updateChart() {
    fetch('/obtenerEstadisticasFecha/')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        const ctx = document.getElementById('chartPedidos').getContext('2d')
        const datasets = [
          {
            label: 'Ocultar estadísticas',
            data: data.datos,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
              'rgb(300, 102, 350, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
              'rgb(300, 102, 350)',
            ],
            borderWidth: 1,
          },
        ]

        if (statsVisible) {
          datasets.push({
            label: 'Ampliar',
            data: data.anchos_columnas,
            borderColor: 'rgba(0,0,0,0)',
            borderWidth: 0,
            backgroundColor: 'rgba(0,0,0,0)',
          })
        }

        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: data.labels,
            datasets: datasets,
          },
          options: {
            scales: {
              x: {
                position: 'bottom',
              },
              y: {
                beginAtZero: true,
                stepSize: 1,
              },
            },
            indexAxis: 'x',
          },
        })
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error)
      })
  }

  function toggleStats() {
    statsVisible = !statsVisible
    updateChart()
  }

  updateChart()
})

//chart Productos
document.addEventListener('DOMContentLoaded', () => {
  let statsVisible = true

  function updateChart() {
    fetch('/obtenerEstadisticasProducto/')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        const ctx = document.getElementById('chartDetalles').getContext('2d')
        const datasets = [
          {
            label: 'Ocultar estadísticas',
            data: data.datos,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
              'rgb(300, 102, 350, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
              'rgb(300, 102, 350)',
            ],
            borderWidth: 1,
          },
        ]

        if (statsVisible) {
          datasets.push({
            label: 'Ampliar',
            data: data.anchos_columnas,
            borderColor: 'rgba(0,0,0,0)',
            borderWidth: 0,
            backgroundColor: 'rgba(0,0,0,0)',
          })
        }

        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: data.labels,
            datasets: datasets,
          },
          options: {
            scales: {
              x: {
                position: 'bottom',
              },
              y: {
                beginAtZero: true,
                stepSize: 1,
              },
            },
            indexAxis: 'x',
          },
        })
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error)
      })
  }

  function toggleStats() {
    statsVisible = !statsVisible
    updateChart()
  }

  updateChart()
})
//chart Proveedor
document.addEventListener('DOMContentLoaded', () => {
  let statsVisible = true

  function updateChart() {
    fetch('/obtenerEstadisticasPais/')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        const ctx = document.getElementById('chartProveedores').getContext('2d')
        const datasets = [
          {
            label: 'Ocultar estadísticas',
            data: data.datos,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
              'rgb(300, 102, 350, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
              'rgb(300, 102, 350)',
            ],
            borderWidth: 1,
          },
        ]

        if (statsVisible) {
          datasets.push({
            label: 'Ampliar',
            data: data.anchos_columnas,
            borderColor: 'rgba(0,0,0,0)',
            borderWidth: 0,
            backgroundColor: 'rgba(0,0,0,0)',
          })
        }

        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: data.labels,
            datasets: datasets,
          },
          options: {
            scales: {
              x: {
                position: 'bottom',
              },
              y: {
                beginAtZero: true,
                stepSize: 1,
              },
            },
            indexAxis: 'x',
          },
        })
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error)
      })
  }

  function toggleStats() {
    statsVisible = !statsVisible
    updateChart()
  }

  updateChart()
})