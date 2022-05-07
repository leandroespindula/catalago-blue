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

export const getCadastrar = (req, res) => {
    res.render('cadastrar.ejs');
};

export const postCadastrar = async (req, res) => {
    const { modelo, marca, ano, img, valor, descricao } = req.body
    try {
        // await connection.query(`INSERT INTO filmes (nome, diretor, img, duracao, ano, iframe) VALUES('${nome}', '${diretor}', '${img}', ${duracao}, '${ano}', '${iframe}')`) 
        if(!modelo || !marca || !ano || !img || !valor || !descricao){
            res.send('Todos os campos são obrigatórios!')
        } else {
            await carros.create({modelo, marca, ano, img, valor, descricao})
            res.render('cadastrar.ejs')
        }
    }
    catch(error){
        res.send(error.message)
    }
}

