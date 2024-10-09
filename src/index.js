console.log('%c HI', 'color: firebrick');
const imageContainer = document.getElementById('dog-image-container')
const breeedLi = document.getElementsByClassName('dog-breed')
function initialize(){
    fetch ('https://dog.ceo/api/breeds/image/random/4')
    .then (response => response.json())
    .then (image => image.message.forEach(function(image){
        renderImageToDOM(image)
    }))  
    getDogBreeds()
    filterMyBreeds()
}
initialize()


function renderImageToDOM(image){
    const imageDiv = document.createElement('div')
    imageDiv.innerHTML = `
    <img src="${image}"/>
    `
    imageContainer.appendChild(imageDiv)
}

function getDogBreeds(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then (response => response.json())
    
    .then (data => {
        const breeds = data.message
        
        Object.keys(breeds).forEach(breed => {
            rendersDogBreeds(breed)
          });
    })
}
function rendersDogBreeds(breed){
    const breedUl = document.getElementById('dog-breeds')
    const dogBreeds = document.createElement('li')
    dogBreeds.className = 'dog-breed'
    dogBreeds.style.cursor = 'pointer'
    dogBreeds.innerText = `${breed}`
    breedUl.appendChild(dogBreeds)
}

const myBreed = document.querySelectorAll('.dog-breed');

Array.from(myBreed).forEach(function(breed){
    console.log(breed.innerText)
    
})

function filterMyBreeds(){
    const myDropdown = document.getElementById('breed-dropdown')
    const myDogsContainer = document.getElementById('dog-breeds')

   myDropdown.addEventListener('change', function(){
    const selectedBreed = this.value;
    const myBreeds = myDogsContainer.children;

    Array.from(myBreeds).forEach(function(breed){
        if (breed.innerText.startsWith(selectedBreed)){
            breed.style.display = 'block'
        }
        else{
            breed.style.display = 'none'
        }
    })

   })
}

filterMyBreeds()