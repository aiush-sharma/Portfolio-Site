import express from 'express';
import { submitContactForm } from '../controllers/Contact.controller.js'; // Note the explicit .js extension

const router = express.Router();

// Maps to POST http://localhost:5000/api/contact
router.post('/', submitContactForm);

export default router;