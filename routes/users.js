const express = require('express');
const faker = require('@faker-js/faker');

const router = express.Router();

router.get('/users', (req, res) => {
  const count = req.query.count || 10; 
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push({
      name: faker.name.findName(),
      email: faker.internet.email(),
      
      // ...
    });
  }
  res.json(users);
});

module.exports = router;
