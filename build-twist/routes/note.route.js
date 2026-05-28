import express from 'express';

const route = express.Router();

// ---- Create note route ----
route.post('/notes', (req, res) => {

});

// ---- Read note route ----
route.get('/notes', (req, res) => {

});

// ---- Update note route ----
route.patch('/notes/:id', (req, res) => {

});

// ---- Delete note route ----
route.delete('/notes/:id', (req, res) => {

});

export default route;