import express from "express";
import { getIndex } from '../controler/Controler.js';
import { getDetalhes } from '../controler/Controler.js';
import { getCadastrar } from '../controler/Controler.js';
import { postCadastrar } from '../controler/Controler.js';


export const routers = express.Router();

routers.get('/', getIndex);
routers.get('/detalhes/:id', getDetalhes);

routers.get('/cadastrar', getCadastrar);
routers.post('/cadastrar', postCadastrar);