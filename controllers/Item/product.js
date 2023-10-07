import Product from '../../models/Item/Product.js';

export async function handleProductPost(req, res) {
  console.log(req.body);
  if (!req.body) {
    res.status(400).send({ message: 'Invalid request body' });
    return;
  }
  const {
    itemName,
    category,
    itemCode,
    itemDescription,
    hsn,
    unit,
    openingStock,
    date,
    salesPrice,
    purchasePrice,
    hsnCode,
    salesTax,
    purchaseTax,
    salesGst,
    purchaseGst,
    imageData,
  } = req.body;
  console.log(req.body);

  const data = {
    itemName,
    category,
    itemCode,
    itemDescription,
    hsn,
    unit,
    openingStock,
    date,
    salesPrice,
    purchasePrice,
    hsnCode,
    salesTax,
    purchaseTax,
    salesGst,
    purchaseGst,
    imageData,
  };

  try {
    const productItem = await Product.create(data);
    console.log(104, productItem);
    if (productItem) {
      res
        .status(201)
        .send({ message: 'Party created successfully', data: productItem });
    } else {
      res.status(400).send({ message: 'Party creation failed' });
    }
  } catch (e) {
    console.log(e);
  }
}

export async function handleProductGet(req, res) {
  try {
    const productItem = await Product.find({});
    res.send({ data: productItem });
    console.log(1, productItem);
  } catch (e) {
    console.log(e);
  }
}

export async function handleProductUpdate(req, res) {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    console.log('hello' + updatedProduct);
    if (!updatedProduct) {
      return res.status(404).send({ message: 'Party not found' });
    }

    return res
      .status(200)
      .send({ message: 'Successfully updated', data: updatedProduct });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}

export async function handleProductDelete(req, res) {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).send({ message: 'Party not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
