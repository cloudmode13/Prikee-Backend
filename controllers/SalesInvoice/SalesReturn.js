import SalesReturn from '../../models/SalesInvoice/SalesReturn.js';
import SalesInvoice from '../../models/SalesInvoice/SalesInvoice.js';
import Product from '../../models/Item/Product.js';

export async function handleSRPost(req, res) {
  const { returnDate, reason, returnData } = req.body;
  const userId = req.user.id;

  const data = {
    returnDate,
    reason,
    returnData,
    userId: userId,
  };

  try {
    for (const item of returnData.inventoryItem) {
      const product = await Product.findOne({ itemName: item.itemName });

      if (product) {
        const quantity = item.quantity || 0;
        product.openingStock =
          parseFloat(product.openingStock) + parseFloat(quantity);
        await product.save();
      }
    }

    const salesReturn = await SalesReturn.create(data);
    if (salesReturn) {
      const removedItem = await SalesInvoice.findOneAndDelete({
        _id: returnData._id,
        userId: userId,
      });
      if (removedItem) {
        res
          .status(201)
          .send({ message: 'SR created successfully', data: salesReturn });
      } else {
        res.status(400).send({ message: 'Item not found in salesData' });
      }
    } else {
      res.status(400).send({ message: 'SR creation failed' });
    }
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

export async function handleSRGet(req, res) {
  const userId = req.user.id;

  try {
    const salesReturn = await SalesReturn.find({ userId: userId });
    res.send({ data: salesReturn });
  } catch (e) {
    console.log(e);
  }
}

export async function handleSRDelete(req, res) {
  const userId = req.user.id;

  try {
    const deletedSalesReturn = await SalesReturn.findByIdAndDelete({
      _id: req.params.id,
      userId: userId,
    });

    if (!deletedSalesReturn) {
      return res.status(404).send({ message: 'SR not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
