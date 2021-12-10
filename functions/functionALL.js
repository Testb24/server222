// const data_player = require('../models/data_player');



// // const url = "http://localhost:3000";
// // const url = "https://test-trav.herokuapp.com";
// // const url = "https://trav-server-0-2.herokuapp.com";
// let url = 'http://localhost:3000';
// // url = "https://trav-server-0-2.herokuapp.com";

// const DATA_TEST_TG =
//     `INSERT INTO \`x_world\` VALUES (62,-139,200,1,19596,'AZERAZER',2388,'dada49',30,'ALONE',222,null); 
// INSERT INTO \`x_world\` VALUES (716,114,199,2,20571,'00A60',586,'stopol',77,'DvG',145,null);
// INSERT INTO \`x_world\` VALUES (717,115,199,2,7154,'00 capi',586,'stopol',77,'DvG',491,null);
// INSERT INTO \`x_world\` VALUES (1117,114,198,1,20833,'00B60',1880,'loki',77,'DvG',92,null);
// INSERT INTO \`x_world\` VALUES (1118,115,198,2,19838,'00A70',586,'stopol',77,'DvG',409,null);
// INSERT INTO \`x_world\` VALUES (1124,121,198,1,19982,'00freia',1880,'loki',77,'DvG',152,null);
// INSERT INTO \`x_world\` VALUES (1523,119,197,1,18959,'00thor',1880,'loki',77,'DvG',603,null);
// INSERT INTO \`x_world\` VALUES (3583,174,192,3,20511,'V 02',3016,'hayot',171,'N.A',300,null);
// INSERT INTO \`x_world\` VALUES (3586,177,192,3,19483,'V 01',3016,'hayot',171,'',0,null);
// INSERT INTO \`x_world\` VALUES (4042,-169,190,3,20362,'2',761,'Neywok',0,'',11,null);
// INSERT INTO \`x_world\` VALUES (4045,-166,190,3,19236,'1',761,'Neywok',0,'',180,null);`


// dl_map_SQL("ts7.x1.europe.travian.com", url)


// //=============================================================
// //Fonction principale
// //=============================================================
// async function dl_map_SQL(server, url) {

//     //Récupère les _id & pop déjà enregistrés de chaque town :
//     let olddata_village = await getData_old_SQL("town", server, url);
//     let olddata_player = await getData_old_SQL("player", server, url);

//     async function getData_old_SQL(type, server, url) {
//         console.log(server)
//         let url_SQL;
//         url_SQL = url + "/api/server/" + server + "/" + type;
//         console.log(url_SQL)
//         // const response = await fetch(url_SQL, {
//         //     method: 'GET',
//         //     mode: 'cors',
//         //     cache: 'no-cache',
//         //     credentials: 'same-origin',
//         //     headers: {
//         //         'Content-Type': 'application/json'
//         //     },
//         //     redirect: 'follow',
//         //     referrerPolicy: 'no-referrer',
//         // });

//         const response =

//             data_player.find({ _id: new RegExp(server) }
//                 .then(data_player => console.log(data_player))
//                 // { Un: 1, Uid: 1, Aid: 1, Vivi: 1, Pop: 1, An: 1, Day }
//             )
//         // .then(data_player => res.status(200).json(data_player))
//         // .catch(error => res.status(400).json({ error }));

//         return response.json();
//     }
//     console.log("old dta imported successfully ")
//     //Construit l'array des id de town
//     let array_village = [];
//     olddata_village.forEach(element => {
//         array_village.push(element._id);
//     });
//     //Construit l'array des id de player
//     let array_player_olddata_id = [];
//     olddata_player.forEach(element => {
//         array_player_olddata_id.push(element._id);
//     });
//     // console.log(array_village)
//     let sql_cleaned = await clean_sql_de_travian(server);

