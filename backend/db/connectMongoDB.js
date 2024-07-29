import mongoose, { connect } from 'mongoose'

const connectToDB = async () =>{
    try {
        await mongoose,connect(process.env.MONGODB_URL);
        console.log('connected to MongoDB');
    } catch (error) {
        console.log("Error connecting to DB" , error.message);
    }
}

export default connectToDB