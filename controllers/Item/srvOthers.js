import SrvOthersInv from '../../models/Item/SrvOthers.js';

export async function handleSrvOthersPost(req, res) {
  const { serviceOthersName } = req.body;
  const userId = req.user.id;

  const data = {
    serviceOthersName: serviceOthersName,
    userId: userId,
  };

  try {
    const srvOthersInv = await SrvOthersInv.create(data);
    if (srvOthersInv) {
      res.send({ data: srvOthersInv });
    } else {
      res.send({ message: 'not ok' });
    }
  } catch (err) {
    console.log(err);
  }
}

export async function handleSrvOthersGet(req, res) {
  const userId = req.user.id;
  try {
    const srvOthersInv = await SrvOthersInv.find({ userId: userId });
    res.send({ data: srvOthersInv });
  } catch (e) {
    console.log(e);
  }
}

export async function handleSrvOthersDelete(req, res) {
  const userId = req.user.id;
  try {
    const deletedOthersSrv = await SrvOthersInv.findByIdAndDelete({
      _id: req.params.id,
      userId: userId,
    });

    if (!deletedOthersSrv) {
      return res.status(404).send({ message: 'Category not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
