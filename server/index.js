
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import postRoute from './routes/postRoute.js';
import dalleRoute from './routes/dalleRoute.js';
import connectDB from './mongodb/connect.js';

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoute);
app.use('/api/v1/dalle', dalleRoute);

app.get('/',async(req,res)=> {
   res.send("Hello fom DALL-E");
})

const startServer = async()=> {
    try {
        connectDB(process.env.MONGOD_URL);
        app.listen(8080,()=> {
            console.log("server is running");});
    }
    catch (error){
        throw new Error("problem with server starting")
    }
}

startServer();
    