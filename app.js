// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.


var app = new Vue({
    el: '#root',
    data: {
      message: "Hello World!",
      image: "https://wallpaperaccess.com/full/4584342.png",
      imgStyle : {
          'width': '900px'
      },
      textStyle : {
          'color': 'blue',
          'font-size': '3rem'
      }
    }
});

