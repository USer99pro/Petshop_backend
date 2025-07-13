const express = require('express');
const router  = express.Router();
const petController = require('../Controller/petController');

// เพิ่มสัตว์เลี้ยง
router.post('/add', petController.createPet);

// ดึงทั้งหมด
router.get('/', petController.getAllPets);

// ดึงตาม ID
router.get('/:id', petController.getPetById);
 
module.exports = router;
