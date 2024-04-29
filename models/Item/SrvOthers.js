import mongoose from 'mongoose';

const srvOthersInvSchema = new mongoose.Schema({
  serviceOthersName: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('SrvOthersInv', srvOthersInvSchema);
