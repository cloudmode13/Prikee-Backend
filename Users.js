import mongoose from "mongoose"
import jwt from 'jsonwebtoken'

const userShema = new mongoose.Schema({
    number:{
        type: String
    }
}, {timestamps: true})

userShema.methods.generateJWT = function () {
    const token = jwt.sign ({
        _id : this._id,
        number: this.number
    }, process.env.JWT_SECRET_KEY, {expiresIn: '1d'})
}

export default mongoose.model("User", userShema);