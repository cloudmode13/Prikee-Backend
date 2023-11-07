import Organisation from '../../models/Setting/Organisation.js';

export async function handleOrganisationPost(req, res) {
  const {
    organisationName,
    address,
    phoneNmuber,
    mobileNmber,
    GSTIN,
    state,
    code,
    email,
  } = req.body;
  const data = {
    organisationName,
    address,
    phoneNmuber,
    mobileNmber,
    GSTIN,
    state,
    code,
    email,
  };
  try {
    const organisation = await Organisation.create(data);
    if (organisation) {
      res.send({ data: organisation });
      console.log('demo', organisation);
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
    res.send({ data: organisation });
    console.log(1, organisation);
  } catch (e) {
    console.log(e);
  }
}

export async function handleOrganisationEdit(req, res) {
  try {
    const updatedOrganisation = await Organisation.findByIdAndUpdate(
      req.params.id,
      req.body,
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
