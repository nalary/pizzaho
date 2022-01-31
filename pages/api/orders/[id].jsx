import dbConnect from "../../../util/mongo";
import Order from "../../../models/Order";

export default async function handler(req, res) {
    const { method, query: { id } } = req;

    await dbConnect();

    if (method === "GET") {
        try {
            const order = await Order.findById(id);
            res.status(200).json(order);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    if (method === "PUT") {
        try {
            const updatedOrder = await Order.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).json(updatedOrder);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    if (method === "DELETE") {
        try {
            await Product.findByIdAndDelete(id);
            res.status(200).json("The order has been deleted.");
        } catch (err) {
            res.status(500).json(err);
        }
    }
}