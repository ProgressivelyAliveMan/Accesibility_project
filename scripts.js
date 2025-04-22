let audioActual = null;
let botonActual = null;

document.querySelectorAll('.boton').forEach(boton => {
  boton.addEventListener('click', () => {
    const archivo = boton.getAttribute('data-audio');

    if (audioActual && botonActual !== boton) {
      audioActual.pause();
      botonActual.querySelector('.icono').className = 'bx bx-play icono';
    }

    if (audioActual && !audioActual.paused && botonActual === boton) {
      audioActual.pause();
      boton.querySelector('.icono').className = 'bx bx-play icono';
      return;
    }

    if (!audioActual || botonActual !== boton) {
      audioActual = new Audio(archivo);
      botonActual = boton;
    }

    audioActual.play();
    boton.querySelector('.icono').className = 'bx bx-pause icono';

    audioActual.onended = () => {
      boton.querySelector('.icono').className = 'bx bx-play icono';
    };
  });
});
