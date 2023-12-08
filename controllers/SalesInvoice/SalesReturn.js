import SalesReturn from '../../models/SalesInvoice/SalesReturn.js';

export async function handleSRPost(req, res) {
  const { returnDate, reason, returnData } = req.body;
  console.log(19, req.body);

  const data = {
    returnDate,
    reason,
    returnData,
  };

  console.log(32, data);

  try {
    const salesReturn = await SalesReturn.create(data);
    if (salesReturn) {
      res
        .status(201)
        .send({ message: 'Party created successfully', data: salesReturn });
    } else {
      res.status(400).send({ message: 'Party creation failed' });
    }
  } catch (e) {
    console.log(e);
  }
}

export async function handleSRGet(req, res) {
  try {
    const salesReturn = await SalesReturn.find({});
    res.send({ data: salesReturn });
  } catch (e) {
    console.log(e);
  }
}
