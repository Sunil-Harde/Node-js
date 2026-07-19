import mongoose from "mongoose"

 async function connect () {

    try {

        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`server connected ${conn.connection.host}`);

    }

    catch (err) {

        console.error("mongoDB connection failed");
        console.error(err);

    }


}


// module.exports = connect

export default connect


