import Purchase from '../../models/Purchase/PurchaseModal.js';

export async function handlePurchasePost(req, res) {
  const {
    vendorName,
    purchaseOrderNumber,
    purchaseDate,
    remarks,
    itemsData,
    subTotal,
    purchasedGst,
    total,
  } = req.body;

  const data = {
    vendorName,
    purchaseOrderNumber,
    purchaseDate,
    remarks,
    itemsData,
    subTotal,
    purchasedGst,
    total,
  };

  try {
    const purchaseData = await Purchase.create(data);
    if (purchaseData) {
      res.status(200).send({
        message: 'PurchaseData created successfully',
        data: purchaseData,
      });
    } else {
      res.status(400).send({ message: 'PurchaseData creation failed' });
    }
  } catch (e) {
    console.log(e);
  }
}

export async function handlePurchaseGet(req, res) {
  try {
    const purchaseData = await Purchase.find({});
    res.send({ data: purchaseData });
  } catch (e) {
    console.log(e);
  }
}

export async function handlePurchaseUpdate(req, res) {
  try {
    const updatedPurchaseData = await Purchase.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if (!updatedPurchaseData) {
      return res.status(404).send({ message: 'PurchaseData not found' });
    }

    return res
      .status(200)
      .send({ message: 'Successfully updated', data: updatedPurchaseData });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}

export async function handlePurchaseDelete(req, res) {
  try {
    const deletedPurchaseData = await Purchase.findByIdAndDelete(req.params.id);

    if (!deletedPurchaseData) {
      return res.status(404).send({ message: 'PurchaseData not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
