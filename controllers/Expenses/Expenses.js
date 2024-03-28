import Expenses from '../../models/Expenses/Expenses.js';

export async function handleExpensesPost(req, res) {
  const { description, paidTo, amount, remarks } = req.body;

  const data = {
    description,
    paidTo,
    amount,
    remarks,
  };

  try {
    const expensesData = await Expenses.create(data);
    if (expensesData) {
      res.status(200).send({
        Message: 'expesesData create successfully',
        data: expensesData,
      });
    } else {
      res.status(400).send({ message: 'expensesData create failed' });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: 'Server error' });
  }
}

export async function handleExpensesGet(req, res) {
  try {
    const expensesData = await Expenses.find({});
    res.send({ data: expensesData });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: 'Server error' });
  }
}

export async function handleExpensesDelete(req, res) {
  try {
    const deleteExpensesData = await Expenses.findByIdAndDelete(req.params.id);
    if (!deleteExpensesData) {
      return res.status(404).send({ message: 'Record not Found' });
    }
    res.status(200).send({ message: 'record deleted' });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
