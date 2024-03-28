import ProductImage from '../../models/Item/ProductImage.js';
import fs from 'fs';

export async function handleProductImagePost(req, res) {
  const imagePath = req.file ? req.file.filename : null;

  const data = {
    imagePath,
  };

  try {
    const productImage = await ProductImage.create(data);
    if (productImage) {
      res
        .status(200)
        .send({ message: 'Party created successfully', data: productImage });
    } else {
      res.status(400).send({ message: 'Party creation failed' });
    }
  } catch (e) {
    console.log(e);
  }
}

export async function handleProductImageGet(req, res) {
  try {
    const productImage = await ProductImage.find({});
    res.send({ data: productImage });
  } catch (e) {
    console.log(e);
  }
}

export async function handleProductImageUpdate(req, res) {
  const { id } = req.params;
  try {
    // Find the existing product image
    const existingProductImage = await ProductImage.findById(id);

    if (!existingProductImage) {
      return res.status(404).send({ message: 'Product image not found' });
    }

    // Delete the existing image if it exists
    if (existingProductImage.imagePath) {
      const imagePath = `product/Images/${existingProductImage.imagePath}`;
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    // Update the product image in the database
    const updatedProductImage = await ProductImage.findByIdAndUpdate(
      id,
      { imagePath: req.file ? req.file.filename : null },
      { new: true },
    );

    if (!updatedProductImage) {
      return res.status(404).send({ message: 'Party not found' });
    }

    return res
      .status(200)
      .send({ message: 'Successfully updated', data: updatedProductImage });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}

export async function handleProductImageDelete(req, res) {
  try {
    const deletedProductImage = await ProductImage.findByIdAndDelete(
      req.params.id,
    );

    if (!deletedProductImage) {
      return res.status(404).send({ message: 'Party not found' });
    }

    const imagePath = `product/Images/${deletedProductImage.imagePath}`;

    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
