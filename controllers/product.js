import Product from "../models/Product.js";

export async function handleProductPost(req, res) {
    const { itemName, category, itemCode, itemDescription, customField:[{hsn}], 
     stockDetails:[{unit,openingStock, date}],pricingDetails:[{salesPrice,purchasePrice,hsnCode,gst,}], } = req.body;
      
        const data = {
            itemName:itemName,
            category:category,
            itemCode:itemCode,
            itemDescription:itemDescription,
            customField:[{hsn:hsn}],
            stockDetails:[{unit:unit,
                openingStock:openingStock,
                date:date}],
                pricingDetails:[{salesPrice:salesPrice,purchasePrice:purchasePrice,hsnCode:hsnCode,gst:gst,}] 
        };
        
        try {
          const productItem = await Product.create(data);
          console.log(104, productItem);
          if (productItem) {
            res.status(201).send({ message: "Party created successfully", data: productItem });
          } else {
            res.status(400).send({ message: "Party creation failed" });
          }
        } catch (e) {
          console.log(e);
        }
  }


  export async function handleProductGet (req, res) {
    try {
        const productItem = await Product.find({});
        res.send({ data: productItem });
        console.log(1, productItem);
      } catch (e) {
        console.log(e);
      }
  }


  export async function handleProductUpdate (req, res) {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log('hello'+ updatedProduct);
        if (!updatedProduct) {
          return res.status(404).send({ message: "Party not found" });
        }
    
        return res.status(200).send({ message: "Successfully updated", data: updatedProduct });
      } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Server error" });
      }
  }


  export async function handleProductDelete (req, res) {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    
        if (!deletedProduct) {
          return res.status(404).send({ message: "Party not found" });
        }
    
        return res.status(200).send({ message: "Successfully deleted" });
      } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Server error" });
      }
  }