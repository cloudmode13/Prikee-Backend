import mongoose from 'mongoose';

const serviceItemSchema = new mongoose.Schema({
  serviceName: {
    type: String,
  },

  category: {
    type: String,
  },
  serviceCode: {
    type: String,
  },

  serviceDescription: {
    type: String,
  },

  serviceHsn: {
    type: String,
  },
  unit: {
    type: String,
  },
  basicServiceSalesPrice: {
    type: String,
  },
  serviceSalesPrice: {
    type: String,
  },
  srvSalesTax: {
    type: String,
  },
  sacCode: {
    type: String,
  },
  serviceGst: {
    type: String,
  },
  imagePath: {
    type: String,
  },
});

const Service = mongoose.model('serviceItemSchema', serviceItemSchema);

export default Service;
