/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const fetch = require('node-fetch');

const general = require('../models/general');
const data_ally = require('../models/data_ally');
const data_player = require('../models/data_player');
const data_array = require('../models/data_array');
const data_town = require('../models/data_town');

const function_test = require('../functions/import_travian');
const functionCleanSQL = require('../functions/clean_sql');
const functionBuildTownPlayerAlly = require('../functions/buildTownPlayerAlly');
// const functionSaveTown = require()
// const functionSavePlayer = require()
// const functionSaveAlly = require()
const functionSaveALL = require('../functions/saveALL');

// const functionALL = require()

const getData_old_SQL = require('../functions/functionALL2')

exports.statServer = (req, res, next) => {
    general.find() //{ vague: "1"}
        .then(all => res.status(200).json(all))
        .catch(error => res.status(400).json({ error }));
};


exports.statServerSQL = (req, res, next) => {

    fetch('https://' + req.params.server + '/map.sql')
        // fetch('https://ts2.travian.fr/map.sql')
        .then(reponse => reponse.text())
        .then(reponse => res.status(200).send(reponse))
        .catch(error => res.status(404).json({ error }));
};

exports.statServerSQL_AUTO3 = (req, res, next) => {
    console.log("test en route")
    console.log(new Date)
    let time_start = new Date;
    console.log("start")
    // let data_clean_ok = ["array1"]
    // let data_clean_ok2 = fetch('https://ts7.x1.europe.travian.com/map.sql')

    const new_data = new Promise((resolve, reject) => {
        fetch('https://ts7.x1.europe.travian.com/map.sql')
            .then(reponse => reponse.text())
            // .then(reponse => console.log(reponse))
            .catch(error => res.status(404).json({ error }));
    })
    const new_data2 = Promise.resolve(
        fetch('https://ts7.x1.europe.travian.com/map.sql')
            .then(reponse => reponse.text())
            .then(reponse => functionCleanSQL(reponse))
        // .then(reponse => reponse.length)
    )

    // const old_data_town = new Promise(data_player.find().exec())
    const old_data_town = Promise.resolve(
        data_town.find()
            .exec()
        // .then(res => res.length)
    )
    const old_data_player = Promise.resolve(
        data_player.find()
        // .then(res => res.length)
    )

    Promise.all([new_data2, old_data_town, old_data_player])
        // .then((values) => {
        //     console.log(values);
        // })
        .then(array => functionBuildTownPlayerAlly(array))

        .then(array => functionSaveALL(array))
        .catch(error => console.log(error))
    // .then(reponse => reponse.text())
    // .then(reponse => functionCleanSQL(reponse))
    // .then(reponse => {
    //     data_clean_ok.push(data_clean_ok2)
    //     // console.log(data_clean_ok)
    // })



    // .then(reponse => res.status(200).send(reponse))
    // .catch(error => res.status(404).json({ error }));
    // console.log("=== end main ===")
    // console.log(new Date)
    // console.log((Math.round((new Date - time_start) / 100)) / 10)
};

exports.statServerSQL_AUTO_EXTE = (req, res, next) => {
    functionALL()
};

exports.statServerSQL_AUTO = (req, res, next) => {
    console.log("test en cours // N°low X=X=X=X=X=X=X=X=X=X=X=X=X=X")
    let temp = getData_old_SQL()
    console.log(temp)
};

//============================================
//POST & PUT : ajoute ou maj player
//============================================
exports.savePlayerData = (req, res, next) => {
    // delete req.body._id;
    // Attack.find({ _id: req.params._id })
    const datafroms2_player = new data_player({
        ...req.body
    });
    datafroms2_player.save()
        .then(() => res.status(201).json({ message: 'Data s2 enregistrée PLAYER!' }))
        .catch(error => res.status(400).json(error));
};

exports.updatePlayerData = (req, res, next) => {
    data_player.updateOne({ _id: req.body._id }, { ...req.body })
        // data_player.save({ _id: req.body._id }, { ...req.body })
        .then(() => res.status(200).json({ message: 'Objet modifié ddd !' }))
        .catch(error => res.status(400).json({ error }));

    // const datafroms2_player = new data_player({
    //     ...req.body
    // });
    // datafroms2_player.save()
    //     .then(() => res.status(200).json({ message: 'Data s2 enregistrée PLAYER!' }))
    //     .catch(error => res.status(400).json(error));
};

