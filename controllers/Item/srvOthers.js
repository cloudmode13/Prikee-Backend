import SrvOthersInv from '../../models/Item/SrvOthers.js';

export async function handleSrvOthersPost(req, res) {
  const { serviceOthersName } = req.body;

  const data = {
    serviceOthersName: serviceOthersName,
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
  try {
    const srvOthersInv = await SrvOthersInv.find({});
    res.send({ data: srvOthersInv });
  } catch (e) {
    console.log(e);
  }
}

export async function handleSrvOthersDelete(req, res) {
  try {
    const deletedOthersSrv = await SrvOthersInv.findByIdAndDelete(
      req.params.id,
    );

    if (!deletedOthersSrv) {
      return res.status(404).send({ message: 'Category not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
