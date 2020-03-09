const express = require('express');
const router = express.Router();
const { Admins } = require('../../models/');

router.get('/', async (req, res) => {
  res.json(await Admins.all());
});

//this route is used to create a new admin. The body must consist of userName and userPassword.
router.post('/', async (req, res) => {
  await Admins.newAdmin(req.body.userName, req.body.userPassword);
});

module.exports = router;
