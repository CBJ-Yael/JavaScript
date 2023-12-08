const reproductor = {
    reproducir : (id)=>{
        console.log(`Reproduciendo música con el id: "${id}"`);
    },
    pausar : ()=>{
        console.log('Pausando...');
    },
    borrar : (id)=>{
        console.log(`Borrando música con el id: ${id}`);
    },
    crearPlaylist: (nombre)=>{
        console.log(`Creando Playlist con el nombre: ${nombre}`);
    },
    reproducirplayList: (nombre)=>{
        console.log(`Reproduciendo la Playlist: "${nombre}"`)
    }
}

reproductor.reproducir(50);
reproductor.pausar();

reproductor.borrar(50);

reproductor.crearPlaylist("Entrenar");

reproductor.reproducirplayList('Entrenar');
