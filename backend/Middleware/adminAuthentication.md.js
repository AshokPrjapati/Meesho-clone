const { UserModel } = require("../Models/user.model");
const jwt = require("jsonwebtoken");

const adminAuthentication = (req, res, next) => {
    if (req.method === 'GET') return next();
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
            if (decoded) {
                // checking user role is admin or not
                // only admin can update add or delete products form db
                let user = decoded.user;
                let u = await UserModel.findOne({ _id: user });
                // call next() only for non-GET requests
                u.role === 'ADMIN' ? next() : res.status(401).send({ message: "You are not authorize to do this operation" });
            }
            else res.status(401).send({ error: e.message })
        })
    }
    else res.status(400).send({ message: "Something went wrong" });
}

module.exports = adminAuthentication;