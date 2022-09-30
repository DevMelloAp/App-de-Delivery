const { createSalesService, updateSalesService } = require('../services/salesService');

const createSalesController = async (req, res) => {
  const data = req.body;
 
    const token = req.headers.Authorization;
    console.log(token);
    // const validateToken = JwtServiceSignDecode(token);

    // if(!validateToken) {
    //   const e = new Error('Invalid token');
    //   e.name = 'NotFoundError';
    //   throw e; 
    // }
   const sale = await createSalesService(data);

  res.status(201).json(sale);  
};

const updateSalesController = async (req, res) => {
  const { id, status } = req.body;

  await updateSalesService(id, status);

  res.status(201).json({ mensage: 'Updated' });
};


module.exports = { createSalesController, updateSalesController };