exports.saveArray = (req, res, next) => {

    // data_array.insertMany(req.body, { ordered: false })
    //     // .then(() => console.log(req.body))
    //     .then(() => res.status(201).json({ message: 'Data s2 enregistrée PLAYER!' }))
    //     .catch(error => res.status(400).json(error));

    // req.body.forEach(element => {
    // data_array.drop({})

    console.log(req.body)
    // for (let i = 0; i < req.body.length; i++) {

    //     // console.log(element)
    let doc1 = new data_array({
        ...req.body[0]
    });

    // doc1.save(function (err, doc) {
    //     if (err) return console.error(err);
    //     console.log("Document inserted succussfully!");
    // });

    doc1.save()
        .then(() => res.status(201).json({ message: 'Data s2 enregistrée PLAYER!' }))
        .catch(error => res.status(400).json(error));
    // }
    // });
};
exports.updateArray = (req, res, next) => {

    // console.log("===PUT===")
    // console.log(req.body)

    let douze = 12
    const temp12 = function_test(douze)
    console.log(douze)
    console.log(temp12)

    const datafrom_player = new data_array({
        ...req.body
    });

    // console.log("===")
    // console.log(datafroms2_player)

    // data_array.updateOne({ _id: req.body[2]._id }, { ...req.body[2] })
    datafrom_player.save()
        .then(() => res.status(200).json({ message: 'Objet modifié ddd !' }))
        .catch(error => res.status(400).json({ error }));


    // const datafroms2_player = new data_player({
    //     ...req.body
    // });
    // datafroms2_player.save()
    //     .then(() => res.status(201).json({ message: 'Data s2 enregistrée PLAYER!' }))
    //     .catch(error => res.status(400).json(error));
    // };


};


//============================================
//POST & PUT : ajoute ou maj ally
//============================================
exports.saveAllyData = (req, res, next) => {
    // delete req.body._id;
    // Attack.find({ _id: req.params._id })
    // console.log("a==========z")
    const datafroms2_ally = new data_ally({
        ...req.body
    });
    datafroms2_ally.save()
        .then(() => res.status(201).json({ message: 'Data s2 enregistrée ally!' }))
        .catch(error => res.status(400).json(error));
};

exports.updateAllyData = (req, res, next) => {
    data_ally.updateOne({ _id: req.body._id }, { ...req.body })
        .then(() => res.status(200).json({ message: 'Objet modifié ddd !' }))
        .catch(error => res.status(400).json({ error }));
};
//============================================
//POST & PUT : ajoute ou maj town
//============================================
exports.saveTownData = (req, res, next) => {
    // delete req.body._id;
    // Attack.find({ _id: req.params._id })
    const datafroms2_town = new data_town({
        ...req.body
    });
    datafroms2_town.save()
        .then(() => res.status(201).json({ message: 'Data s2 enregistrée town!' }))
        .catch(error => res.status(400).json(error));
};

exports.updateTownData = (req, res, next) => {
    // console.log(req.body)
    data_town.updateOne({ _id: req.body._id }, { ...req.body })
        .then(() => res.status(200).json({ message: 'Objet modifié ddd !' }))
        .catch(error => res.status(400).json({ error }));

    // const datafroms2_town = new data_town({
    //     ...req.body
    // });
    // datafroms2_town.save()
    //     .then(() => res.status(201).json({ message: 'Data s2 enregistrée town!' }))
    //     .catch(error => res.status(400).json(error));
};


// exports.statTownOne = (req, res, next) => {
//     // data_town.findOne({ _id: { $regex: req.params.server} })
//     var temp = req.params.server
//     data_town.findOne({ _id: new RegExp(temp) })
//         .then(all => res.status(200).json(all))
//         .catch(error => res.status(400).json({ error }));
// };




