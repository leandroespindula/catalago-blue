import Sequelize from 'sequelize'
import {connection} from '../database/connection.js'

export const carros = connection.define('carros', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    modelo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    marca: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ano: {
        type: Sequelize.STRING,
        allowNull: false
    },
    img: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    }



}, {
    freezeTableName: true,
    createdAt: false, 
    updatedAt: false,
    timestamps: false
})