import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
            require: true
        }
    },
    {
        timestamps : true
    }
)

const Connect = mongoose.model("contact",contactSchema);

export default Connect;