import * as dotenv from 'dotenv'
import app from "./server"
export * from './server'

dotenv.config()

const PORT = process.env.PORT || 3000

app.listen(PORT, async ()=> {
    console.log(`Listening on port ${PORT}`)
});