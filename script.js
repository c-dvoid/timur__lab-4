//сделал через чат-гпт

function loadPage(page) {
    const content = document.getElementById('content');
  
    if (page === 'home') {
      content.innerHTML = '<p>Добро пожаловать на главную страницу!</p>';
      return;
    }
  
    fetch(page)
      .then(response => {
        if (!response.ok) throw new Error('Ошибка загрузки');
        return response.text();
      })
      .then(data => {
        const bodyContent = data.match(/<body[^>]*>((.|[\n\r])*)<\/body>/im);
        content.innerHTML = bodyContent ? bodyContent[1] : data;
      })
      .catch(error => {
        content.innerHTML = `<p style="color: red;">Ошибка загрузки страницы: ${error}</p>`;
      });
  }
  