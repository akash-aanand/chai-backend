import dotenv from "dotenv"
import connectDB  from "../db/index.js"

dotenv.config({
    path:'./env'
})
connectDB()
.then(
    app.listen(process.env.PORT || 5000, ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    }),

    app.on("error",(error)=>{
        console.log("error",error);
        throw error
    })
)
.catch((err)=>{
    conlos.log("mongooDB connection failed",err);
})




/*
const app = express()
(async()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("ERRR",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }
    catch{
        console.error("ERROR",error)
        throw err
    }
})()*/