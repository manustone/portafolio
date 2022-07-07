const home = document.getElementById('imagenPag1id')
const works = document.getElementById('imagenPag2id');
const aboutMe = document.getElementById('imagenPag3id');
const contactMe = document.getElementById('imagenPag4id');
const snapScroll = document.getElementById('snap');


const cargarAnimacion = (entradas, observador) => {

    entradas.forEach((entrada) => {
        if (entrada.isIntersecting && entrada.target.id == 'imagenPag2id') {
            console.log('Animacion 2 ON');
        } if (entrada.isIntersecting && entrada.target.id == 'imagenPag3id') {
            console.log('Animacion 3 ON');
        } if (entrada.isIntersecting && entrada.target.id == 'imagenPag4id') {
            console.log('Animacion 4 ON');
        } if (entrada.isIntersecting && entrada.target.id == 'imagenPag1id') {
            console.log('Animacion 1 ON');
        }
    });
}

const observador = new IntersectionObserver(cargarAnimacion, {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
});
observador.observe(home);
observador.observe(works);
observador.observe(aboutMe);
observador.observe(contactMe);
