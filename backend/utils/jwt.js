require('dotenv').config();

const jwt = require('jsonwebtoken');



//Generate Token
module.exports.GenerateToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' },);
}



//Verify Token
module.exports.verifyToken = (req, res, next) => {

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
      // console.log(err)
      if (err) return res.sendStatus(403);
      req.token = token;
      next()
    })

}

//Decode Token
// module.exports.decodeToken = (token)=>{
//   let decode=jwt.decode(token,{complete:true})
//   return JSON.parse(decode);
// }

// module.exports.requireToken = (types, ...args) => {
//   if (!Array.isArray(types)) types = [types, ...args];
//   types = new Set(types);

//   return (req, res, next) => {
//       // If no token in given or token's type is not required type
//       if (!req.token || !types.has(req.token.type))
//           // return next(new AuthError(Array.from(types)));
//           return res.sendStatus(403);
//       next();
//   };
// };
