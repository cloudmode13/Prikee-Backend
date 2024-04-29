import Product from '../../models/Item/Product.js';
import ProductImage from '../../models/Item/ProductImage.js';

export async function handleProductPost(req, res) {
  const {
    itemName,
    quantity,
    category,
    itemCode,
    itemDescription,
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
    basicSalesPrice,
    basicPurchasePrice,
  } = req.body;

  const imagePath = req.file ? req.file.filename : null;
  const userId = req.user.id;

  try {
    const data = {
      itemName,
      quantity,
      category,
      itemCode,
      itemDescription,
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
      imagePath,
      basicSalesPrice,
      basicPurchasePrice,
      userId: userId,
    };

    const productItem = await Product.create(data);
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
  const userId = req.user.id;
  try {
    const productItem = await Product.find({ userId: userId });
    res.send({ data: productItem });
  } catch (e) {
    console.log(e);
  }
}

export async function handleProductUpdate(req, res) {
  let updateData = { ...req.body };
  const userId = req.user.id;

  if (req.file) {
    updateData.imagePath = req.file.filename;
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { userId: userId },
      { new: true },
    );
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
  const userId = req.user.id;
  try {
    const deletedProduct = await Product.findByIdAndDelete({
      _id: req.params.id,
      userId: userId,
    });

    if (!deletedProduct) {
      return res.status(404).send({ message: 'Party not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
