import Organisation from '../../models/Setting/Organisation.js';

export async function handleOrganisationPost(req, res) {
  const {
    organisationName,
    address,
    phoneNumber,
    mobileNumber,
    GSTIN,
    email,
    bankName,
    accountNo,
    branch,
    ifscCode,
    panNumber,
    website,
  } = req.body;

  const imagePath = req.file ? req.file.filename : null;
  const data = {
    organisationName,
    address,
    phoneNumber,
    mobileNumber,
    GSTIN,
    email,
    bankName,
    accountNo,
    branch,
    ifscCode,
    panNumber,
    imagePath,
    website,
  };
  try {
    const organisation = await Organisation.create(data);
    if (organisation) {
      res.send({ data: organisation });
    } else {
      res.send({ message: 'not ok' });
    }
  } catch (err) {
    console.log(err);
  }
}

export async function handleOrganisationGet(req, res) {
  try {
    const organisation = await Organisation.find({});
    return res.status(200).send({ data: organisation });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: 'Server error' });
  }
}

export async function handleOrganisationEdit(req, res) {
  const imagePath = req.file ? req.file.filename : null;

  try {
    const updatedOrganisation = await Organisation.findByIdAndUpdate(
      req.params.id,
      { ...req.body, imagePath },
      { new: true },
    );
    return res
      .status(200)
      .send({ message: 'Successfully updated', data: updatedOrganisation });
  } catch (error) {
    return res.status(500).send({ message: 'Server error' });
  }
}

export async function handleOrganisationDelete(req, res) {
  try {
    const deletedorganisation = await Organisation.findByIdAndDelete(
      req.params.id,
    );
    if (!deletedorganisation) {
      return res.status(404).send({ message: 'Organistion not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
