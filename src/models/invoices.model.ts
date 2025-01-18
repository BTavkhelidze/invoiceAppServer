import mongoose from 'mongoose';

const invoicesSchema = new mongoose.Schema({
  createdAt: {
    type: String,
    required: true,
  },
  paymentDue: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  paymentTerms: {
    type: Number,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  clientEmail: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['pending', 'paid', 'draft'],
  },
  senderAddress: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    postCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  clientAddress: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    postCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  items: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'items',
    default: [],
  },
  total: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('invoices', invoicesSchema);
