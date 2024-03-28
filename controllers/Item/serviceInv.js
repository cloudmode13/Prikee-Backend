import Service from '../../models/Item/ServiceInv.js';

export async function handleServicePost(req, res) {
  const {
    serviceName,
    category,
    serviceCode,
    serviceDescription,
    serviceHsn,
    unit,
    serviceSalesPrice,
    srvSalesTax,
    sacCode,
    serviceGst,
    basicServiceSalesPrice,
  } = req.body;

  const imagePath = req.file ? req.file.filename : null;

  const data = {
    serviceName,
    category,
    serviceCode,
    serviceDescription,
    serviceHsn,
    unit,
    serviceSalesPrice,
    srvSalesTax,
    sacCode,
    serviceGst,
    imagePath,
    basicServiceSalesPrice,
  };

  try {
    const serviceItem = await Service.create(data);
    if (serviceItem) {
      res
        .status(201)
        .send({ message: 'Service created successfully', data: serviceItem });
    } else {
      res.status(400).send({ message: 'Service creation failed' });
    }
  } catch (e) {
    console.log(e);
  }
}

export async function handleServiceGet(req, res) {
  try {
    const serviceItem = await Service.find({});
    res.send({ data: serviceItem });
  } catch (e) {
    console.log(e);
  }
}

export async function handleServiceUpdate(req, res) {
  const imagePath = req.file ? req.file.filename : null;

  try {
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      { ...req.body, imagePath },
      { new: true },
    );
    if (!updatedService) {
      return res.status(404).send({ message: 'ServiceItem not found' });
    }

    return res
      .status(200)
      .send({ message: 'Successfully updated', data: updatedService });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}

export async function handleServiceDelete(req, res) {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);

    if (!deletedService) {
      return res.status(404).send({ message: 'ServiceItem not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
