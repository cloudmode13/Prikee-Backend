import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import _ from 'lodash';
import clientRouter from './routes/Client/clientModal.js';
import createCategoryRouter from './routes/Client/createCategory.js';
import productRouter from './routes/Item/product.js';
import createInvtRouter from './routes/Item/categoryInventory.js';
import othersInvtRouter from './routes/Item/othersInventory.js';
import gstInvtRouter from './routes/Setting/gstInventory.js';
import serviceInvtRouter from './routes/Item/serviceInv.js';
import createSrvRouter from './routes/Item/SrvCategory.js';
import othersSrvRouter from './routes/Item/SrvOthers.js';
import CustomerNameRouter from './routes/SalesInvoice/Create_CustomerName.js';
import SalesPersonRouter from './routes/Setting/SalesPerson.js';
import salesInvoiceRouter from './routes/SalesInvoice/SalesInvoice.js';
import productImageRouter from './routes/Item/productImage.js';
import serviceImageRouter from './routes/Item/serviceImage.js';
import inventoryItemRouter from './routes/SalesInvoice/InventoryItem.js';
import organisation from './routes/Setting/Organisation.js';
import quotationRouter from './routes/SalesInvoice/Quotation.js';
import quoInvItemRouter from './routes/SalesInvoice/QuoInvItem.js';
import dcRouter from './routes/SalesInvoice/DeliveryChallan.js';
import paidStatusRouter from './routes/SalesInvoice/PaidStatus.js';
import salesReturnRouter from './routes/SalesInvoice/SalesReturn.js';
import purchaseRouter from './routes/Purchase/PurchaseModal.js';
import paymentOutRouter from './routes/Purchase/Payment_Out.js';
import purchaseReturnRouter from './routes/Purchase/Purchase_Return.js';
import purchaseOrderRouter from './routes/Purchase/Purchase_Order_Route.js';
import expensesRouter from './routes/Expenses/Expenses.js';
import cashBankRouter from './routes/Cash_Bank/Cash_Bank.js';
import authRouter from './routes/User/auth.route.js';
import quoNumRouter from './routes/SalesInvoice/Quo_Number.router.js';
import paidToCtgyRouter from './routes/Expenses/PaidToCategory_Router.js';
import creditNoteRouter from './routes/SalesInvoice/CreditNote_Router.js';
import debitNoteRouter from './routes/Purchase/DebitNote_Router.js';
import { errorHandlerMiddleware } from './utils/error.js';
import authenRouter from './routes/User/user.route.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('product'));
app.use(express.static('Services'));
app.use(express.static('Organisation'));

const port = process.env.PORT || 7000;

mongoose
  .connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB Connnected');
  })
  .catch((e) => console.log(e));

const db = mongoose.connection;

app.use('/auth', authRouter);

app.use('/authen', authenRouter);

app.use('/client', clientRouter);

app.use('/createCategory', createCategoryRouter);

app.use('/product', productRouter);

app.use('/categoryInvt', createInvtRouter);

app.use('/othersInvt', othersInvtRouter);

app.use('/gstInvt', gstInvtRouter);

app.use('/service', serviceInvtRouter);

app.use('/categorySrv', createSrvRouter);

app.use('/othersSrv', othersSrvRouter);

app.use('/customerName', CustomerNameRouter);

app.use('/salesPerson', SalesPersonRouter);

app.use('/salesInvoice', salesInvoiceRouter);

app.use('/productImage', productImageRouter);

app.use('/serviceImage', serviceImageRouter);

app.use('/inventoryItem', inventoryItemRouter);

app.use('/quoInvItem', quoInvItemRouter);

app.use('/organisation', organisation);

app.use('/quotation', quotationRouter);

app.use('/quoNum', quoNumRouter);

app.use('/deliveryChallan', dcRouter);

app.use('/paidStatus', paidStatusRouter);

app.use('/salesReturn', salesReturnRouter);

app.use('/creditNote', creditNoteRouter);

app.use('/purchase', purchaseRouter);

app.use('/paymentOut', paymentOutRouter);

app.use('/purchaseReturn', purchaseReturnRouter);

app.use('/purchaseOrder', purchaseOrderRouter);

app.use('/debitNote', debitNoteRouter);

app.use('/expenses', expensesRouter);

app.use('/paidToCtgyRouter', paidToCtgyRouter);

app.use('/cashBank', cashBankRouter);

app.use(errorHandlerMiddleware);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

// app.get('/', (req, res) => {
//   console.log('hello cloud');
// });

app.listen(port, () => console.log(`Listening to localhost: ${port}`));
