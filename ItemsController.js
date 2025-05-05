exports.getItemById = (req, res) => {
  const item = items.find(i => i.id === req.params.id);
  if (!item) {
    return res.status(404).json({ error: `Item with ID ${req.params.id} not found` });
  }
  res.json(item);
};
