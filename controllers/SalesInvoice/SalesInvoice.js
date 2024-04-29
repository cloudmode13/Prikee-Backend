import SalesInvoice from '../../models/SalesInvoice/SalesInvoice.js';
import Product from '../../models/Item/Product.js';

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
    terms,
    inventoryItem,
    subTotal,
    total,
    gst,
    cgst,
    cgstValue,
    paidMode,
  } = req.body;

  const userId = req.user.id;

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
    terms,
    inventoryItem,
    total,
    gst,
    cgst,
    cgstValue,
    subTotal,
    paidMode,
    userId: userId,
  };

  try {
    for (const item of inventoryItem) {
      const product = await Product.findOne({ itemCode: item.itemCode });

      if (product) {
        const quantity = item.quantity || 0;
        product.openingStock -= quantity;

        await product.save();
      }
    }
    const salesInvoice = await SalesInvoice.create(data);
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
  const userId = req.user.id;

  try {
    const salesInvoice = await SalesInvoice.find({ userId: userId });

    const latestInvoiceNumber = await SalesInvoice.findOne().sort({ _id: -1 });

    res.send({
      data: salesInvoice,
      latestInvoiceNumber: latestInvoiceNumber.invoiceNumber,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function handleSalesInvoiceUpdate(req, res) {
  const userId = req.user.id;

  try {
    const updatedSalesInvoice = await SalesInvoice.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      { userId: userId },
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
  const userId = req.user.id;

  try {
    const deletedSalesInvoice = await SalesInvoice.findByIdAndDelete({
      _id: req.params.id,
      userId: userId,
    });

    if (!deletedSalesInvoice) {
      return res.status(404).send({ message: 'Party not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
