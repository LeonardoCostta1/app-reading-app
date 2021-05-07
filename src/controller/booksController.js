const booksModel = require("../model/booksModel");

module.exports = {
  async index(req, res) {
    await booksModel.find({}, (err, data) => {
      if (err) return res.send({ error: "Error to consulte book" });

      return res.json(data);
    });
  },
  async add(req, res) {
    const { title, cover, history } = req.body;
    if (!title || !cover || !history)
      return res.send({ error: "insulficient data" });

    await booksModel.findOne({ title }, (err, data) => {
      if (err) return res.send({ err: "book Wrong" });
      if (data) return res.send({ err: "book been registered" });

      booksModel.create(req.body, (err, data) => {
        if (err) return res.send({ error: "error to create book" });

        return res.send({ data: data.id });
      });
    });
  },
  async del(req, res) {
    const { id } = req.params;

    if (!id) return res.send({ error: "insulficient data" });

    await booksModel.findOneAndDelete(req.params.id);
    return res.send({ message: "removido" });
  },
};
