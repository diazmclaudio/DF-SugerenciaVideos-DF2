const videos = (() => {
     {
          // variables privadas
          let musicaID = document.getElementById("musica");
          let peliculaID = document.getElementById("peliculas");
          let seriesID = document.getElementById("series");

          let fpMusica = (vMusica) => {
               musicaID.insertAdjacentHTML("afterbegin", vMusica);
          };

          let fpPeliculas = (vPelicula) => {
               peliculaID.insertAdjacentHTML("afterbegin", vPelicula);
          };

          let fpSeries = (vSeries) => {
               seriesID.insertAdjacentHTML("afterbegin", vSeries);
          };

          return {
               pfMusica: (musicaV) => {
                    fpMusica(musicaV);
               },
               pfPelicula: (pelculasV) => {
                    fpPeliculas(pelculasV);
               },
               pfSeries: (seriesV) => {
                    fpSeries(seriesV);
               },
          };
     }
})();

class Video {
     constructor(videoMusica, videoPelicula, videoSeries) {
          let _videoMusica = videoMusica;
          this.getVideoMusica = () => _videoMusica;
          this.setVideoMusica = (nuevoVideoMusica) =>
               (_videoMusica = nuevoVideoMusica);

          let _videoPelicula = videoPelicula;
          this.getVideoPelicula = () => _videoPelicula;
          this.setVideoPelicula = (nuevoVideoPelicula) =>
               (_videoPelicula = nuevoVideoPelicula);

          let _videoSeries = videoSeries;
          this.getVideoSeries = () => _videoSeries;
          this.setVideoSeries = (nuevoVideoSeries) =>
               (_videoSeries = nuevoVideoSeries);
     }

     get videoMusica() {
          return this.getVideoMusica();
     }
     set videoMusica(nuevoVideoMusica) {
          this.setVideoMusica(nuevoVideoMusica);
     }

     get videoPelicula() {
          return this.getVideoPelicula();
     }
     set videoPelicula(nuevoVideoPelicula) {
          this.setVideoPelicula(nuevoVideoPelicula);
     }

     get videoSeries() {
          return this.getVideoSeries();
     }
     set videoSeries(nuevoVideoSeries) {
          this.setVideoSeries(nuevoVideoSeries);
     }

     mostrarMusica() {
          let musica = `<iframe width="560" height="315" src=${this.videoMusica} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

          return videos.pfMusica(musica);
     }

     mostrarPelicula() {
          let pelicula = `<iframe width="560" height="315" src=${this.videoPelicula} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

          return videos.pfPelicula(pelicula);
     }

     mostrarSeries() {
          let series = `<iframe width="560" height="315" src=${this.videoSeries} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

          return videos.pfSeries(series);
     }
}

class Musica extends Video {
     constructor(videoMusica, videoPelicula, videoSeries) {
          super(videoMusica, videoPelicula, videoSeries);
     }
     mostrarMusica() {
          let musica = `<iframe width="560" height="315" src="${this.videoMusica}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

          return videos.pfMusica(musica);
     }
}

class Pelicula extends Video {
     constructor(videoMusica, videoPelicula, videoSeries) {
          super(videoMusica, videoPelicula, videoSeries);
     }
     mostrarPelicula() {
          let pelicula = `<iframe width="560" height="315" src=${this.videoPelicula} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

          return videos.pfPelicula(pelicula);
     }
}

class Series extends Video {
     constructor(videoMusica, videoPelicula, videoSeries) {
          super(videoMusica, videoPelicula, videoSeries);
     }
     mostrarSeries() {
          let series = `<iframe width="560" height="315" src=${this.videoSeries} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

          return videos.pfSeries(series);
     }
}

// Variables publicas con URL de YT
let vpMusica = "https://www.youtube.com/embed/fbhiTk_e4hE";
let vpPelicula = "https://www.youtube.com/embed/jtSrSYn5fIw";
let vpSeries = "https://www.youtube.com/embed/faqmNf_fZlE";

// Instanciar Objetos
let musica1 = new Musica(vpMusica,'','');
let pelicula1 = new Pelicula('', vpPelicula,'');
let series1 = new Series('','',vpSeries);

musica1.mostrarMusica();
pelicula1.mostrarPelicula();
series1.mostrarSeries();
