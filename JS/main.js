let elMuviese__list = document.querySelector('.Muviese__list')
let elHeader__select = document.querySelector('.header__select')
let elMuviese__cardinfo = document.querySelector('.Muviese__cardinfo')
console.log(movies);

let partmovies = movies.slice(0, 68)
// console.log(partmovies);
partmovies.forEach((item) => {
  let newLi = document.createElement('li')
  newLi.classList = "list___item"
  newLi.innerHTML = `
<div class="card Muviese__card" style="width: 18rem;">
<img src="https://i.ytimg.com/vi/${item.ytid}/hqdefault.jpg?s…EcgRyhyMA8=&rs=AOn4CLC5JLtOUP_UJsSeRaAPbfOvqYr4BQ" class="card-img-top Muviese__cardimg" alt="...">
<div class="card-body Muviese__carddiv">
  <h5 class="card-title Muviese__cardtitle">${item.Title}</h5>
  <p class="card-text Muviese__cardtext">${item.summary.split(" ").slice(0, 10).join(" ")}...</p>
  <p class="card-text Muviese__cardinfo">${item.movie_year}</p>
  <p class="card-text Muviese__cardinfoo">${item.imdb_rating}</p>
  <a href="https://www.youtube.com/watch?v=${item.ytid}" class="btn btn-primary Muviese__carda" target="_blank">Whach film</a>
</div>
</div>`
  elMuviese__list.appendChild(newLi)
})

let opptionn = {
  movie_year: null,

}

elHeader__select.addEventListener( 'change',(e)=>{
console.log(elHeader__select.value);
})
// const filmSelect = document.getElementById('film-select');
// elHeader__select.addEventListener('change', () => {
//   const selectedYear = elHeader__select.value;
//   elMuviese__cardinfo.innerHTML = selectedYear
//   console.log( selectedYear);
//   // Boshqa ishlar bilan amalga oshirishingiz mumkin
// });

// elMuviese__cardinfo.textContent = selectedYear




















function fn() {
  // var str = elInp.value

  if (elInp.value.length >= 8 && elInp.value.match(/[a-zA-Z]/gi) && elInp.value.match(/[0-9]/g) && elInp.value.match(/[*+-/,.]/g) && elInp.value.trim()
     
  ) {
      elInp.style.borderBottom = '3px solid blue'
      elTitle.innerHTML = 'Kuchli pasword'
  } else {
      elInp.style.borderBottom = '3px solid green'
      elTitle.innerHTML = "Kuchsiz pasword"
  }




}





