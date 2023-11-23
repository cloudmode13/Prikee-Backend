import GSTInventory from '../../models/Item/GSTInventory.js';

export async function handleGSTInvtPost(req, res) {
  const { invGST } = req.body;

  const data = {
    invGST,
  };

  try {
    const invGST = await GSTInventory.create(data);
    if (invGST) {
      res.send({ data: invGST });
      console.log('demo', invGST);
    } else {
      res.send({ message: 'not ok' });
    }
  } catch (err) {
    console.log(err);
  }
}

export async function handleGSTInvtGet(req, res) {
  try {
    const invGST = await GSTInventory.find({});
    res.send({ data: invGST });
    console.log(1, invGST);
  } catch (e) {
    console.log(e);
  }
}

export async function handleGSTInvtDelete(req, res) {
  try {
    const deletedInvGST = await GSTInventory.findByIdAndDelete(req.params.id);

    if (!deletedInvGST) {
      return res.status(404).send({ message: 'Category not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
