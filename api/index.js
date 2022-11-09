//Express es un framework de NodeJS
import express from 'express'
import indexRoutes from './routes/tasks.routes.js'
import cors from "cors"

const app = express()

//Permite procesar los datos que vengan del cliente y si es un objeto json lo podrá recibir
app.use(express.json())

app.use(cors("*"))

//Iniciamos las rutas de taks
app.use(indexRoutes)

app.listen(3000)
console.log(`Server on port ${3000}`)

