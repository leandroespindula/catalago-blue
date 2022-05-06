import {
    connection
} from "../database/connection.js"
import {
    carros
} from "../model/carros.js"

export const getIndex = async (req, res) => {
    try {
        const listCarros = await carros.findAll()
        res.render('index.ejs', {
            listCarros
        })
    } catch(error) {
        res.send(error.message)
    }
}

export const getDetalhes = async (req, res) => {
    try {
        const listCarros = await carros.findByPk(req.params.id);
        res.render("detalhes.ejs", {
            listCarros
        });
    } catch (error) {
        res.send(error.message);
    }
  };
  

// export const getDetalhes = async (req, res) => {
//     try {
//         // const filmesDetalhes = await connection.query(`SELECT * FROM filmes WHERE id = ${req.params.id}`)
//         const carrosDetalhes = await carros.findByPk(req.params.id)
//         res.render('detalhes.ejs', {
//             carrosDetalhes
//         })
//     }
//     catch(error){
//         res.send(error.message)
//     }
// }

// export const getCadastrar = async (req, res) => {
//     try {
//         // const filmesDetalhes = await connection.query(`SELECT * FROM filmes WHERE id = ${req.params.id}`)
//         const carrosCadastrar = await carros.findByPk(req.params.id)
//         res.render('cadastrar.ejs', {
//             carrosCadastrar
//         })
//     }
//     catch(error){
//         res.send(error.message)
//     }
// }