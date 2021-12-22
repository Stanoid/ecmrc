
import products from "../../../products.json"
export default function handler(req, res) {
  const {id} = req.query;

  const product = products.data.find(product=> product.id === Number(id))
    res.status(200).json(product)
  }
  