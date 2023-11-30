import PaidStatus from '../../models/SalesInvoice/PaidStatus.js';

export async function handlePaidStatusPost(req, res) {
  const { paidMode, cusInvNo } = req.body;
  console.log(5, req.body);
  const data = {
    cusInvNo: cusInvNo,
    paidMode: paidMode,
  };
  console.log(9, data);
  try {
    const paidStatus = await PaidStatus.create(data);
    if (paidStatus) {
      res.send({ data: paidStatus });
      console.log(14, paidStatus);
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
    console.log(1, paidStatus);
  } catch (e) {
    console.log(e);
  }
}
