const usermodel = require('../Model/UserModel');

const create_std = async (req, res) => {
    try {
        const { stdId, stdName, stdNumber, stdEmail } = req.body;
        const newuser = new usermodel({ stdId, stdName, stdNumber, stdEmail });
        await newuser.save();
        res.json({ message: "User Created" })
    }
    catch (error) {
        console.log(error);
        res.json({ message: "error" })
    }
}

const get_std = async (req, res) => {
    try {
        const getuser = await usermodel.find();
        res.json(getuser)
    }
    catch (error) {
        console.log(error);
        res.json({ message: "error" })
    }
}

const get_params_std = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await usermodel.findOne(userId);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}


const update_std = async (req, res) => {
    try {

        const update_std = req.body.update_std;
        const updatestd = {
            stdId: req.body.stdId,
            stdName: req.body.stdName,
            stdNumber: req.body.stdNumber,
            stdEmail: req.body.stdEmail
        }
        await usermodel.findByIdAndUpdate(update_std, { $set: updatestd })
        res.json({ message: "User Update" });
    } catch (error) {
        console.log(error);
        res.json({ message: "error" });
    }
}

const update_stdd = async (req, res) => {
    const stdId = req.params.id;
    const { stdName, stdNumber, stdEmail } = req.body;

    try {
        const updatedUser = await usermodel.findByIdAndUpdate(stdId, { stdName, stdNumber, stdEmail }, { new: true });
        res.json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const delete_std_par = async (req, res) => {
    try {
        const userId = req.params.id;
        await usermodel.findByIdAndDelete(userId)
        res.json({ message: "User Deleted" })

    } catch (error) {
        console.log(error);
        res.json({ message: "Error" });
    }
}
const delete_std = async (req, res) => {
    try {
        const userId = req.body.userId;
        await usermodel.findByIdAndDelete(userId)
        res.json({ message: "User Deleted" })

    } catch (error) {
        console.log(error);
        res.json({ message: "Error" });
    }
}

const getone_std = async (req, res) => {
    try {
        const userId = req.body.userId;
        const oneuser = await usermodel.findById(userId)
        res.json(oneuser)

    } catch (error) {
        console.log(error);
        res.json({ message: "Error" });
    }
}

module.exports = { create_std, get_std, update_std, delete_std, getone_std ,update_stdd,get_params_std,delete_std_par};