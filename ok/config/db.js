import mongoose from "mongoose"

export async function connect () {


    try{

        let conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`server connected ${conn.connection.host}`);


    }

    catch(err){

        console.log(err);
        console.log(err.message);
        

    }
}