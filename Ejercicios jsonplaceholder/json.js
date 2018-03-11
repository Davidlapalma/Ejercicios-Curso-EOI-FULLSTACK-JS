var photos = 'https://jsonplaceholder.typicode.com/photos';

$.get(photos)
    .then (recogerfotos);

function recogerfotos(photos){  
    var trocear = photos.slice(0,99);
    trocear.forEach(photo => { 
       $('#photos').append( `<div class="col-3 card" style="width: 18rem;">
       <img class="card-img-top" src="${photo.url}" alt="Card image cap">
       <div class="card-body">
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       </div>
     </div>`)
    })
}
    console.log(photos);
