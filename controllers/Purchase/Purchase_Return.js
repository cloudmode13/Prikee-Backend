import PurchaseReturn from '../../models/Purchase/Purchase_Return.js';
// import SalesInvoice from '../../models/SalesInvoice/SalesInvoice.js';
// import Product from '../../models/Item/Product.js';

export async function handlePRPost(req, res) {
  const { returnDate, reason, returnData } = req.body;
  console.log(19, req.body);

  const data = {
    returnDate,
    reason,
    returnData,
  };

  console.log(32, data);

  try {
    // for (const item of returnData.inventoryItem) {
    //   const product = await Product.findOne({ itemName: item.itemName });

    //   if (product) {
    //     const quantity = item.quantity || 0;
    //     product.openingStock =
    //       parseFloat(product.openingStock) + parseFloat(quantity);
    //     await product.save();
    //   }
    // }

    const purchaseReturn = await PurchaseReturn.create(data);
    if (purchaseReturn) {
      //   const removedItem = await SalesInvoice.findOneAndDelete({
      //     _id: returnData._id,
      //   });
      //   if (removedItem) {
      //     res
      //       .status(201)
      //       .send({ message: 'SR created successfully', data: salesReturn });
      //   } else {
      //     res.status(400).send({ message: 'Item not found in salesData' });
      //   }
      res
        .status(201)
        .send({ message: 'SR created successfully', data: purchaseReturn });
    } else {
      res.status(400).send({ message: 'SR creation failed' });
    }
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

export async function handlePRGet(req, res) {
  try {
    const purchaseReturn = await PurchaseReturn.find({});
    res.send({ data: purchaseReturn });
  } catch (e) {
    console.log(e);
  }
}

export async function handlePRDelete(req, res) {
  try {
    const deletedPurchaseReturn = await PurchaseReturn.findByIdAndDelete(
      req.params.id,
    );

    if (!deletedPurchaseReturn) {
      return res.status(404).send({ message: 'SR not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
