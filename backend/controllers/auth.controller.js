
import {User} from "../models/user.model.js"
import bcrypt from 'bcrypt';

export default class AuthController{
    
    async signUp(req, res, next) {
        const user = req.body
        try {
            user.password = await bcrypt.hash(user.password, 10);
            const user = await User.create(user)
           res.json({
            message:"user account has been created"
           })
        } catch (error) {
            next(error);
        }
    }

    async login(req, res, next) {
        const user = req.body
        try {
            res.json({
                message:"login was called"
               })
        } catch (error) {
            console.log(error);
        }
    }
    
}


