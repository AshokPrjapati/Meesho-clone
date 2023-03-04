require("dotenv").config();
const bcrypt = require("bcrypt");


const { UserModel } = require("../Models/user.model");

async function UserDetail(req, res) {
    const id = req.params.id;
    try {
        const user = await UserModel.findById(id)
        res.status(200).json({ msg: "user details fetched", credentials: user })
    } catch (error) {
        console.log('error: ', error);
        res.send(error)
    }
}


// ** User Registeration
async function UserRegisteration(req, res) {
    const { password, ...payload } = req.body;
    try {
        const CheckUser = await UserModel.findOne({ email: payload.email })

        if (CheckUser) return res.status(401).json({ message: "User already exist" })

        const hash = await bcrypt.hash(password, 5);

        const user = new UserModel({ ...payload, password: hash });

        await user.save();

        res.status(201).json({ status: 200, message: "registeration success", credentials: user })
    } catch (error) {
        // console.log('error: ', error);
        res.send(error)
    }
}


// * login user
async function UserLogin(req, res) {
    const { password, email } = req.body;
    try {
        const user = await UserModel.findOne({ email })
        if (user) {
            const isMatched = await bcrypt.compare(password, user.password);
            if (isMatched) {
                const token = await user.getAuthorizationToken();
                res.status(201).json({ status: 200, message: "Login Success", credentials: user, token })
            } else {
                res.status(201).json({ status: 401, message: "password not matched" })
            }
        } else {
            res.status(201).json({ status: 400, message: "user not found." })
        }
    } catch (error) {
        console.log('error: ', error);
        res.send(error)
    }
}

// * logging out the user
async function UserLogout(req, res) {
    const { email } = req.body;
    try {
        const user = await UserModel.findOne({ email })
        if (user) {
            user.lastLogin = Date.now();
            await user.save()
            res.status(201).json({ status: 200, message: "Logout Success" })
        } else {
            res.status(201).json({ status: 400, message: "user not found." })
        }
    } catch (error) {
        console.log('error: ', error);
        res.send(error)
    }
}

// * update the user details
async function UpdateUser(req, res) {
    const id = req.params.id;
    console.log(id)
    try {
        const updatedUser = await UserModel.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        return res.status(201).json({ status: 200, message: 'user has been updated', credentials: updatedUser });
    } catch (error) {
        console.log('error: ', error);
        return res.status(201).json({ status: 401, error: error.message })
    }
}

// * delete the user details
async function DeleteUser(req, res) {
    const _id = req.params.id;
    try {
        await UserModel.findByIdAndDelete({ _id });
        return res.status(201).json({ status: 200, message: 'user has been deleted' })
    } catch (error) {
        console.log('error: ', error);
        return res.status(201).json({ status: 401, error: error.message })
    }
}


module.exports = {
    UserDetail,
    UserLogin,
    UserLogout,
    UserRegisteration,
    UpdateUser,
    DeleteUser
}