import SrvOthersInv from "../../models/Item/SrvOthers.js";

export async function handleSrvOthersPost(req, res) {
  const { othersName } = req.body;

  const data = {
    othersName: othersName,
  };

  try {
    const srvOthersInv = await SrvOthersInv.create(data);
    if (srvOthersInv) {
      res.send({ data: srvOthersInv });
    
    } else {
      res.send({ message: "not ok" });
    }
  } catch (err) {
    console.log(err);
  }
 
}


export async function handleSrvOthersGet (req, res) {
  try {
      const srvOthersInv = await SrvOthersInv.find({});
      res.send({ data: srvOthersInv });
     
    } catch (e) {
      console.log(e);
    }
}
