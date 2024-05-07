import GSTInventory from '../../models/Setting/GSTInventory.js';

export async function handleGSTInvtPost(req, res) {
  const { invGST } = req.body;
  const userId = req.user.id;

  const data = {
    invGST,
    userId: userId,
  };

  try {
    const invGST = await GSTInventory.create(data);
    if (invGST) {
      res.send({ data: invGST });
    } else {
      res.send({ message: 'not ok' });
    }
  } catch (err) {
    console.log(err);
  }
}

export async function handleGSTInvtGet(req, res) {
  const userId = req.user.id;
  try {
    const invGST = await GSTInventory.find({ userId: userId });
    res.send({ data: invGST });
  } catch (e) {
    console.log(e);
  }
}

export async function handleGSTInvtDelete(req, res) {
  const userId = req.user.id;
  try {
    const deletedInvGST = await GSTInventory.findByIdAndDelete({
      _id: req.params.id,
      userId: userId,
    });

    if (!deletedInvGST) {
      return res.status(404).send({ message: 'Category not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
