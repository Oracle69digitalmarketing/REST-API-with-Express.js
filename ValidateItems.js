exports.validateItem = (req, res, next) => {
  const { name, description } = req.body;

  if (typeof name !== 'string' || typeof description !== 'string') {
    return res.status(400).json({ error: 'Name and description must be strings' });
  }

  if (!name.trim() || !description.trim()) {
    return res.status(400).json({ error: 'Name and description are required' });
  }

  next();
};
