fetch('https://datetime-api-3.onrender.com')
  .then(response => response.json())
  .then(data => {
    console.log(data);  // Verifique se a resposta da API é válida
    document.getElementById('datetime').textContent = data.datetime;
  })
  .catch(error => {
    document.getElementById('datetime').textContent = 'Erro ao carregar data e hora.';
    console.error(error);
  });


