import { connection } from "../database/connection.js"
import {carros} from '../model/carros.js'


export const getIndex = async (req, res) =>{
    const teste = await connection.query('SELECT * FROM carros', {
        model: carros
    })
    console.log(teste)
    res.render('index.ejs')
}