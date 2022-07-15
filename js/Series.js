class Series {
    constructor(data) {
        this.series = data;
    };
    mostrarData() {
        let body = ''
        this.series.forEach(elemento => {
            body += `
            <div class="text-dark modal fade" id="modal-${elemento.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Ficha Técnica</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body ">
                            <div class="d-flex justify-content-end">
                                <div class="col-6">
                                    <img id="cartelera" src="${elemento.image.medium}" width="200px" alt="">
                                </div>
                                <div class="col-6">
                                    <h2 id="titulo"class="card-title d">${elemento.name}</h2>
                                    <span id="argumento" class="card-text">${elemento.summary}</span>
                                </div>
                            </div>
                            
                            <div>                            
                                <span>Idioma: ${elemento.language}</span><br>
                                <span>Generos: ${elemento.genres}</span><br>
                                <span>Estado: ${elemento.status}</span><br>
                                <span>Fecha de premier: ${elemento.premiered}</span><br>
                                <span>Sitio Oficial:<a class="text-danger" href=""> ${elemento.officialSite}</a></span><br>
                                <span>Productora: ${elemento.network ? elemento.network.name : 'Sin información'}</span><br>
                                <span>Rating Promedio: ${elemento.rating.average}</span><br>
                            </div>                           
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div data-bs-toggle="modal" data-bs-target="#modal-${elemento.id}">
                <div class=" mb-3" style=" border: 1px solid #441853; height: 220px;">
                    <a href="#tarjeta">
                        <div class="row" style="background-color:#11041D; border: 1px solid #441853">
                            <div class="col-md-4">
                                <img src="${elemento.image.medium}" height="220px" width="170px"" alt="visualizacion">
                            </div>
                            <div class="col-md-8 "> 
                                <div class="card-body">
                                    <h5 class=" pt-5 card-title">${elemento.name}</h5>
                                </div>
                            </div> 
                        </div>
                    </a>
                </div>
            </div>
            `
        });
        document.getElementById('data').innerHTML = body;
    };
    barraBusqueda(){
        const searchBar = document.getElementById('searchBar');
        searchBar.addEventListener('keyup', (e) =>{
            const objetoBusqueda = e.target.value.toLowerCase();
            const seriesFiltradas = this.series.filter((elemento) => {
                return elemento.name.toLowerCase().includes(objetoBusqueda);
            });
            
            let body = '';

            seriesFiltradas.forEach(elemento =>{
                body += `
                <div class="text-dark modal fade" id="modal-${elemento.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Ficha Técnica</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body ">
                            <div class="d-flex justify-content-end">
                                <div class="col-6">
                                    <img id="cartelera" src="${elemento.image.medium}" width="200px" alt="">
                                </div>
                                <div class="col-6">
                                    <h2 id="titulo"class="card-title d">${elemento.name}</h2>
                                    <span id="argumento" class="card-text">${elemento.summary}</span>
                                </div>
                            </div>
                            <div>                            
                                <span>Idioma: ${elemento.language}</span><br>
                                <span>Generos: ${elemento.genres}</span><br>
                                <span>Estado: ${elemento.status}</span><br>
                                <span>Fecha de premier: ${elemento.premiered}</span><br>
                                <span>Sitio Oficial:<a class="text-danger" href=""> ${elemento.officialSite}</a></span><br>
                                <span>Productora: ${elemento.network}</span><br>
                                <span>Rating Promedio: ${elemento.rating.average}</span><br>
                            </div>                           
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div data-bs-toggle="modal" data-bs-target="#modal-${elemento.id}">
                <div class=" mb-3" style=" border: 1px solid #441853; height: 220px;">
                    <a href="#tarjeta">
                        <div class="row" style="background-color:#11041D; border: 1px solid #441853">
                            <div class="col-md-4">
                                <img src="${elemento.image.medium}" height="220px" width="170px"" alt="visualizacion">
                            </div>
                            <div class="col-md-8 "> 
                                <div class="card-body">
                                    <h5 class=" pt-5 card-title">${elemento.name}</h5>
                                </div>
                            </div> 
                        </div>
                    </a>
                </div>
            </div>
        `
            })
            document.getElementById('data').innerHTML = body;
        });
    };
};