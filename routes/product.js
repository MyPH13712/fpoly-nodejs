import express from "express";
import { creatPro, deletePro, listPro, listProDetail, updatePro } from "../controller/product";

const router = express.Router();

router.get('/products', listPro),
router.get('/products/:id', listProDetail)
router.post('/products', creatPro),
router.put('/products/:id', updatePro)
router.delete('/products/:id', deletePro)

