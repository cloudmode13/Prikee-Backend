const express = require("express");
const router = express.Router();
const Parties = require("../models/PartiesModel"); // Make sure to provide the correct path to the Parties model

router.post("/", async (req, res) => {
    const { name, category, mobilenumber, party_type, balance } = req.body;

    const data = {
        name: name,
        category: category,
        mobilenumber: mobilenumber,
        party_type: party_type,
        balance: balance,
    };

    try {
        const parties = await Parties.create(data);
        console.log(parties);
        if (parties) {
            res.send({ data: parties });
        } else {
            res.send({ message: "Not OK" });
        }
    } catch (e) {
        console.log(e);
    }
});

router.get("/", async (req, res) => {
    try {
        const partiesData = await Parties.find({});
        res.send({ data: partiesData });
        console.log(partiesData);
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;
