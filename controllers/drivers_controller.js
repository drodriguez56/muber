module.exports = {
  greeting(req, res) {
    res.send({ hi: "there" });
  },

  create(req, res) {
    res.send({ hi: "created" });
  }
};