//     //DATA TEST CHOICE
//     async function clean_sql_de_travian(server) {
//         // let DATA_FROM_TG = await getData_new_SQL(server);
//         // let DATA_FROM_TG = DATA_TEST_TG;

//         DATA_FROM_TG = ");" + DATA_FROM_TG.replace(/\r|\n/g, '').replace(/\); INSERT INTO `x_world` VALUES \(/g, '\);INSERT INTO `x_world` VALUES \(');

//         let DATA_FROM_TG_ARRAY = DATA_FROM_TG.split(');INSERT INTO `x_world` VALUES (');
//         DATA_FROM_TG_ARRAY[0] = DATA_FROM_TG_ARRAY[0].substring(34);

//         let aaa = DATA_FROM_TG_ARRAY.shift();

//         let testYY;

//         testYY = DATA_FROM_TG_ARRAY;
//         console.log("sql ok")

//         return testYY;
//     }
//     //Construit la date
//     let d = new Date();
//     let test_date = d.getDate() + "/" + (d.getMonth() + 1);
//     // test_date = "7/5";
//     console.log(test_date);

//     let array_new_town_id = [];
//     let array_new_town = [];

//     let array_new_player_id = [];
//     let array_new_player = [];

//     let array_new_ally_id = [];
//     let array_new_ally = [];
//     console.log("start each town treatment")
//     sql_cleaned.forEach(town_sql => {
//         // town_sql_error = town_sql
//         town_sql = town_sql.split(',');

//         if (town_sql.length != 12) {
//             // console.log("===error===")
//             // console.log(town_sql)
//             // console.log(town_sql_error)

//         } else {

//             save_town(olddata_village, array_village, town_sql, test_date, server);

//             build_player(olddata_player, array_player_olddata_id, town_sql, array_new_player, array_new_player_id, server, test_date);

//             build_ally(town_sql, array_new_ally, array_new_ally_id, server);


//         }
//     });

//     //=========================================
//     //PLAYER PLAYER PLAYER
//     //=========================================
//     let url_api = url + "/api/server/" + server + "/sql/player";

//     array_new_player.forEach(player => {

//         postData_SQL(url_api, player);
//         updateDATA_SQL(url_api, player);
//     });
//     console.log("player ok")
//     console.log(array_new_player.length)
//     //=========================================
//     //ALLY ALLY ALLY
//     //=========================================
//     url_api = url + "/api/server/" + server + "/sql/ally";

//     array_new_ally.forEach(element => {

//         postData_SQL(url_api, element);
//         updateDATA_SQL(url_api, element);
//     });
//     console.log("ally ok")
//     console.log(array_new_ally.length)
//     //=========================================
//     //TOWN TOWN TOWN
//     //=========================================
//     url_api = url + "/api/server/" + server + "/sql/town";

//     array_new_town.forEach(town => {

//         postData_SQL(url_api, town);
//         updateDATA_SQL(url_api, town);
//     });
//     console.log("town ok")
//     console.log(array_new_town.length)
//     console.log("end");
// }


// //GET 
// async function getData_new_SQL(server) {
//     let url_SQL;

//     // url_SQL = "https://test-trav.herokuapp.com/sql/travian/s2";
//     // url_SQL = "http://localhost:3000/sql/travian/s2";

//     // url_SQL = url + "/sql/travian/s2";
//     url_SQL = url + "/api/server/" + server + "/sql";

//     const response = await fetch(url_SQL, {
//         method: 'GET',
//         mode: 'cors',
//         cache: 'no-cache',
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         redirect: 'follow',
//         referrerPolicy: 'no-referrer',

//     });
//     // console.log(response);
//     // console.log(response.json());
//     return response.text();
// }
// //////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////
// //POST DATA
// async function postData_SQL(url = '', data = {}) {

//     const response = await fetch(url, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors', // no-cors, *cors, same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//         body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     // console.log("data_saved")
//     return response.json(); // parses JSON response into native JavaScript objects
// }
// //////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////
// //POST DATA test avec une array
// const btn_test = document.getElementById("TEST_TEST");

