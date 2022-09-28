// import jwt
const jwt = require("jsonwebtoken");

const secret = "bigolsecret";
const expiration = "2h";

// create signed token
function signToken({ username, email, _id }) {
  const payload = { username, email, _id };

  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
}

function authMiddleware({ req }) {
  // deconstruct the req and take data from either req body, query, or headers
  let token = req.body.token || req.query.token || req.headers.authorization;

  // if sent by header bearer needs to be trimmed off
  if (req.headers.authorization) {
    token = token.split(" ").pop().trim();
  }

  // if no token
  if (!token) {
    return req;
  }

  try {
    // deconstruct data from token (username, email, _id) and pass into req.user
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log("invalid token");
  }

  return req;
}

module.exports = { signToken, authMiddleware };
