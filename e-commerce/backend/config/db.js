import mongoose from "mongoose"




export const connect = async () => {


    try {

        let conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(conn);

        console.log(`server connected ${conn.connection.host}`);


    }


    catch (err) {

        console.log("mongoDB connection failed");
        console.log(err);

    }

}