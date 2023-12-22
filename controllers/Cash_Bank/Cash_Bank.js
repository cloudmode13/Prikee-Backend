import CashBank from '../../models/Cash_Bank/Cash_Bank.js';

export async function handleCBPost(req, res) {
  const { description, paidMode, amountIn, amountOut } = req.body;

  const data = {
    description,
    paidMode,
    amountIn,
    amountOut,
  };

  try {
    const cashBankData = await CashBank.create(data);
    console.log('exp', cashBankData);
    if (cashBankData) {
      res.status(200).send({
        message: 'cashBankData create successfully',
        data: cashBankData,
      });
    } else {
      res.status(400).send({ message: 'cashBankData create failed' });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: 'Server error' });
  }
}

export async function handleCBGet(req, res) {
  try {
    const cashBankData = await CashBank.find({});
    res.send({ data: cashBankData });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: 'Server error' });
  }
}

export async function handleCBDelete(req, res) {
  try {
    const deleteCashBankData = await CashBank.findByIdAndDelete(req.params.id);
    if (!deleteCashBankData) {
      return res.status(404).send({ message: 'Record not Found' });
    }
    res.status(200).send({ message: 'record deleted' });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