exports.statGeneral = (req, res, next) => {

};
//============================================
//EXPORT (GET) : renvoie les data : Ally & Ally + id
//============================================
exports.statAllyOne = (req, res, next) => {
    data_ally.findOne({ _id: new RegExp(req.params.server + '_' + req.params.id) })
        .then(data_ally => res.status(200).json(data_ally))
        .catch(error => res.status(400).json({ error }));
};
exports.statAlly = (req, res, next) => {
    data_ally.find({ _id: new RegExp(req.params.server) }, { An: 1, Aid: 1 })
        .then(data_ally => res.status(200).json(data_ally))
        .catch(error => res.status(400).json({ error }));
};
//============================================
//EXPORT (GET) : renvoie les data : Player & Player + id
//============================================
exports.statPlayerOne = (req, res, next) => {
    data_player.findOne({ _id: new RegExp(req.params.server + '_' + req.params.id) })
        .then(data_player => res.status(200).json(data_player))
        .catch(error => res.status(400).json({ error }));
};
exports.statPlayer = (req, res, next) => {
    data_player.find({ _id: new RegExp(req.params.server) },
        // { Un: 1, Uid: 1, Aid: 1, Vivi: 1, Pop: 1, An: 1, Day }
    )
        .then(data_player => res.status(200).json(data_player))
        .catch(error => res.status(400).json({ error }));
};
//============================================
//EXPORT (GET) : renvoie les data : Town & Town + id
//============================================
exports.statTownOne = (req, res, next) => {
    data_town.findOne({ _id: new RegExp(req.params.server + '_' + req.params.id) })
        .then(data_town => res.status(200).json(data_town))
        .catch(error => res.status(400).json({ error }));
};
exports.statTown = (req, res, next) => {
    data_town.find({ _id: new RegExp(req.params.server) },
        { Uid: 1, Vn: 1, Pop: 1, X: 1, Y: 1, Day: 1, Pop_Player: 1 })
        .then(data_town => res.status(200).json(data_town))
        .catch(error => res.status(400).json({ error }));
};

exports.statTownDistRaid = (req, res, next) => {
    // console.log(req.params)
    // console.log(parseInt(req.params.x) - parseInt(req.params.dist))
    // console.log(parseInt(req.params.x) + parseInt(req.params.dist))
    // console.log("X" - parseInt(req.params.x))
    data_town.find({
        _id: new RegExp(req.params.server),
        // { $expr: { $gte: [Math.pow(Math.pow(("X" - req.params.x), 2) + Math.pow(("Y" - req.params.y), 2), 0.5), req.params.dist] } },
        // { $expr: { $gte: ["$X", req.params.dist] } },
        // { $expr: { $gte: ["X", "Y"] } },
        // { $expr: { $gt: ["$X", "$Y"] } },
        X: { $gt: parseInt(req.params.x) - parseInt(req.params.dist), $lt: parseInt(req.params.x) + parseInt(req.params.dist) },
        // X:  200 ,
        // X: { $gt: - req.params.dist, $lt: req.params.dist },
        // Y: { $gt: - req.params.dist, $lt: req.params.dist }
        Y: { $gt: parseInt(req.params.y) - parseInt(req.params.dist), $lt: parseInt(req.params.y) + parseInt(req.params.dist) }
        // $expr: { $gte: [Math.pow(Math.pow(("$X" - parseInt(req.params.x)), 2) + Math.pow(("$Y" - parseInt(req.params.y)), 2), 0.5), parseInt(req.params.dist)] }
        // $expr: { $gte: [$X, 198] }
        // $expr: {
        //     $function:
        //     {
        //         body: function (X, Y) {
        //             let distance = Math.pow(Math.pow((X - parseInt(req.params.x)), 2) + Math.pow((Y - parseInt(req.params.y)), 2), 0.5);
        //             console.log(distance)
        //             return distance <= parseInt(req.params.dist)
        //         },
        //         args: ["$X", "$Y"],
        //         lang: "js"
        //     }
        // }
        // }
    }
        , { Uid: 1, Un: 1, Vn: 1, Pop: 1, X: 1, Y: 1, Day: 1, _id: 0, An: 1, Pop_Player: 1 }


    )
        // .then(console.log("X" - parseInt(req.params.x)))
        .sort({ X: -1 })
        .sort({ Y: -1 })
        .then(data_town => res.status(200).json(data_town))
        .catch(error => res.status(400).json({ error }));
}