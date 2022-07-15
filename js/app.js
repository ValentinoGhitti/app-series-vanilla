let seriesHTML = '';
const paginas = (tamañoElemento, numeroPagina) => {

}

const buscarSerie = async () => {
    return resultado = await fetch('http://api.tvmaze.com/shows').then(response => response.json());
};

buscarSerie().then((resultado) => {
    programa = new Series(resultado);
    programa.mostrarData();
    programa.barraBusqueda();
});
