import Router, { Express } from 'express';
import {
  createInvoice,
  getInvoices,
  getSingleInvoice,
  updateInvoice,
  updateInvoiceStatus,
} from './invoice.service';

const invoiceRouter = Router();

invoiceRouter.get('/', getInvoices);
invoiceRouter.get('/:id', getSingleInvoice);
invoiceRouter.post('/', createInvoice);
invoiceRouter.put('/:id', updateInvoice);
invoiceRouter.patch('/:id', updateInvoiceStatus);

export default invoiceRouter;
