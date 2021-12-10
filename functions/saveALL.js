const data_ally = require('../models/data_ally');
const data_player = require('../models/data_player');
const data_town = require('../models/data_town');

module.exports = function saveALL(data) {

    console.log("=========== FUNC SAVE ALL  ===========")

    const array_new_town = data[0];
    const array_new_player = data[1];
    const array_new_ally = data[2];

    // console.log(array_new_town.length)
    // console.log(array_new_town[0])
    // console.log(array_new_player.length)
    // console.log(array_new_player[0])
    // console.log(array_new_player)
    // console.log(array_new_ally.length)
    // console.log(array_new_ally[0])

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    // let req, res;
    console.log("save all towns")
    if (array_new_town.length !== 0) {
        array_new_town.forEach(el => {
            const datafrom_town = new data_town(el);

            datafrom_town.save()
                .catch(() => {
                    // console.log("error at save town")
                    data_town.updateOne({ _id: el._id }, { Pop: el.Pop, Day: el.Day, Pop_Player: el.Pop_Player, Uid: el.Uid, Un: el.Un, Aid: el.Aid, An: el.An, Vn: el.Vn })
                        // .then(() => console.log('update town ok'))
                        .catch(() => console.log("error in save then update town"));
                })
        });
    } else {
        console.log("ERROR : no town to save")
    }


    console.log("save all players")
    if (array_new_player.length !== 0) {
        array_new_player.forEach(el => {
            const datafrom_player = new data_player(el);

            datafrom_player.save()
                .catch(() => {
                    // console.log("error at save player")
                    data_player.updateOne({ _id: el._id }, { Pop: el.Pop, Day: el.Day, Vivi: el.Vivi, Un: el.Un, Aid: el.Aid, An: el.An })
                        // .then(() => console.log('update player ok'))
                        .catch(() => console.log("error in save then update player"));
                })
        });
    } else {
        console.log("ERROR : no player to save")
    }

    console.log("save all allies")
    if (array_new_ally.length !== 0) {
        array_new_ally.forEach(el => {
            const datafrom_ally = new data_ally(el);
            datafrom_ally.save()
                .catch(() => {
                    // console.log("error at save ally")
                    data_ally.updateOne({ _id: el._id }, { Player: el.Player, Aid: el.Aid, An: el.An })
                        // .then(() => console.log('update ally ok'))
                        .catch(() => console.log("error in save then update ally"));
                })
        });
    } else {
        console.log("ERROR : no ally to save")
    }

    console.log("===========      END       ===========")
    console.log("all should be saved now")
    console.log(new Date)
};









// console.log("save all towns")
//     if (array_new_town.length !== 0) {
//         array_new_town.forEach(el => {
//             // console.log()
//             // let el = array_new_town[0]
//             // console.log(element)
//             // element.Pop_Player = [2]
//             // console.log(el)
//             // console.log("====================================================")
//             const datafroms2_town = new data_town(
//                 el
//             );

//             // console.log(datafroms2_town)

//             datafroms2_town.save()
//                 // .then(savedDoc => { console.log(savedDoc) })
//                 .catch(() => {
//                     // console.log("error at save town")
//                     data_town.updateOne({ _id: el._id }, { Pop: el.Pop, Day: el.Day, Pop_Player: el.Pop_Player, Uid: el.Uid, Un: el.Un, Aid: el.Aid, An: el.An, Vn: el.Vn })
//                         // .then(() => console.log('update town ok'))
//                         .catch(() => console.log("error in save then update town"));
//                 })
//             // .then(datafroms2_town => datafroms2_town.findOne().update())
//             // // .then ()
//             // .catch(() => console.log("error at update town"))

//             // data_town.updateOne({ _id: el._id }, { Pop: el.Pop, Day: el.Day, Pop_Player: el.Pop_Player, Uid: el.Uid, Un: el.Un, Aid: el.Aid, An: el.An, Vn: el.Vn })
//             //     .then(() => console.log('Objet modifié ddd !================'))
//             //     .catch(error => console.log(error));

//             // data_town.updateOne({ _id: req.body._id }, { ...req.body })
//             //     .then(() => res.status(200).json({ message: 'Objet modifié ddd !' }))
//             //     .catch(error => res.status(400).json({ error }));


//         });
//     } else {
//         console.log("ERROR : no town to save")
//     }