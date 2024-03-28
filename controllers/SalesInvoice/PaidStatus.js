import PaidStatus from '../../models/SalesInvoice/PaidStatus.js';

export async function handlePaidStatusPost(req, res) {
  const { paidMode, cusInvNo } = req.body;
  const data = {
    cusInvNo: cusInvNo,
    paidMode: paidMode,
  };
  try {
    const paidStatus = await PaidStatus.create(data);
    if (paidStatus) {
      res.send({ data: paidStatus });
    } else {
      res.send({ message: 'not ok' });
    }
  } catch (err) {
    console.log(err);
  }
}

export async function handlePaidStatusGet(req, res) {
  try {
    const paidStatus = await PaidStatus.find({});
    res.send({ data: paidStatus });
  } catch (e) {
    console.log(e);
  }
}
