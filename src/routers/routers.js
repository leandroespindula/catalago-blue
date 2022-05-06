import express from "express";
import { 
    getIndex, getDetalhes
 } from "../controller/controllador.js";

export const routers = express.Router()

routers.get('/', getIndex)
routers.get('/detalhes/:id', getDetalhes)