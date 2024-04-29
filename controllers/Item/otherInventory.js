import OthersInventory from '../../models/Item/OthersInventory.js';

export async function handleOthersInvtPost(req, res) {
  const { othersName } = req.body;
  const userId = req.user.id;

  const data = {
    othersName: othersName,
    userId: userId,
  };

  try {
    const othersInventory = await OthersInventory.create(data);
    if (othersInventory) {
      res.send({ data: othersInventory });
    } else {
      res.send({ message: 'not ok' });
    }
  } catch (err) {
    console.log(err);
  }
}

export async function handleOthersInvtGet(req, res) {
  const userId = req.user.id;
  try {
    const othersInventory = await OthersInventory.find({ userId: userId });
    res.send({ data: othersInventory });
  } catch (e) {
    console.log(e);
  }
}

export async function handleOthersInvtDelete(req, res) {
  const userId = req.user.id;
  try {
    const deletedOthersInvt = await OthersInventory.findByIdAndDelete({
      _id: req.params.id,
      userId: userId,
    });

    if (!deletedOthersInvt) {
      return res.status(404).send({ message: 'Category not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