// btn_test.addEventListener("click", function () { test_test() });
// function test_test() {
//     console.log("ok test_test =====XXX")

//     // let data98 = [
//     //     { Pop: 111, _id: "10" },
//     //     { Pop: 20, _id: "22" },
//     //     { Pop: 17, _id: "178" }];
//     let data98 = { Pop: 222, _id: '178' };
//     // let url89 = "http://localhost:3000/api/server/ts7.x1.europe.travian.com/sql/array"
//     let url89 = "http://localhost:3000/api/server/ts7.x1.europe.travian.com/test/test"

//     postArray(url89, data98)
// }

// async function postArray(url = '', data = []) {

//     const response = await fetch(url, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors', // no-cors, *cors, same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//         body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     // console.log("data_saved")
//     return response.json(); // parses JSON response into native JavaScript objects
// }
// //////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////
// // PUT DATA
// async function updateDATA_SQL(url = '', data = {}) {

//     const response = await fetch(url, {
//         method: 'PUT', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors', // no-cors, *cors, same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//         body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     // console.log("data_changed")
//     return response.json(); // parses JSON response into native JavaScript objects
// }


// function save_town(olddata_village, array_village, element, test_date, server) {
//     let element_vivi;
//     if (town_sql[0] === "65471" || town_sql[0] === "65070") {
//         console.log("=========AAAAAAAAAAAAAA")
//         console.log(town_sql)
//     }
//     if (town_sql.length != 12) {
//         console.log("===error===")
//         console.log(town_sql)
//     }

//     if (!array_village.includes(server + '_' + element[4])) {
//         // console.log(server + '_' + element[4])
//         // console.log("new vivi")
//         if (element[5] != "") { element[5] = element[5].substring(1, element[5].length - 1) }

//         element_vivi = {
//             F: element[0], //emplacement vivi
//             X: element[1], //x map
//             Y: element[2], // y map
//             T: element[3], // peuple
//             _id: server + '_' + element[4],
//             Vid: element[4],
//             Vn: element[5],
//             Uid: element[6],
//             Un: element[7].substring(1, element[7].length - 1),
//             Aid: element[8],
//             An: element[9].substring(1, element[9].length - 1),
//             Pop: [parseInt(element[10])],
//             Day: [test_date]
//         };
//         // let url_api;

//         // url_api = url + "/api/server/" + server + "/sql/town";

//         // postData_SQL(url_api, element_vivi)
//         //     .then(data => {
//         //     });

//         array_new_town.push(element_vivi)

//     } else {
//         let ccc = olddata_village.find(truc => truc._id == server + '_' + element[4])
//         // console.log(ccc.Day)
//         // console.log(ccc)
//         // console.log("peut-être maj")
//         if (!ccc.Day.includes(test_date)) {
//             // console.log("maj")
//             ccc.Pop.push(parseInt(element[10]));
//             ccc.Day.push(test_date);

//             element_vivi = {
//                 F: element[0],
//                 X: element[1],
//                 Y: element[2],
//                 T: element[3],
//                 _id: server + '_' + element[4],
//                 Vid: element[4],
//                 Vn: element[5],
//                 Uid: element[6],
//                 Un: element[7].substring(1, element[7].length - 1),
//                 Aid: element[8],
//                 An: element[9].substring(1, element[9].length - 1),
//                 Pop: ccc.Pop,
//                 Day: ccc.Day
//             };

//             // // console.log(element_vivi);
//             // let url_api;
//             // // url_api = url + "/sql/data/town/s2";
//             // url_api = url + "/api/server/" + server + "/sql/town";

//             // updateDATA_SQL(url_api, element_vivi);

//             array_new_town.push(element_vivi)

//         } else {
//             // console.log("pas maj")
//         }
//     }
//     return element_vivi;
// }
// function build_player(olddata_player, array_player_olddata_id, element, array_new_player, array_new_player_id, server, test_date) {
//     let element_player;

