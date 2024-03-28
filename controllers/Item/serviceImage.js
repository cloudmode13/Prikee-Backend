import ServiceImage from '../../models/Item/ServiceImages.js';
import fs from 'fs';

export async function handleServiceImagePost(req, res) {
  if (!req.body || !req.file) {
    res.status(400).send({ message: 'Invalid request body' });
    return;
  }

  const serviceImagePath = req.file ? req.file.filename : null;

  const data = {
    serviceImagePath: serviceImagePath,
  };

  try {
    const serviceImage = await ServiceImage.create(data);
    if (serviceImage) {
      res
        .status(201)
        .send({ message: 'Party created successfully', data: serviceImage });
    } else {
      res.status(400).send({ message: 'Party creation failed' });
    }
  } catch (e) {
    console.log(e);
  }
}

export async function handleServiceImageGet(req, res) {
  try {
    const serviceImage = await ServiceImage.find({});
    res.send({ data: serviceImage });
  } catch (e) {
    console.log(e);
  }
}

export async function handleServiceImageUpdate(req, res) {
  const { id } = req.params;
  try {
    // Find the existing product image
    const existingServiceImage = await ServiceImage.findById(id);

    if (!existingServiceImage) {
      return res.status(404).send({ message: 'Product image not found' });
    }

    // Delete the existing image if it exists
    if (existingServiceImage.serviceImagePath) {
      const serviceImagePath = `service/ServiceImages/${existingServiceImage.serviceImagePath}`;
      if (fs.existsSync(serviceImagePath)) {
        fs.unlinkSync(serviceImagePath);
      }
    }

    // Update the product image in the database
    const updatedServiceImage = await ServiceImage.findByIdAndUpdate(
      id,
      { serviceImagePath: req.file ? req.file.filename : null },
      { new: true },
    );

    if (!updatedServiceImage) {
      return res.status(404).send({ message: 'Party not found' });
    }

    return res
      .status(200)
      .send({ message: 'Successfully updated', data: updatedServiceImage });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}

export async function handleServiceImageDelete(req, res) {
  try {
    const deletedServiceImage = await ServiceImage.findByIdAndDelete(
      req.params.id,
    );

    if (!deletedServiceImage) {
      return res.status(404).send({ message: 'Party not found' });
    }

    const serviceImagePath = `product/Images/${deletedServiceImage.serviceImagePath}`;

    if (fs.existsSync(serviceImagePath)) {
      fs.unlinkSync(serviceImagePath);
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
