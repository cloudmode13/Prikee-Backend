import PaymentOut from '../../models/Purchase/Payment_Out.js';

export async function handlePaymentOutPost(req, res) {
  const {
    vendorName,
    POVendorName,
    purchasedVendorName,
    voucherNumber,
    voucherDate,
    PONumber,
    PODate,
    purchasedNumber,
    purchasedDate,
    amount,
    POAmount,
    purchasedAmount,
    description,
    PODescription,
    purchasedDescription,
  } = req.body;

  const data = {
    vendorName,
    POVendorName,
    purchasedVendorName,
    voucherNumber,
    voucherDate,
    description,
    PODescription,
    purchasedDescription,
    amount,
    POAmount,
    purchasedAmount,
    PONumber,
    PODate,
    purchasedNumber,
    purchasedDate,
  };

  try {
    const paymentData = await PaymentOut.create(data);
    if (paymentData) {
      res.status(200).send({
        message: 'PaymentData created successfully',
        data: paymentData,
      });
    } else {
      res.status(400).send({ message: 'PaymentData creation failed' });
    }
  } catch (e) {
    console.log(e);
  }
}

export async function handlePaymentOutGet(req, res) {
  try {
    const paymentData = await PaymentOut.find({});
    res.send({ data: paymentData });
  } catch (e) {
    console.log(e);
  }
}

export async function handlePaymentOutUpdate(req, res) {
  try {
    const updatedPaymentOut = await PaymentOut.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if (!updatedPaymentOut) {
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

export async function handlePaymentOutDelete(req, res) {
  try {
    const deletedPaymentOut = await PaymentOut.findByIdAndDelete(req.params.id);

    if (!deletedPaymentOut) {
      return res.status(404).send({ message: 'PaymentOut not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
