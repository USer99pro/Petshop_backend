const Pet = require('../Models/PetModels');

// สร้างสัตว์เลี้ยงใหม่
exports.createPet = async (req, res) => {
  try {
    const pet = new Pet(req.body);
    await pet.save();
    res.status(201).json(pet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ดึงสัตว์เลี้ยงทั้งหมด
exports.getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ดึงสัตว์เลี้ยงตาม ID
exports.getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) return res.status(404).json({ error: 'ไม่พบสัตว์เลี้ยง' });
    res.status(200).json(pet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
