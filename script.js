const API_URL = 'https://datetime-api-3.onrender.com/datetime';

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    document.getElementById('datetime').textContent = data.datetime;
  })
  .catch(error => {
    document.getElementById('datetime').textContent = 'Erro ao carregar data e hora.';
    console.error(error);
  });

