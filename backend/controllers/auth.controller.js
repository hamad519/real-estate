
import {User} from "../models/user.model.js"
import bcrypt from 'bcrypt';

export default class AuthController{
    
    async signUp(req, res, next) {
        const user = req.body
        try {
            user.password = await bcrypt.hash(user.password, 10);
            await User.create(user)
           res.json({
            message:"user account has been created"
           })
        } catch (error) {
            next(error);
        }
    }

    async login(req, res, next) {
        const body = req.body;

        if(!body.email) return next(new Error('Provide the email'))
        if(!body.password) return next(new Error('Provide the password')) 

        const user = await User.findOne({email:body.email})
        if(user === null) return next(new Error('this user is not registered'))

        const isPasswordMatched = await bcrypt.compare(body.password, user.password)
        if(!isPasswordMatched) return next(new Error('Invalid password'))

        try {
            res.json({
                message:"login was called"
               })
        } catch (error) {
            console.log(error);
        }
    }
    
}


