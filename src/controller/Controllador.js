import {
    carros
} from "../model/carros.js"

export const getIndex = async (req, res) => {
    try {
        const listCarros = await carros.findAll()
        res.render('index.ejs', {
            listCarros
        })
    } catch (error) {
        res.send(error.message)
    }
}

export const getDetalhes = async (req, res) => {
    try {
        const carroDetalhes = await carros.findByPk(req.params.id)
        res.render('detalhes.ejs', {
            carroDetalhes
        })
    } catch (error) {
        res.send(error.message)
    }
}

export const getDeletar = async (req, res) => {
    try {
        await carros.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/')
    } catch (error) {
        res.send(error.message)
    }
}

export const getCriar = (req, res) => {
    res.render('criar.ejs')
}

export const postCriar = async (req, res) => {
    const {
        modelo,
        marca,
        ano,
        img,
        valor,
        descricao
    } = req.body
    try {
        if (!modelo || !marca || !ano || !img || !valor || !descricao) {
            res.send('Todos os campos são obrigatórios!')
        } else {
            await carros.create({
                modelo,
                marca,
                ano,
                img,
                valor,
                descricao
            })
            res.render('criar.ejs')
        }
    } catch (error) {
        res.send(error.message)
    }
}

export const getEditar = async (req, res) => {
    try {
        const carroAtual = await carros.findByPk(req.params.id)
        res.render('editar.ejs', {
            carroAtual
        })
    } catch (error) {
        res.send(error.message)
    }
}

export const postEditar = async (req, res) => {
    try {
        const {
            modelo,
            marca,
            ano,
            img,
            valor,
            descricao
        } = req.body
        await carros.update({
            modelo: modelo,
            marca: marca,
            ano: ano,
            img: img,
            valor: valor,
            descricao: descricao
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect('/')
    } catch (error) {
        res.send(error.message)
    }
}