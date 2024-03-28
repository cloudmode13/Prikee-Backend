import InventoryItem from '../../models/SalesInvoice/InventoryItem.js';

export async function handleInventoryItemPost(req, res) {
  const { itemName, itemCode, salesPrice, salesGst } = req.body;

  const data = {
    itemName,
    itemCode,
    salesPrice,
    salesGst,
  };

  try {
    const inventoryItem = await InventoryItem.create(data);
    if (inventoryItem) {
      res
        .status(201)
        .send({ message: 'Service created successfully', data: inventoryItem });
    } else {
      res.status(400).send({ message: 'Service creation failed' });
    }
  } catch (e) {
    console.log(e);
  }
}

export async function handleInventoryItemGet(req, res) {
  try {
    const inventoryItem = await InventoryItem.find({});
    res.send({ data: inventoryItem });
  } catch (e) {
    console.log(e);
  }
}

export async function handleInventoryItemUpdate(req, res) {
  try {
    const updatedInventoryItem = await InventoryItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if (!updatedInventoryItem) {
      return res.status(404).send({ message: 'ServiceItem not found' });
    }

    return res
      .status(200)
      .send({ message: 'Successfully updated', data: updatedInventoryItem });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}

export async function handleInventoryItemDelete(req, res) {
  try {
    const deletedInventoryItem = await InventoryItem.findByIdAndDelete(
      req.params.id,
    );

    if (!deletedInventoryItem) {
      return res.status(404).send({ message: 'ServiceItem not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
