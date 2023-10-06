import ProductImage from '../../models/Item/ProductImage.js';
import fs from 'fs';

export async function handleProductImagePost(req, res) {
  // console.log(4, req.file.filename);

  if (!req.body || !req.file) {
    res.status(400).send({ message: 'Invalid request body' });
    return;
  }

  const imagePath = req.file ? req.file.filename : null;

  const data = {
    imagePath: imagePath,
  };

  try {
    const productImage = await ProductImage.create(data);
    // console.log(104, productImage);
    if (productImage) {
      res
        .status(201)
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
    // console.log(1, productImage);
  } catch (e) {
    console.log(e);
  }
}

export async function handleProductImageUpdate(req, res) {
  const { id } = req.params;
  console.log(45, req.body);
  try {
    console.log(47, req.file.path);
    const updatedProductImage = await ProductImage.findByIdAndUpdate(
      id,
      { imagePath: req.file ? req.file.filename : null },
      { new: true },
    );
    console.log(53, updatedProductImage, req.file.path);
    if (!updatedProductImage) {
      return res.status(404).send({ message: 'Party not found' });
    }
    console.log(57, updatedProductImage.imagePath);

    const imagePath = `product/Images/${updatedProductImage?.imagePath}`;

    if (fs.existsSync(imagePath)) {
      console.log(62, imagePath);
      fs.unlinkSync(imagePath);
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
