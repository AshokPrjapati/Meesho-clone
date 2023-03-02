const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (decoded) {
                next();
            }
            else res.status(401).send({ error: e.message })
        })
    }
    res.status(400).send({ message: "Something went wrong" });
}

module.exports = authentication;