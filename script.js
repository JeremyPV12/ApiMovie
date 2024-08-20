/* document.querySelector('#button').addEventListener('click', function(){
    const getValue = document.querySelector('#searchMovie').value 
    if(getValue){
        getMovie(getValue)
    }
}) */

document.querySelector('#button').addEventListener('click', getMovie)

async function getMovie(){

    let getValue12 = document.querySelector('#searchMovie').value 
    let apiKey = '4c619ab635f5eb1da19eb8d7624130ad'
    
    let contentMain = document.querySelector('.contentMain')
    contentMain.innerHTML = ''

    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${getValue12}`)
    const responseInfo = await response.json();

    /* console.log(responseInfo.results.length) */
    if (responseInfo.results.length === 0 ) {
        /* return response404 */
        contentMain.innerHTML='Movie not found'
    }

    const responsePicture = `https://image.tmdb.org/t/p/original`
    const responsemore = responseInfo.results

    responsemore.forEach(element => {

        const divFather = document.createElement('div')

       /*  console.log(element) */

        const divSon = document.createElement('div')
        const divDaughter = document.createElement('div')

        const elementPicture = element.poster_path
        const image= document.createElement('img')
        image.src= responsePicture+ elementPicture
        image.alt = element.title
        image.classList.add('imageStyle')

        const name = document.createElement('h1')
        const release_date = document.createElement('h2')
        const popularity = document.createElement('h2')
        const overview = document.createElement('p')
        
        name.innerText = element.title.substring(0,36)
        name.classList.add('name')

        release_date.innerText = element.release_date
        release_date.classList.add('date')

        /* Convertir a int */
        const popu = Math.floor(element.popularity*100)/100 
        popularity.innerText = popu
        popularity.classList.add('popularity')


        /* Cortando el texto a solo 100 caracteres */
        overview.innerHTML = element.overview.substring(0,100)+'...'
        overview.classList.add('overview')
        
        divSon.appendChild(image)
        divDaughter.append(name,release_date,popularity,overview)

        divFather.append(divSon,divDaughter)
        contentMain.appendChild(divFather)

    }); 


}

getMovie()


/* const h ='Hola como estas'
const h2 = h.substring(0,5)+'...'
console.log(h2) */