function randomImages(){
    var imageUrls = [
        'https://512pixels.net/downloads/macos-wallpapers-thumbs/10-5--thumb.png',
        'https://512pixels.net/downloads/macos-wallpapers-thumbs/10-5-Server-thumb.jpg',
        'https://512pixels.net/downloads/macos-wallpapers-thumbs/10-6--thumb.png',
        'https://512pixels.net/downloads/macos-wallpapers-thumbs/10-7--thumb.png',
        'https://512pixels.net/downloads/macos-wallpapers-thumbs/10-8--thumb.jpg',
        'https://512pixels.net/downloads/macos-wallpapers-thumbs/10-9--thumb.jpg',
        'https://512pixels.net/downloads/macos-wallpapers-thumbs/10-10--thumb.jpg',
        'https://512pixels.net/downloads/macos-wallpapers-thumbs/10-11--thumb.jpg',
        'https://512pixels.net/downloads/macos-wallpapers-thumbs/10-13--thumb.jpg',
        'https://512pixels.net/downloads/macos-wallpapers-thumbs/10-14-Day-Thumb.jpg',
        'https://512pixels.net/wp-content/uploads/2020/06/10-15-Day-thumb-500x500.jpg',
        'https://512pixels.net/wp-content/uploads/2020/06/11-0-Color-Day-thumbnails-500x500.jpg',
        'https://512pixels.net/wp-content/uploads/2021/06/12-Light-thumbnail-500x500.jpg',
        'https://512pixels.net/wp-content/uploads/2022/06/13-Ventura-Light-thumb-500x500.jpg',
        'https://512pixels.net/wp-content/uploads/2023/06/14-Sonoma-Light-thumb-500x500.jpg',
        'https://512pixels.net/downloads/macos-wallpapers-thumbs/10-12--thumb.jpg'
];   

var imagesContainer = document.getElementById('images');

function randomize(){

for (var i = 0; i < imageUrls.length; i++) {

    var imageRandom = Math.floor(Math.random() * (imageUrls.length));
    // Cria um elemento de imagem para cada URL
    var imageElement = document.createElement('img');
  
    // Define o atributo 'src' do elemento de imagem com a URL da imagem atual
    imageElement.src = imageUrls[imageRandom];

    imageElement.width = 1200;
    imageElement.height = 800;
  
    // Adiciona o elemento de imagem ao elemento contêiner
    imagesContainer.appendChild(imageElement);
  }
}

randomize();

window.addEventListener('scroll', endPage);

function endPage(){
    
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    randomize();
    }

}

}