import QuoNum from '../../models/SalesInvoice/Quotation_Number.model.js';

export async function handleQuoNumPost(req, res) {
  const { currentNo, newNumber } = req.body;
  const userId = req.user.id;

  const data = {
    currentNo,
    newNumber,
    userId: userId,
  };

  try {
    const quoNumber = await QuoNum.create(data);
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
  const userId = req.user.id;

  try {
    const { prefix } = req.query;
    const latestQuoNumber = await QuoNum.findOne({ userId: userId }).sort({
      _id: -1,
    });
    console.log(33, latestQuoNumber);
    let newNumber = '';
    let oldNumber = '';

    if (latestQuoNumber) {
      newNumber = latestQuoNumber.newNumber;
      oldNumber = latestQuoNumber.currentNo;
    } else {
      newNumber = prefix + '';
    }
    console.log(44, newNumber);
    res.json({ new: newNumber, old: oldNumber });
  } catch (e) {
    console.log(e);
  }
}
