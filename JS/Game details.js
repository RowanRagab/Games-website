import { main, popUp } from "./gamesHome.js";
import { displayGameDetails } from "./UI game.js";
//declartion
let detail = document.querySelector('.detail');
let api = new displayGameDetails();
export let GameD = await api.spisificDetails();
let closeBtn = document.querySelector('.closeBtn');
//close Btn
closeBtn.addEventListener('click', function () {
    popUp.classList.replace('d-block', 'd-none');
    main.classList.replace('d-none', 'd-block');
})

console.log(GameD);
displayDetail()

// display details section
export function displayDetail() {
    let box = `
    <div class="col-md-4 detailReq  p-3">

                        <img class="w-100" src="${GameD.thumbnail}">
                    </div>
                    <div class="col-md-8 text-white p-3 ">
                        <ul class="list-unstyled">
                            <li class="h3 mb-4">Title: <span> ${GameD.title}</span></li>
                            <li class="h5 mb-4">Catgory: <span class="bg-info  rounded-2 p-1"> ${GameD.genre}</span>
                            </li>
                            <li class="h5 mb-4">Platform: <span class="bg-info rounded-2 p-1"> ${GameD.platform}</span>
                            </li>
                            <li class="h5 mb-4">Status: <span class="bg-info rounded-2 p-1">${GameD.status}</span></li>
                        </ul>
                        <p class="h5">${GameD.description}</p>
                        <button class="btn btn-outline-warning"><a href="${GameD.freetogame_profile_url}" class=" text-decoration-none text-white">Show
                                Game</a></button>
                    </div>
    
    `;

    detail.innerHTML = box;

}

