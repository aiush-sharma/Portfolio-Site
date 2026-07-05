import Contact from '../model/Contact.schema.js'; 

// @desc    Submit a new contact form message
// @route   POST /api/contact
// @access  Public
export const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'All fields are strictly required.' 
      });
    }

    const newContactMessage = new Contact({ name, email, message });
    await newContactMessage.save();

    return res.status(201).json({ 
      success: true, 
      message: 'Form submission recorded successfully!' 
    });
    
  } catch (error) {
    console.error('Controller Error:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Failed to record the contact form submission. Server error.' 
    });
  }
};