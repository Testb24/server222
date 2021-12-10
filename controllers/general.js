/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const general = require('../models/general');
const User = require('../models/user');

exports.statServer = (req, res, next) => {
    general.find() //{ vague: "1"}
        .then(all => res.status(200).json(all))
        .catch(error => res.status(400).json({ error }));
};

exports.createStatServer = (req, res, next) => {
    const attack = new general({
        ...req.body
    });
    attack.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré AAAAAA!' }))
        .catch(error => res.status(400).json({ message: 'Objet non enregistré !' }));
};

exports.statPlayer = (req, res, next) => {
    User.findOne({ _id: req.params.id }, { serveur: 1, _id: 0 })
        .then(user => res.status(200).json(user.serveur))
        .catch(error => res.status(400).json({ error }));
};

exports.majStatPlayer = (req, res, next) => {
    User.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({message: 'Objet modifié !'}))
        .catch(error => res.status(400).json({ error }));
};

// router.put('/api/stuff/:id', (req, res, next) => {
//     Attack.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
//         .then(() => res.status(200).json({ message: 'Objet modifié !' }))
//         .catch(error => res.status(400).json({ error }));
// });