// routers/petrouter.js
const express = require('express');
const router  = express.Router();
const Pet = require('../models/PetModels'); // ✅ โมเดลจริง

// เพิ่มสัตว์เลี้ยง
router.post('/add', async (req, res) => {
  try {
    const saved = await new Pet(req.body).save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ดึงทั้งหมด
router.get('/', async (_req, res) => {
  try {
    const pets = await Pet.find();
    res.status(200).json(pets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ดึงตาม ID
router.get('/:id', async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) return res.status(404).json({ error: 'ไม่พบสัตว์เลี้ยง' });
    res.status(200).json(pet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// อัปเดต
router.put('/:id', async (req, res) => {
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!pet) return res.status(404).json({ error: 'ไม่พบสัตว์เลี้ยง' });
    res.status(200).json(pet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ลบ
router.delete('/:id', async (req, res) => {
  try {
    const pet = await Pet.findByIdAndDelete(req.params.id);
    if (!pet) return res.status(404).json({ error: 'ไม่พบสัตว์เลี้ยง' });
    res.status(200).json({ message: 'ลบข้อมูลสำเร็จ' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
