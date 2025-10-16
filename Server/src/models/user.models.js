import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        minlength: 6
    }
},{timestamps: true}); 

const userModel = mongoose.model("user", userSchema);

export default userModel;