async function fetchData() {
    try {
        const response = await fetch('https://verify.zepedrofernandessampaio.workers.dev/', {
            method: 'GET', // Método GET, pode ser alterado dependendo da API
            headers: {
              'Content-Type': 'application/json'
            }
          });
          
          if (!response.ok) {
            throw new Error('Erro ao buscar dados');
          }
      const data = await response.json();
      fillTable(data.db)
      isUp(data.real)
    
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }

  function fillTable(data){
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
  }

  function isUp(data){
    const isUp = document.getElementById('isUp');
    if (data == "Tudo Certo!") {
      isUp.innerHTML="O site está online e a funcionar como esperado!"
      isUp.classList.add("up");
    }else{
      isUp.innerHTML=data
      isUp.classList.add("down");
    } 
  }

  fetchData();