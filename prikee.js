import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import _ from "lodash";
import clientRouter from "./routes/Client/clientModal.js";
import createCategoryRouter from "./routes/Client/createCategory.js";
import productRouter from "./routes/Item/product.js";
import createInvtRouter from "./routes/Item/categoryInventory.js";
import othersInvtRouter from "./routes/Item/othersInventory.js";
import serviceInvtRouter from "./routes/Item/serviceInv.js";
import createSrvRouter from "./routes/Item/SrvCategory.js";
import othersSrvRouter from "./routes/Item/SrvOthers.js";
import CustomerNameRouter from "./routes/SalesInvoice/Create_CustomerName.js";
import SalesPersonRouter from "./routes/Setting/SalesPerson.js";
import salesInvoiceRouter from "./routes/SalesInvoice/SalesInvoice.js";
import productImageRouter from "./routes/Item/productImage.js";
import serviceImageRouter from "./routes/Item/serviceImage.js";
import inventoryItemRouter from "./routes/SalesInvoice/InventoryItem.js";
import organisation from "./routes/Setting/Organisation.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("product"));
app.use(express.static("service"));

const port = process.env.PORT || 8000;

const mongourl =
  "mongodb+srv://aruncloudmode:mf2XZuraVUoVEAI6@cluster0.mvermhl.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connnected");
  })
  .catch((e) => console.log(e));

const db = mongoose.connection;

app.use("/client", clientRouter);

app.use("/createCategory", createCategoryRouter);

app.use("/product", productRouter);

app.use("/categoryInvt", createInvtRouter);

app.use("/othersInvt", othersInvtRouter);

app.use("/service", serviceInvtRouter);

app.use("/categorySrv", createSrvRouter);

app.use("/othersSrv", othersSrvRouter);

app.use("/customerName", CustomerNameRouter);

app.use("/salesPerson", SalesPersonRouter);

app.use("/salesInvoice", salesInvoiceRouter);

app.use("/productImage", productImageRouter);

app.use("/serviceImage", serviceImageRouter);

app.use("/inventoryItem", inventoryItemRouter);

app.use("/organisation", organisation);

app.get("/", (req, res) => {
  console.log("hello cloud");
});

app.listen(port, () => console.log(`Listening to localhost: ${port}`));
