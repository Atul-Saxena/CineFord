import mongoose from "mongoose";

async function connect(){
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const connection = mongoose.connection;
        connection.on('error', (err)=>{
            console.log("connection error" + err);
            process.exit();
        });
        connection.once('open', ()=>{
            console.log("connected to mongodb");
        });
    } catch (error) {
        console.log("something went wrong while connecting",error)
    }
    
}

export default connect;