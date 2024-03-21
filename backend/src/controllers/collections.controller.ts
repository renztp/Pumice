import Collection from "../models/collections.model.js";

export const getAllCollections = async (req, res) => {
  try {
    const collections = await Collection.find();
    res.status(200).json(collections);
    console.log(`[GET][200] /collections`);
  } catch (error) {
    console.log(`[ERR][GET] /collections`, error);
    res.status(404).json({ message: error.message });
  }
}

export const createNewCollection = async (req, res) => {
  const collection = req.body;
  const newCollection = new Collection(collection);
  try {
    await newCollection.save();
    res.status(201).json(newCollection);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export const getCollectionById = async (req, res) => {
  const { id } = req.params;
  try {
    const collection = await Collection.find({ _id: id });
    res.status(200).json(collection);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
