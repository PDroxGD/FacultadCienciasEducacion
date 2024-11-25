// Selecciona el checkbox y el menú
const checkbox = document.getElementById('checkbox');
const menu = document.querySelector('.menu');
const li = document.querySelectorAll('.menu ul li');


// Escucha el evento 'change' del checkbox
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    // Mostrar menú
    menu.style.display = 'flex'; 

    li.forEach((objeto) => {
      objeto.style.padding = '13px 30px'; 
    });
  } else {
    // Ocultar menú
    menu.style.display = 'none';
    li.forEach((objeto) => {
      objeto.style.padding = '0'; 
    });
  }
});


document.ready