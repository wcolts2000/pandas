const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const knex = require("knex");

const knexConfig = require("./knexfile.js");

const server = express();

// connect to DB
const db = knex(knexConfig.development);

server.use(express.json());
server.use(morgan("short"));
server.use(helmet());

// Sanity Check
server.get("/", (req, res) => {
  res.send("api working");
});

// list pandas
server.get("/api/bears", (req, res) => {
  db('bears')
    .then(bears => {
      res.status(200).json(bears);
    })
    .catch(err => res.status(500).json(err));
});

// add panda
server.post("/api/bears", (req, res) => {
  db("bears")
    .insert(req.body)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => res.status(500).json(err));
});

// delete panda
server.delete('/api/bears/:id', (req,res) => {
  db('bears')
    .where({id: req.params.id})
    .del()
    .then(count => {
      res.status(200).json(count)
    })
    .catch(err => res.status(500).json(err))
})

// update panda
server.put('/api/bears/:id', (req, res) => {
  const changes = req.body;

  db('bears')
    .where({ id: req.params.id})
    .update(changes)
    .then(count => {
      if(count) {
        res.status(200).json(count)
      } else {
        res.status(404).json({message: "Bear not found"})
      }
    })
    .catch(err => res.status(500).json(err))
  })

server.listen(6000, () => console.log("server running on port 6000"));


// ====================+=====
// ====== Luis Version ======
// =====================+====

// const express = require('express');
// const knex = require('knex');

// const knexConfig = require('./knexfile.js');

// const server = express();

// server.use(express.json());

// // connect to the database
// const db = knex(knexConfig.development);

// server.get('/', (req, res) => {
//   res.send('api working');
// });

// // list pandas
// server.get('/api/bears', (req, res) => {
//   db('bears')
//     .then(bears => {
//       res.status(200).json(bears);
//     })
//     .catch(err => res.status(500).json(err));
// });

// server.get('/api/bears/:id', (req, res) => {
//   db('bears')
//     .where({ id: req.params.id })
//     .then(bear => {
//       if (bear) {
//         res.status(200).json(bear);
//       } else {
//         res.status(404).json({ message: 'bear not found' });
//       }
//     });
// });

// // add panda
// server.post('/api/bears', (req, res) => {
//   // db.insert(req.body).into('bears').then().catch()
//   db('bears')
//     .insert(req.body)
//     .then(ids => {
//       db('bears')
//         .where({ id: ids[0] })
//         .then(bear => {
//           res.status(201).json(bear);
//         });
//     })
//     .catch(err => res.status(500).json(err));
// });

// // delete panda
// server.delete('/api/bears/:id', (req, res) => {
//   db('bears')
//     .where({ id: req.params.id })
//     .del()
//     .then(count => {
//       res.status(200).json(count);
//     })
//     .catch(err => res.status(500).json(err));
// });

// server.put('/api/bears/:id', (req, res) => {
//   const changes = req.body;

//   db('bears')
//     .where({ id: req.params.id })
//     .update(changes)
//     .then(count => {
//       if (count) {
//         res.status(200).json(count);
//       } else {
//         res.status(404).json({ message: 'Bear not found' });
//       }
//     })
//     .catch(err => res.status(500).json(err));
// });

// // update panda

// server.listen(6000, () => console.log('server up on 6000'));