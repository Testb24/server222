/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const Attack = require('../models/attack');

exports.createAttack = (req, res, next) => {
    delete req.body._id;
    const attack = new Attack({
        ...req.body
    });
    attack.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
        .catch(error => res.status(400).json({ message: 'Objet non enregistré !' }));
};

exports.modifyThing = (req, res, next) => {
    Attack.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch(error => res.status(404).json({ error }));
};

exports.testAA = (req, res, next) => {
    Attack.find() //{ vague: "1"}
        .then(attacks => res.status(200).json(attacks))
        .catch(error => res.status(400).json({ error }));
}
