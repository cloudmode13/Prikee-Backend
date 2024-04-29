import PurchaseReturn from '../../models/Purchase/Purchase_Return.js';
import Purchase from '../../models/Purchase/PurchaseModal.js';

export async function handlePRPost(req, res) {
  const { returnDate, reason, returnData } = req.body;
  const userId = req.user.id;
  const data = {
    returnDate,
    reason,
    returnData,
    userId: userId,
  };

  try {
    const purchaseReturn = await PurchaseReturn.create(data);
    if (purchaseReturn) {
      const removedItem = await Purchase.findOneAndDelete({
        _id: returnData._id,
        userId: userId,
      });
      if (removedItem) {
        res
          .status(201)
          .send({ message: 'SR created successfully', data: purchaseReturn });
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

export async function handlePRGet(req, res) {
  const userId = req.user.id;
  try {
    const purchaseReturn = await PurchaseReturn.find({ userId: userId });
    res.send({ data: purchaseReturn });
  } catch (e) {
    console.log(e);
  }
}

export async function handlePRDelete(req, res) {
  const userId = req.user.id;
  try {
    const deletedPurchaseReturn = await PurchaseReturn.findByIdAndDelete({
      _id: req.params.id,
      userId: userId,
    });

    if (!deletedPurchaseReturn) {
      return res.status(404).send({ message: 'SR not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