//     // console.log(array_new_player_id);
//     // console.log(array_new_player)
//     // console.log(element[6])

//     if (!array_new_player_id.includes(server + '_' + element[6])) {
//         // console.log("player")
//         // console.log("add player");

//         if (array_player_olddata_id.includes(server + '_' + element[6])) {

//             let ccc = olddata_player.find(truc => truc._id == server + '_' + element[6])
//             if (!ccc.Day.includes(test_date)) {

//                 ccc.Pop.push(parseInt(element[10]))
//                 ccc.Day.push(test_date)

//                 element_player = {
//                     _id: server + '_' + element[6],
//                     Uid: element[6],
//                     Un: element[7].substring(1, element[7].length - 1),
//                     Aid: element[8],
//                     An: element[9].substring(1, element[9].length - 1),
//                     Vivi: [element[4]],
//                     Pop: ccc.Pop,
//                     Day: ccc.Day
//                 }

//                 // console.log("aaa");

//                 // console.log(ccc.Day)
//                 // console.log(ccc.Day.push(test_date))
//                 // console.log(ccc.Pop)
//                 // console.log(ccc.Pop.push(parseInt(element[10])))
//                 // console.log(element_player)
//                 array_new_player.push(element_player);
//                 array_new_player_id.push(server + '_' + element[6]);
//             }
//         } else {
//             // console.log("create new player");
//             element_player = {
//                 _id: server + '_' + element[6],
//                 Uid: element[6],
//                 Un: element[7].substring(1, element[7].length - 1),
//                 Aid: element[8],
//                 An: element[9].substring(1, element[9].length - 1),
//                 Vivi: [element[4]],
//                 Pop: [parseInt(element[10])],
//                 Day: [test_date]
//             }

//             // console.log("aaa");
//             array_new_player.push(element_player);
//             array_new_player_id.push(server + '_' + element[6]);
//         }

//     } else {
//         // console.log("update player");
//         let index_of = array_new_player.findIndex(player => player.Uid == parseInt(element[6]));

//         // console.log("a")
//         if (index_of == -1) {
//             console.log("aaa")
//             console.log(index_of)
//             // console.log(player)
//             console.log(server + '_' + element[6])
//         }

//         // console.log(index_of);
//         // console.log(array_new_player[index_of]);
//         array_new_player[index_of].Vivi.push(element[4]);
//         array_new_player[index_of].Pop[array_new_player[index_of].Pop.length - 1] += parseInt(element[10]);
//     }

// }
// function build_ally(element, array_new_ally, array_new_ally_id, server) {

//     if (element[8] == 0) {
//         return
//     }
//     let element_ally;
//     // console.log(array_new_ally_id)
//     if (!array_new_ally_id.includes(server + '_' + element[8])) {
//         // console.log("new ally")
//         element_ally = {
//             _id: server + '_' + element[8],
//             Aid: element[8],
//             An: element[9].substring(1, element[9].length - 1),
//             Player: [element[6]]
//         }
//         array_new_ally.push(element_ally);
//         array_new_ally_id.push(server + '_' + element[8]);
//     } else if (element[8] != "0") {
//         // console.log("add player")

//         // console.log(array_new_ally);
//         // console.log()
//         let index_of = array_new_ally.findIndex(ally => ally._id == server + '_' + element[8])
//         // console.log(index_of);
//         // console.log(array_new_ally[index_of]);
//         // if (index_of < 0) {
//         //     // console.log(element);
//         //     // console.log(index_of);
//         //     // console.log(element[8])
//         //     return
//         // }
//         // console.log(array_new_ally[index_of].Player)
//         array_new_ally[index_of].Player.push(element[6])
//         // uniq = [...new Set(array)];
//         array_new_ally[index_of].Player = [... new Set(array_new_ally[index_of].Player)];

//     }
// }