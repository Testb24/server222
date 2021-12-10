const data_player = require('../models/data_player');

module.exports = async function getData_old_SQL() {
    // let type = "player"
    let server = "ts7.x1.europe.travian.com"
    // let url = 
    // 'https://ts7.x1.europe.travian.com/map.sql'
    console.log(server)
    console.log("=======START=======")
    // let url_SQL;
    // url_SQL = url + "/api/server/" + server + "/" + type;
    // console.log(url_SQL)

    // const response = await fetch(url_SQL, {
    //     method: 'GET',
    //     mode: 'cors',
    //     cache: 'no-cache',
    //     credentials: 'same-origin',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     redirect: 'follow',
    //     referrerPolicy: 'no-referrer',
    // });

    // const response = 
    const response = await data_player.find(//{ _id: new RegExp(server) }
        // { Un: 1, Uid: 1, Aid: 1, Vivi: 1, Pop: 1, An: 1, Day }
    )
    // .then(data_player => console.log(data_player))
    // .then(reponse => reponse.text())
    // .then(data_player => data_player.json())
    // .then(data_player => console.log(data_player))
    // .catch(error => data_player.status(400).json({ error }));
    // console.log(response[0])
    return response;
}