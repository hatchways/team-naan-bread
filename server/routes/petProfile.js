const express = require('express');
const protect = require("../middleware/auth");
const router = express.Router();
const {
createPetProfile,
updatePetProfile,
findPetProfilesByOwnerId,
findAllPetProfiles,
} = require('../controllers/petProfile');
const { check, validationResult } = require("express-validator");

router.route('/createPetProfile').post(
    protect, 
    [check('petName').not().isEmpty(),
    check('petType').isString(),
    check('petAge').isNumeric(),
    check('petStatus').isString(),
    (req, res, next) => {
        const errors = validationResult(req);
    
        console.log(errors);
        if (!errors.isEmpty())
          return res.status(400).json({ errors: errors.array() });
        next();
    }],
    createPetProfile);

router.route('/updatePetProfile').post(
    protect,
    [check('petName').not().isEmpty(),
    check('petType').isString(),
    check('petAge').isNumeric(),
    check('petStatus').isString(),
    (req, res, next) => {
        const errors = validationResult(req);
    
        console.log(errors);
        if (!errors.isEmpty())
          return res.status(400).json({ errors: errors.array() });
        next();
    }],
    updatePetProfile);

router.route('/findPetProfilesByOwnerId').post(protect, findPetProfilesByOwnerId);

router.route('/findAllPetProfiles').get(protect, findAllPetProfiles);

module.exports = router;
