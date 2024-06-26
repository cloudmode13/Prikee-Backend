import Purchase from '../../models/Purchase/PurchaseModal.js';

export async function handlePurchasePost(req, res) {
  const {
    vendorName,
    purchaseInvoiceNumber,
    purchaseDate,
    remarks,
    itemsData,
    subTotal,
    purchasedGst,
    total,
    cgst,
    cgstValue,
  } = req.body;
  const userId = req.user.id;

  const data = {
    vendorName,
    purchaseInvoiceNumber,
    purchaseDate,
    remarks,
    itemsData,
    subTotal,
    purchasedGst,
    total,
    cgst,
    cgstValue,
    userId: userId,
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
  const userId = req.user.id;
  try {
    const purchaseData = await Purchase.find({ userId: userId });
    const latestPINumber = await Purchase.findOne().sort({ _id: -1 });

    res.send({
      data: purchaseData,
      latestPINumber: latestPINumber.purchaseInvoiceNumber,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function handlePurchaseUpdate(req, res) {
  const userId = req.user.id;
  try {
    const updatedPurchaseData = await Purchase.findByIdAndUpdate(
      req.params.id,
      req.body,
      { userId: userId },
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
  const userId = req.user.id;
  try {
    const deletedPurchaseData = await Purchase.findByIdAndDelete({
      _id: req.params.id,
      userId: userId,
    });

    if (!deletedPurchaseData) {
      return res.status(404).send({ message: 'PurchaseData not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
