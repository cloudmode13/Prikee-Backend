import PO from '../../models/Purchase/Purchase_Order_Modal.js';

export async function handlePOPost(req, res) {
  const { vendorName, purchaseOrderNumber, poDate, remarks, items } = req.body;

  const data = {
    vendorName,
    purchaseOrderNumber,
    poDate,
    remarks,
    items,
  };

  try {
    const purchaseOrder = await PO.create(data);
    if (purchaseOrder) {
      res.status(200).send({
        message: 'PO created successfully',
        data: purchaseOrder,
      });
    } else {
      res.status(400).send({ message: 'PO creation failed' });
    }
  } catch (e) {
    console.log(e);
  }
}

export async function handlePOGet(req, res) {
  try {
    const purchaseOrder = await PO.find({});
    const latestPONumber = await PO.findOne().sort({ _id: -1 });

    res.send({
      data: purchaseOrder,
      latestPONumber: latestPONumber.purchaseOrderNumber,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function handlePOUpdate(req, res) {
  try {
    const updatedPurchaseOrder = await PO.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if (!updatedPurchaseOrder) {
      return res.status(404).send({ message: 'PO not found' });
    }

    return res
      .status(200)
      .send({ message: 'Successfully updated', data: updatedPurchaseOrder });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}

export async function handlePODelete(req, res) {
  try {
    const deletedPurchaseOrder = await Purchase.findByIdAndDelete(
      req.params.id,
    );

    if (!deletedPurchaseOrder) {
      return res.status(404).send({ message: 'PO not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
