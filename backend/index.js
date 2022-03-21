import express from 'express'
import mongoose from 'mongoose'
import router from "./router.js"
import cors from 'cors'


const PORT = 5003;
const DB_URL = 'mongodb+srv://Derkach:QAzwsxed1@cluster0.mihkl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const app = express()

app.use(cors());
app.use(express.json())
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp();