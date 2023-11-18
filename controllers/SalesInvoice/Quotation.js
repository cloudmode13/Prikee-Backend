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
    inventoryItem,
    subTotal,
    total,
    gst,
  } = req.body;
  console.log(19, req.body);

  const data = {
    clientName,
    quotationNumber,
    orderNumber,
    quotationDate,
    dueDate,
    salesRep,
    remarks,
    subject,
    inventoryItem,
    subTotal,
    total,
    gst,
  };

  console.log(32, data);

  try {
    const quotation = await Quotation.create(data);
    console.log(104, quotation);
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
  try {
    const quotation = await Quotation.find({});
    res.send({ data: quotation });
    console.log(1, quotation);
  } catch (e) {
    console.log(e);
  }
}

export async function handleQuotationUpdate(req, res) {
  try {
    const updatedQuotation = await Quotation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
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
  try {
    const deletedQuotation = await Quotation.findByIdAndDelete(req.params.id);

    if (!deletedQuotation) {
      return res.status(404).send({ message: 'Party not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}