var express = require('express');

var db = require('../config/connection');

var router = express.Router();

router.get('/api/animals', function (req, res) {
    db.query('SELECT * FROM animals;', function (err, results) {
        if (err) res.status(500).send(err);
        res.json(results);
    });
});

router.get('/api/animals/:id', function (req, res) {
    db.query('SELECT * FROM animals WHERE ?;', { id: req.params.id }, function (err, results) {
        if (err) res.status(500).send(err);
        res.json(results);
    });
});

router.post('/api/animals', function (req, res) {
    db.query('INSERT INTO animals SET ?;', req.body, function (err, results) {
        if (err) res.status(500).send(err);
        db.query('SELECT * FROM animals', function(err, results) {
            if (err) res.status(500).send(err);
            res.json(results);
        });
    });
});

router.put('/api/animals/:id', function (req, res) {
    db.query('UPDATE animals SET ? WHERE ?;', [req.body, { id: req.params.id }], function (err, results) {
        if (err) res.status(500).send(err);
        db.query('SELECT * FROM animals', function(err, results) {
            if (err) res.status(500).send(err);
            res.json(results);
        });
    });
});

router.delete('/api/animals/:id', function (req, res) {
    db.query('DELETE FROM animals WHERE ?;', { id: req.params.id }, function (err) {
        if (err) res.status(500).send(err);
        db.query('SELECT * FROM animals', function(err, results) {
            if (err) res.status(500).send(err);
            res.json(results);
        });
    });
});

module.exports = router;
