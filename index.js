async function fetchData() {
    try {
        const response = await fetch('https://verify.zepedrofernandessampaio.workers.dev/', {
            method: 'GET', // Método GET, pode ser alterado dependendo da API
            headers: {
              'Content-Type': 'application/json'
            }
          });
          
          // Verifica se a resposta foi bem-sucedida
          if (!response.ok) {
            throw new Error('Erro ao buscar dados');
          }
      const data = await response.json();
      console.log(data);
      const tableBody = document.getElementById('table-body');
      data.db.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${item.ID}</td>
          <td>${item.Data}</td>
          <td>${item.Resultado}</td>
        `;
        tableBody.appendChild(row);
      });
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }

  fetchData();