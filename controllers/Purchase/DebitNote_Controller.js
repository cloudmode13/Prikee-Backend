import DebitNote from '../../models/Purchase/DebiteNote_Modal.js';

export async function handleDbnPost(req, res) {
  const { dbnNum, dbnDate, customerNotes, termsandconditions, returnData } =
    req.body;

  const userId = req.user.id;

  const data = {
    dbnNum,
    dbnDate,
    customerNotes,
    termsandconditions,
    returnData,
    userId: userId,
  };

  try {
    const debitNote = await DebitNote.create(data);
    if (debitNote) {
      res
        .status(201)
        .send({ message: 'DBN created successfully', data: debitNote });
    } else {
      res.status(400).send({ message: 'DBN creation failed' });
    }
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

export async function handleDbnGet(req, res) {
  const userId = req.user.id;
  try {
    const debitNote = await DebitNote.find({ userId: userId });
    const latestDbnNumber = await DebitNote.findOne().sort({ _id: -1 });

    res.send({ data: debitNote, latestDbnNumber: latestDbnNumber.dbnNum });
  } catch (e) {
    console.log(e);
  }
}

export async function handleDbnDelete(req, res) {
  const userId = req.user.id;
  try {
    const deletedDebitNoteReturn = await DebitNote.findByIdAndDelete({
      _id: req.params.id,
      userId: userId,
    });

    if (!deletedDebitNoteReturn) {
      return res.status(404).send({ message: 'DBN not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
