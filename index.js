async function fetchData() {
    try {
      if (request.method === "OPTIONS") {
        return new Response(null, {
          headers: { 
            "Content-Type": "application/json",
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "DENY",
            "Referrer-Policy": "no-referrer",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Origin": "https://status.josefernandes.pt",
          },
        });
      }
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
      
      const tableBody = document.getElementById('table-body');
      data.forEach(item => {
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