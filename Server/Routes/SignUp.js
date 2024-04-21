import express from 'express';
import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import bodyParser from 'body-parser';
import connectDB from '../db';

const SignupRouter = Router();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

SignupRouter.post(
    "/signup",
    body("name")
    .isLength({min:5})
    .withMessage("Name must be atleast 5 characters"),

    body("email")
    .isEmail()
    .withMessage("Invalid Email"),

    body("password")
    .isLength({min:6})
    .withMessage("passwordmust be atleast 6 characters"),

    async (req, res) =>{
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({errors: errors.array()});

                try {
                    
                } catch (error) {
                    
                }
            }
        } catch (error) {
            console.error("Error in request", error.stack);
            res.status(500).send("Internal Server Error");
        }
    }
)


export default SignupRouter