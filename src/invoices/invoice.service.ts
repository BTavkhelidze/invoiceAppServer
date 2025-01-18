import { Response, Request } from 'express';
import invoicesModel from '../models/invoices.model';
import { isValidObjectId } from 'mongoose';
const getInvoices = async (req: Request, res: Response) => {
  const invoices = await invoicesModel.find();
  res.json(invoices);
};

const getSingleInvoice = async (req: Request, res: Response) => {
  const id = req.params.id;
  if (!isValidObjectId(id)) {
    res.status(404).json({ message: 'Invalid invoice id' });
    return;
  }

  const invoice = await invoicesModel.findById(id);
  if (!invoice) {
    res.status(404).json({ message: 'Invoice not found' });
    return;
  }
  res.status(200).json({ invoice: invoice });
};

const createInvoice = async (req: Request, res: Response) => {
  await invoicesModel.create(req.body);

  res.json({ message: 'Invoice created successfully' });
};

const updateInvoice = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    res.status(404).json({ message: 'Invalid invoice id' });
    return;
  }
  const body = req.body;
  console.log(body);
};

const updateInvoiceStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    res.status(404).json({ message: 'Invalid invoice id' });
    return;
  }

  const { status } = req.body;
  console.log(status);

  await invoicesModel.findByIdAndUpdate(id, { status: status }, { new: true });
  res.status(200).json({ message: 'Invoice updated successfully' });
};

export {
  getInvoices,
  createInvoice,
  getSingleInvoice,
  updateInvoice,
  updateInvoiceStatus,
};
