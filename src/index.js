import dotenv from "dotenv"
import connectDB from './db/index.js'

dotenv.config({
    path : './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is being listened on ${process.env.PORT}`)
    })

})
.catch((e)=>{
    console.log(`error is ${e}`)
})
