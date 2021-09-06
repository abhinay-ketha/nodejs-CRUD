import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, required: true, max: 100, unique: true},
    firstname: {type: String, required: true, max: 100},
    lastname: {type: String,required: true, max: 100},
    email: {type: String, required: true, max: 100, unique: true},
    password: {type: String, required: true, max: 100}
});


// Export the model
export default mongoose.model('User', UserSchema);