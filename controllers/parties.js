import Parties from "../models/PartiesModel.js";

export async function handlePartiesPost(req, res) {
    const { name,category, mobilenumber, party_type, balance,email,
        gst, pannumber, billingaddress,shippingaddress,creditperiod,creditlimit } = req.body;
      
        const data = {
            name:name,
            category:category,
            mobilenumber:mobilenumber,
            email:email,
            party_type:party_type,
            balance:balance,
            gst:gst,
            pannumber:pannumber,
            billingaddress:billingaddress,
            shippingaddress:shippingaddress,
            creditperiod:creditperiod,
            creditlimit:creditlimit
            
        };
      
        try {
          const parties = await Parties.create(data);
          console.log(104, parties);
          if (parties) {
            res.status(201).send({ message: "Party created successfully", data: parties });
          } else {
            res.status(400).send({ message: "Party creation failed" });
          }
        } catch (e) {
          console.log(e);
      
        }
   
  }


  export async function handlePartiesGet (req, res) {
    try {
        const parties = await Parties.find({});
        res.send({ data: parties });
        console.log(1, parties);
      } catch (e) {
        console.log(e);
      }
  }


  export async function handlePartiesUpdate (req, res) {
    try {
        const updatedParty = await Parties.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log('hello', updatedParty);
        if (!updatedParty) {
          return res.status(404).send({ message: "Party not found" });
        }
    
        return res.status(200).send({ message: "Successfully updated", data: updatedParty });
      } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Server error" });
      }
  }


  export async function handlePartiesDelete (req, res) {
    try {
        const deletedParty = await Parties.findByIdAndDelete(req.params.id);
    
        if (!deletedParty) {
          return res.status(404).send({ message: "Party not found" });
        }
    
        return res.status(200).send({ message: "Successfully deleted" });
      } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Server error" });
      }
  }