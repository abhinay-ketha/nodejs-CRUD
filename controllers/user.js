import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
const saltRounds = 10;


export const create = (req, res) => {

    try{
        const {username, firstname, lastname, email, password} = req.body;
    
        //validating input fields
        if(!(username && firstname && lastname && email && password)) return res.status(400).send('Please fill all input fields.')
    
        //encrypting password
        const hash = bcrypt.hashSync(password, saltRounds);
        const user = new User({username, firstname, lastname, email, password: hash});
    
        user.save(err => {
            if (err) return res.status(500).send('Please try after some time.')
            res.status(200).send({message: 'A verification mail has been sent to your registered mail.'})
        })
    }
    catch(e){
        console.error(e)
    }
};

export const fetchDetails = (req, res) => {
    
    try{
        const { username, password } = req.body;
        if(!(username && password)) return res.status(400).send('Please enter username and password.')
        User.findOne({username}, (err, user) => {
            if (err) return res.status(500).send('Please try after some time.')
            else if( user && bcrypt.compareSync(password, user.password)){
                //generating JWT 
                const token = jwt.sign({ id: user._id,firstname:user.firstname,email:user.email },process.env.TOKEN_KEY,{expiresIn: "2h",});
                const data = {token,user:{id:user._id,username:user.username,email:user.email,firstname:user.firstname,lastname:user.lastname}}
                return res.status(200).send(data);
            }
            return res.status(400).send('Please enter valid credentials.')
        })
    }
    catch(e){
        console.error(e)
    }
};
