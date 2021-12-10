// const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) => {
//     // console.log(req.headers.authorization)
//     // console.log(req.body)
//     try {
//         const token = req.headers.authorization.split(' ')[1];
//         console.log("==========")
//         const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
//         const userId = decodedToken.userId;
//         console.log(userId)
//         // console.log(req.body.userId)
//         if (req.body.userId && req.body.userId !== userId) {
//             throw 'User ID non valable !';
//         } else {
//             next();
//         }
//     } catch (error) {
//         res.status(401).json({ error: 'Requête non authentifiée !' });
//     }
// };


// const authenticateRole = (roleArray) => (req, res, next) => {
//     if(!req.user) {
//       return res.status(401).json({
//         success: false,
//         message: 'Session expired',
//         code: 'SESSION_EXPIRED'
//       });
//     }
//     const authorized = false;
//   //if user has a role that is required to access any API
//     rolesArray.forEach(role => {
//      authorized = req.user.user_type === role;
//     })
//     if(authorized) {
//       return next();
//     }
//     return res.status(401).json({
//       success: false,
//       message: 'Unauthorized',
//     })
//   }