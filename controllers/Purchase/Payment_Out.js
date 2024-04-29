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

  const userId = req.user.id;

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
    userId: userId,
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
  const userId = req.user.id;
  try {
    const paymentData = await PaymentOut.find({ userId: userId });
    res.send({ data: paymentData });
  } catch (e) {
    console.log(e);
  }
}

export async function handlePaymentOutUpdate(req, res) {
  const userId = req.user.id;
  try {
    const updatedPaymentOut = await PaymentOut.findByIdAndUpdate(
      req.params.id,
      req.body,
      { userId: userId },
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
  const userId = req.user.id;
  try {
    const deletedPaymentOut = await PaymentOut.findByIdAndDelete({
      _id: req.params.id,
      userId: userId,
    });

    if (!deletedPaymentOut) {
      return res.status(404).send({ message: 'PaymentOut not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
