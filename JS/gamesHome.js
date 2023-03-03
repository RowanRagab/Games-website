//imports
import { DisplayGameApi, displayGameDetails } from "./UI game.js";
//declartions
export let popUp = document.querySelector(".popUp");
export let main = document.querySelector(".main");

popUp.classList.replace('d-block', 'd-none')
//display
let Row = document.querySelector('.row');
let gameLinks = document.querySelectorAll('li');

async function id() {
    let api = new DisplayGameApi();
    let games = await api.display();

    allGames(games);


} id()

//display active link from nav
for (let i = 0; i < gameLinks.length; i++) {

    gameLinks[i].addEventListener('click', async function (e) {
        let Attr = e.target.getAttribute('data-type');
        let api = new DisplayGameApi();
        let games = await api.display(Attr);
        allGames(games);

    })
}
//looping to display all games
export async function allGames(games) {

    let box = '';
    for (let i = 0; i < games.length; i++) {

        box += `
        <div class="col-md-3 p-2 cardShow">
        <div class="card p-3 border-dark border-1 bg-transparent">
            <div class="card-contant bg-transparent text-white position-relative">
                <div class="hover-bg  w-100 h-100 position-absolute rounded-4 "></div>
                <img src="${games[i].thumbnail}" class="card-img-top">
                <div class="card-body">
                  <div class="head-card clearfix">
                    <h5 class="card-title float-start w-75">${games[i].title} <br>id : ${games[i].id}</h5>
                  <a href="${games[i].freetogame_profile_url}" class="btn btn-primary float-end ">Free</a>
                  </div>
                  <p class="card-text text-secondary">${games[i].short_description.split(' ').slice(0, 8).join(" ")}</p>
                </div>
                <hr>
                <div class="footer-card clearfix">
                    <span class="float-end p-2">${games[i].platform}</span>
                    <span class="float-start p-2">${games[i].genre}</span>
                  </div>
              </div>
        </div>
         
    </div>
   
        `
    }

    //display spisific game
    Row.innerHTML = box;
    let cardShow = document.querySelector('.cardShow');
    let card = document.querySelectorAll('.card')
    for (let i = 0; i < card.length; i++) {
        card[i].addEventListener('click', async function () {
            popUp.classList.replace('d-none', 'd-block');
            main.classList.replace('d-block', 'd-none');
            var x = games[i].id;
           
            var y = new displayGameDetails();
            var z = await y.spisificDetails(x);
            id();
            console.log(z.id);


        })
    }
}

