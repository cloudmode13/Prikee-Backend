import CreditNote from '../../models/SalesInvoice/CreditNote_Modal.js';

export async function handleCdnPost(req, res) {
  const { cdnNum, cdnDate, customerNotes, termsandconditions, returnData } =
    req.body;
  console.log('re', req.body);
  const data = {
    cdnNum,
    cdnDate,
    customerNotes,
    termsandconditions,
    returnData,
  };
  console.log('data', data);
  try {
    const creditNote = await CreditNote.create(data);
    console.log('cno', creditNote);
    if (creditNote) {
      res
        .status(201)
        .send({ message: 'CDN created successfully', data: creditNote });
    } else {
      res.status(400).send({ message: 'CDN creation failed' });
    }
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: 'Internal Server Error' });
  }
}

export async function handleCdnGet(req, res) {
  try {
    const creditNote = await CreditNote.find({});
    const latestCdnNumber = await CreditNote.findOne().sort({ _id: -1 });

    res.send({ data: creditNote, latestCdnNumber: latestCdnNumber.cdnNum });
  } catch (e) {
    console.log(e);
  }
}

export async function handleCdnDelete(req, res) {
  try {
    const deletedCreditNoteReturn = await CreditNote.findByIdAndDelete(
      req.params.id,
    );

    if (!deletedCreditNoteReturn) {
      return res.status(404).send({ message: 'CDN not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
