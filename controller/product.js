import Product from '../models/product';

export const listPro = async (req, res) => {
    try {
        const product = await Product.find({}).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({ message: "Ko hien thi dc" })
    }
}
export const listProDetail = async (req, res) => {
    try {
        const product = await Product.findOne({_id: req.params.id}).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({ message: "Ko hien thi dc" })
    }
}
export const creatPro = async (req, res) => {
    try {
        const product = await Product(req.body).save()
        res.json(product)
    } catch (error) {
        res.status(400).json({ message: "Ko them dc" })
    }
}
export const deletePro = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({_id: req.params.id}).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({ message: "Ko xoa dc" })
    }
}
export const updatePro = async (req, res) => {
    try {
        const product = await Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true}).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({ message: "Ko hien thi dc" })
    }
}