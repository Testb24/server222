/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();

// const Attack = require('../models/attack');
// const data_town = require('../models/data_town');
// const data_player = require('../models/data_player');
// const data_ally = require('../models/data_ally');

const stuffCtrl = require('../controllers/stuff');
const auth = require('../middleware/auth');

// router.post('/', stuffCtrl.createThing);
router.post('/',auth, stuffCtrl.createAttack);
router.get('/', auth, stuffCtrl.testAA);

// router.delete('/:id', stuffCtrl.modifyThing);

// router.get('/api/stuff/:id', (req, res, next) => {
//     Attack.findOne({ _id: req.params.id })
//         .then(attack => res.status(200).json(attack))
//         .catch(error => res.status(404).json({ error }));
// });
// router.get('/',auth, (req, res, next) => {
//     Attack.find() //{ vague: "1"}
//         .then(attacks => res.status(200).json(attacks))
//         .catch(error => res.status(400).json({ error }));
// });

// router.get('/api/stuff/:wave', (req, res, next) => {
//     // console.log(req);
//     Attack.find({ vague: req.params.wave })
//         .then(attack => res.status(200).json(attack))
//         .catch(error => res.status(404).json({ error }));
// });

// router.put('/api/stuff/:id', (req, res, next) => {
//     Attack.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
//         .then(() => res.status(200).json({ message: 'Objet modifié !' }))
//         .catch(error => res.status(400).json({ error }));
// });

// const fetch = require('node-fetch');
// const { text, json } = require('body-parser');



// router.get('/sql/travian/s2', (req, res, next) => {
//     fetch('https://ts2.travian.fr/map.sql')
//         .then(reponse => reponse.text())
//         .then(reponse => res.status(200).send(reponse))
//         .catch(error => res.status(404).json({ error }));
// });

// router.get('/sql/data/town/s2', (req, res, next) => {
//     data_town.find({}, { _id: 1, Pop: 1, Day: 1 }) //{ vague: "1"}
//         .then(data_town => res.status(200).json(data_town))
//         .catch(error => res.status(400).json({ error }));
// });

// router.get('/sql/data/player/s2', (req, res, next) => {
//     data_player.find({}, { _id: 1, Vivi: 1 }) //{ vague: "1"}
//         .then(data_player => res.status(200).json(data_player))
//         .catch(error => res.status(400).json({ error }));
// });

// // router.get('/sql/data/player/s2/:id', (req, res, next) => {
// //     data_player.findOne({ _id: req.params.id }, { _id: 1 , Vivi: 1}) //{ vague: "1"}
// //         .then(data_player => res.status(200).json(data_player))
// //         .catch(error => res.status(400).json({ error }));
// // });

// router.get('/sql/data/ally/s2', (req, res, next) => {
//     data_ally.find({}, { _id: 1, Player: 1 }) //{ vague: "1"}
//         .then(data_ally => res.status(200).json(data_ally))
//         .catch(error => res.status(400).json({ error }));
// });

// router.post('/sql/data/town/s2', (req, res, next) => {
//     // delete req.body._id;
//     // Attack.find({ _id: req.params._id })
//     const datafroms2_town = new data_town({
//         ...req.body
//     });
//     datafroms2_town.save()
//         .then(() => res.status(201).json({ message: 'Data s2 enregistrée !' }))
//         .catch(error => res.status(400).json(error));
// });

// router.post('/sql/data/player/s2', (req, res, next) => {
//     // delete req.body._id;
//     // Attack.find({ _id: req.params._id })
//     const datafroms2_player = new data_player({
//         ...req.body
//     });
//     datafroms2_player.save()
//         .then(() => res.status(201).json({ message: 'Data s2 enregistrée PLAYER!' }))
//         .catch(error => res.status(400).json(error));
// });

// router.post('/sql/data/ally/s2', (req, res, next) => {
//     // delete req.body._id;
//     // Attack.find({ _id: req.params._id })
//     const datafroms2_ally = new data_ally({
//         ...req.body
//     });
//     datafroms2_ally.save()
//         .then(() => res.status(201).json({ message: 'Data s2 enregistrée PLAYER!' }))
//         .catch(error => res.status(400).json(error));
// });

// router.put('/sql/data/town/s2', (req, res, next) => {
//     data_town.updateOne({ _id: req.body._id }, { ...req.body })
//         .then(() => res.status(200).json({ message: 'Objet modifié ddd !' }))
//         .catch(error => res.status(400).json({ error }));
// });

// router.put('/sql/data/player/s2', (req, res, next) => {
//     data_player.updateOne({ _id: req.body._id }, { ...req.body })
//         .then(() => res.status(200).json({ message: 'Objet modifié ddd !' }))
//         .catch(error => res.status(400).json({ error }));
// });

// router.put('/sql/data/ally/s2', (req, res, next) => {
//     data_ally.updateOne({ _id: req.body._id }, { ...req.body })
//         .then(() => res.status(200).json({ message: 'Objet modifié ddd !' }))
//         .catch(error => res.status(400).json({ error }));
// });

// router.get('/player/s2', (req, res, next) => {
//     data_player.find({}, { _id: 1, Player: 1 }) //{ vague: "1"}
//         .then(data_ally => res.status(200).json(data_ally))
//         .catch(error => res.status(400).json({ error }));
// });

// router.get('/player/s2:id', (req, res, next) => {
//     data_ally.find({}, { _id: 1, Player: 1 }) //{ vague: "1"}
//         .then(data_ally => res.status(200).json(data_ally))
//         .catch(error => res.status(400).json({ error }));
// });

// router.get('/api/stuff/:id', (req, res, next) => {
//     Attack.findOne({ _id: req.params.id })
//         .then(attack => res.status(200).json(attack))
//         .catch(error => res.status(404).json({ error }));
// });

module.exports = router;