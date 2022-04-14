import mongoose from 'mongoose';
const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 32
    },
    img: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
    }
}, { timestamp: true })
export default mongoose.model('Product', productSchema)