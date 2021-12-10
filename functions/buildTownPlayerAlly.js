module.exports = function clean_sql_de_travian(data) {

    console.log("=========== FUNC BUILD ALL ===========")

    const newData = data[0];
    const oldDataTown = data[1];
    const oldDataPlayer = data[2];

    let sql_cleaned = newData;
    let olddata_village = oldDataTown;
    let olddata_player = oldDataPlayer;

    // console.log(data)

    //=============================================================
    //Fonction principale
    //=============================================================
    // let url = 'http://localhost:3000';
    let server = "ts7.x1.europe.travian.com"

    console.log("old dta imported successfully ")
    //Construit l'array des id de town
    let array_village = [];
    olddata_village.forEach(element => {
        array_village.push(element._id);
    });
    // console.log(array_village)
    //Construit l'array des id de player
    let array_player_olddata_id = [];
    olddata_player.forEach(element => {
        array_player_olddata_id.push(element._id);
    });

    //Construit la date
    let d = new Date();
    let test_date = d.getDate() + "/" + (d.getMonth() + 1);
    // test_date = "7/5";
    console.log(test_date);

    // let array_new_town_id = [];
    let array_new_town = [];

    let array_new_player_id = [];
    let array_new_player = [];

    let array_new_ally_id = [];
    let array_new_ally = [];
    console.log("start each town treatment")
    sql_cleaned.forEach(town_sql => {
        // town_sql_error = town_sql
        town_sql = town_sql.split(',');

        if (town_sql.length != 12) {
            // console.log("===error===")
            // console.log(town_sql)
            // console.log(town_sql_error)

        } else {

            save_town(olddata_village, array_village, town_sql, test_date, server);

            build_player(olddata_player, array_player_olddata_id, town_sql, array_new_player, array_new_player_id, server, test_date);

            build_ally(town_sql, array_new_ally, array_new_ally_id, server);
        }
    });


    function save_town(olddata_village, array_village, element, test_date, server) {
        let element_vivi;
        // if (town_sql[0] === "65471" || town_sql[0] === "65070") {
        //     console.log("=========AAAAAAAAAAAAAA")
        //     console.log(town_sql)
        // }
        // if (town_sql.length != 12) {
        //     console.log("===error===")
        //     console.log(town_sql)
        // }

        if (!array_village.includes(server + '_' + element[4])) {
            // console.log(server + '_' + element[4])
            // console.log("new vivi")
            if (element[5] != "") { element[5] = element[5].substring(1, element[5].length - 1) }

            element_vivi = {
                F: element[0], //emplacement vivi
                X: element[1], //x map
                Y: element[2], // y map
                T: element[3], // peuple
                _id: server + '_' + element[4],
                Vid: element[4],
                Vn: element[5],
                Uid: element[6],
                Un: element[7].substring(1, element[7].length - 1),
                Aid: element[8],
                An: element[9].substring(1, element[9].length - 1),
                Pop: [parseInt(element[10])],
                Day: [test_date]
            };

            array_new_town.push(element_vivi)

        } else {
            let ccc = olddata_village.find(truc => truc._id == server + '_' + element[4])
            // console.log(ccc.Day)
            // console.log(ccc)
            // console.log("peut-être maj")
            if (!ccc.Day.includes(test_date)) {
                // console.log("maj")
                ccc.Pop.push(parseInt(element[10]));
                ccc.Day.push(test_date);

                element_vivi = {
                    F: element[0],
                    X: element[1],
                    Y: element[2],
                    T: element[3],
                    _id: server + '_' + element[4],
                    Vid: element[4],
                    Vn: element[5],
                    Uid: element[6],
                    Un: element[7].substring(1, element[7].length - 1),
                    Aid: element[8],
                    An: element[9].substring(1, element[9].length - 1),
                    Pop: ccc.Pop,
                    Day: ccc.Day
                };

                array_new_town.push(element_vivi)

            }
        }
        return element_vivi;
    }
    function build_player(olddata_player, array_player_olddata_id, element, array_new_player, array_new_player_id, server, test_date) {
        let element_player;

        // console.log(array_new_player_id);
        // console.log(array_new_player)
        // console.log(element[6])

        if (!array_new_player_id.includes(server + '_' + element[6])) {
            // console.log("player")
            // console.log("add player");

            if (array_player_olddata_id.includes(server + '_' + element[6])) {

                let ccc = olddata_player.find(truc => truc._id == server + '_' + element[6])
                if (!ccc.Day.includes(test_date)) {

                    ccc.Pop.push(parseInt(element[10]))
                    ccc.Day.push(test_date)

                    element_player = {
                        _id: server + '_' + element[6],
                        Uid: element[6],
                        Un: element[7].substring(1, element[7].length - 1),
                        Aid: element[8],
                        An: element[9].substring(1, element[9].length - 1),
                        Vivi: [element[4]],
                        Pop: ccc.Pop,
                        Day: ccc.Day
                    }

                    // console.log("aaa");

                    // console.log(ccc.Day)
                    // console.log(ccc.Day.push(test_date))
                    // console.log(ccc.Pop)
                    // console.log(ccc.Pop.push(parseInt(element[10])))
                    // console.log(element_player)
                    array_new_player.push(element_player);
                    array_new_player_id.push(server + '_' + element[6]);
                }
            } else {
                // console.log("create new player");
                element_player = {
                    _id: server + '_' + element[6],
                    Uid: element[6],
                    Un: element[7].substring(1, element[7].length - 1),
                    Aid: element[8],
                    An: element[9].substring(1, element[9].length - 1),
                    Vivi: [element[4]],
                    Pop: [parseInt(element[10])],
                    Day: [test_date]
                }

                // console.log("aaa");
                array_new_player.push(element_player);
                array_new_player_id.push(server + '_' + element[6]);
            }

        } else {
            // console.log("update player");
            let index_of = array_new_player.findIndex(player => player.Uid == parseInt(element[6]));

            // console.log("a")
            if (index_of == -1) {
                console.log("aaa")
                console.log(index_of)
                // console.log(player)
                console.log(server + '_' + element[6])
            }

            // console.log(index_of);
            // console.log(array_new_player[index_of]);
            array_new_player[index_of].Vivi.push(element[4]);
            array_new_player[index_of].Pop[array_new_player[index_of].Pop.length - 1] += parseInt(element[10]);
        }

    }
    function build_ally(element, array_new_ally, array_new_ally_id, server) {

        if (element[8] == 0) {
            return
        }
        let element_ally;
        // console.log(array_new_ally_id)
        if (!array_new_ally_id.includes(server + '_' + element[8])) {
            // console.log("new ally")
            element_ally = {
                _id: server + '_' + element[8],
                Aid: element[8],
                An: element[9].substring(1, element[9].length - 1),
                Player: [element[6]]
            }
            array_new_ally.push(element_ally);
            array_new_ally_id.push(server + '_' + element[8]);
        } else if (element[8] != "0") {
            // console.log("add player")

            // console.log(array_new_ally);
            // console.log()
            let index_of = array_new_ally.findIndex(ally => ally._id == server + '_' + element[8])
            // console.log(index_of);
            // console.log(array_new_ally[index_of]);
            // if (index_of < 0) {
            //     // console.log(element);
            //     // console.log(index_of);
            //     // console.log(element[8])
            //     return
            // }
            // console.log(array_new_ally[index_of].Player)
            array_new_ally[index_of].Player.push(element[6])
            // uniq = [...new Set(array)];
            array_new_ally[index_of].Player = [... new Set(array_new_ally[index_of].Player)];

        }
    }

    if (array_new_town.length !== 0) {
        array_new_town.forEach(town => town.Pop_Player = array_new_player.find(player => player.Uid === town.Uid).Pop)
    } else {
        console.log("empty ERROR")
    }

    console.log(array_new_town.length)
    // console.log(array_new_town[0])
    console.log(array_new_player.length)
    // console.log(array_new_player[0])
    console.log(array_new_ally.length)
    // console.log(array_new_ally[0])
    console.log("end build town player ally //")


    // array_new_town = [array_new_town[0]]
    // array_new_player = [array_new_player[0]]
    // array_new_ally = [array_new_ally[0]]


    return [array_new_town, array_new_player, array_new_ally]

}