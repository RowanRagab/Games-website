// Display API Data

//DISPLAY ALL GAMES class
export class DisplayGameApi {
    async display(gameType = "shooter") {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6bd2919bf9msh136352e2af15ffdp11913fjsned7133690222',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        let Api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${gameType}`, options)

        let data = await Api.json()
        return data;
    }
}

//DISPLAY SPISIFIC DETAILS FOR GAME class
export class displayGameDetails {
    async spisificDetails(id = "540") {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6bd2919bf9msh136352e2af15ffdp11913fjsned7133690222',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        let ApiDetail = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        let playDetail = await ApiDetail.json();
        return playDetail;

    }
}

