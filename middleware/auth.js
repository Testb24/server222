/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // console.log(req.headers.authorization)
  // console.log(req.body)
  try {
    const token = req.headers.authorization.split(' ')[1];
    // console.log("==========")
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    // console.log("AAA0");
    // console.log(decodedToken)
    const userId = decodedToken.userId;
    // console.log(userId)
    // console.log(req.body.userId)

    //   if (req.body.userId && req.body.userId !== userId) {
    //     throw 'User ID non valable !';
    // } else {

    console.log("AAA1");
    jwt.verify(token, 'RANDOM_TOKEN_SECRET', (err, verifiedJwt) => {
      if (err) {
        // res.send(err.message)
        console.log("AAA2");
        throw 'User ID non valable !';
      } else {
        // res.send(verifiedJwt)
        // console.log("AAA3");
        // console.log(verifiedJwt.userId)
        req.userId = verifiedJwt.userId;
        // console.log(decodedToken);
        // console.log(verifiedJwt)
        next();
      }
    })

    // if (req.body.userId && req.body.userId !== userId) {
    //   throw 'User ID non valable !';
    // } else {
    //   next();
    // }

    // if (req.body.userId && req.body.userId !== userId) {
    //     throw 'User ID non valable !';
    // } else {
    //     // console.log(req.body.userId !== userId)
    //     next();
    // }

  } catch (error) {
    res.status(401).json({ error: 'Requête non authentifiée !' });
  }
};