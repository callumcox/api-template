const getHealth = (req, res) => {
  res.json({ status: "UP" });
};

module.exports = {
  getHealth: getHealth,
};
