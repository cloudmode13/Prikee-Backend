import QuoNum from '../../models/SalesInvoice/Quotation_Number.model.js';

export async function handleQuoNumPost(req, res) {
  const { currentNo, newNumber } = req.body;
  console.log(19, req.body);

  const data = {
    currentNo,
    newNumber,
  };

  console.log(32, data);

  try {
    const quoNumber = await QuoNum.create(data);
    console.log(16, quoNumber);
    if (quoNumber) {
      res
        .status(201)
        .send({ message: 'quoNumber created successfully', data: quoNumber });
    } else {
      res.status(400).send({ message: 'quoNumber creation failed' });
    }
  } catch (e) {
    console.log(e);
  }
}

export async function handleQuoNumGet(req, res) {
  try {
    const quoNumber = await QuoNum.find({});
    res.send({ data: quoNumber });
  } catch (e) {
    console.log(e);
  }
}
