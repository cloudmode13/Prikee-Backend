import SalesInvoice from '../../models/SalesInvoice/SalesInvoice.js';

export async function handleSalesInvoicePost(req, res) {
  if (!req.body) {
    res.status(400).send({ message: 'Invalid request body' });
    return;
  }
  const {
    clientName,
    invoiceNumber,
    orderNumber,
    invoiceDate,
    dueDate,
    salesRep,
    PONumber,
    PODate,
    remarks,
    subject,
    inventoryItem,
    subTotal,
    total,
    paidMode,
  } = req.body;
  console.log(19, req.body);

  const data = {
    clientName,
    invoiceNumber,
    orderNumber,
    invoiceDate,
    dueDate,
    salesRep,
    PONumber,
    PODate,
    remarks,
    subject,
    inventoryItem,
    total,
    subTotal,
    paidMode,
  };

  console.log(32, data);

  try {
    const salesInvoice = await SalesInvoice.create(data);
    console.log(104, salesInvoice);
    if (salesInvoice) {
      res
        .status(201)
        .send({ message: 'Party created successfully', data: salesInvoice });
    } else {
      res.status(400).send({ message: 'Party creation failed' });
    }
  } catch (e) {
    console.log(e);
  }
}

export async function handleSalesInvoiceGet(req, res) {
  try {
    const salesInvoice = await SalesInvoice.find({});
    res.send({ data: salesInvoice });
    console.log(1, salesInvoice);
  } catch (e) {
    console.log(e);
  }
}

export async function handleSalesInvoiceUpdate(req, res) {
  try {
    const updatedSalesInvoice = await SalesInvoice.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if (!updatedSalesInvoice) {
      return res.status(404).send({ message: 'Party not found' });
    }

    return res
      .status(200)
      .send({ message: 'Successfully updated', data: updatedSalesInvoice });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}

export async function handleSalesInvoiceDelete(req, res) {
  try {
    const deletedSalesInvoice = await SalesInvoice.findByIdAndDelete(
      req.params.id,
    );

    if (!deletedSalesInvoice) {
      return res.status(404).send({ message: 'Party not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
