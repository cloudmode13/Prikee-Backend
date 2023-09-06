import OthersInventory from "../models/OthersInventory.js";

export async function handleOthersInvtPost(req, res) {
  const { othersName } = req.body;

  const data = {
    othersName: othersName,
  };

  try {
    const othersInventory = await OthersInventory.create(data);
    if (othersInventory) {
      res.send({ data: othersInventory });
      console.log('demo', othersInventory);
    } else {
      res.send({ message: "not ok" });
    }
  } catch (err) {
    console.log(err);
  }
 
}


export async function handleOthersInvtGet (req, res) {
  try {
      const othersInventory = await OthersInventory.find({});
      res.send({ data: othersInventory });
      console.log(1, othersInventory);
    } catch (e) {
      console.log(e);
    }
}
