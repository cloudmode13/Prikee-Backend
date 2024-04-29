import Quotation from '../../models/SalesInvoice/Quotation.js';

export async function handleQuotationPost(req, res) {
  const {
    clientName,
    quotationNumber,
    orderNumber,
    quotationDate,
    dueDate,
    salesRep,
    remarks,
    subject,
    terms,
    inventoryItem,
    subTotal,
    total,
    gst,
    cgst,
    cgstValue,
  } = req.body;

  const userId = req.user.id;

  const data = {
    clientName,
    quotationNumber,
    orderNumber,
    quotationDate,
    dueDate,
    salesRep,
    remarks,
    subject,
    terms,
    inventoryItem,
    subTotal,
    total,
    gst,
    cgst,
    cgstValue,
    userId: userId,
  };

  try {
    const quotation = await Quotation.create(data);
    if (quotation) {
      res
        .status(201)
        .send({ message: 'Party created successfully', data: quotation });
    } else {
      res.status(400).send({ message: 'Party creation failed' });
    }
  } catch (e) {
    console.log(e);
  }
}

export async function handleQuotationGet(req, res) {
  const userId = req.user.id;

  try {
    const quotation = await Quotation.find({ userId: userId });
    const latestQuoNumber = await Quotation.findOne().sort({ _id: -1 });
    console.log(58, latestQuoNumber.quotationNumber);
    res.send({
      data: quotation,
      latestQuoNumber: latestQuoNumber.quotationNumber,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function handleQuotationUpdate(req, res) {
  const userId = req.user.id;

  try {
    const updatedQuotation = await Quotation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      { userId: userId },
    );
    if (!updatedQuotation) {
      return res.status(404).send({ message: 'Party not found' });
    }

    return res
      .status(200)
      .send({ message: 'Successfully updated', data: updatedQuotation });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}

export async function handleQuotationDelete(req, res) {
  const userId = req.user.id;

  try {
    const deletedQuotation = await Quotation.findByIdAndDelete({
      _id: req.params.id,
      userId: userId,
    });

    if (!deletedQuotation) {
      return res.status(404).send({ message: 'Party not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
