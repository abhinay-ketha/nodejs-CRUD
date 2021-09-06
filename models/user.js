import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, required: true, max: 25, unique: true},
    firstname: {type: String, required: true, max: 25},
    lastname: {type: String,required: true, max: 25},
    email: {type: String, required: true, max: 25, unique: true},
    password: {type: String, required: true, max: 25}
});


// Export the model
export default mongoose.model('User', UserSchema);