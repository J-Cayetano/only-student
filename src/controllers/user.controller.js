const db = require("../models");
const User = db.user_account;
const datatable = require(`sequelize-datatables`);
const { Op } = require("sequelize");



// Create and Save an Instance
exports.create = async (req, res) => {

    User.create(req.body).then((data) => {
        res.send({
            error: false,
            data: data,
            message: "User is created successfully."
        });
    }).catch((err) => {
        res.status(500).send({
            error: true,
            data: [],
            message: err.errors.map((e) => e.message)
        });
    });
};

// Retrieve all Instances
exports.findAll = async (req, res) => {

    User.findAll({ where: { user_accountType: { [Op.ne]: "admin" } } }).then((data) => {
        res.send({
            error: false,
            data: data,
            message: "Users are retrieved successfully."
        });
    }).catch((err) => {
        res.status(500).send({
            error: true,
            data: [],
            message: err.errors.map((e) => e.message)
        });
    });
};

// Find an Instance
exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findByPk(id).then((data) => {
        res.send({
            error: false,
            data: data,
            message: `User with ${id} retrieved successfully.`
        });
    }).catch((err) => {
        res.status(500).send({
            error: true,
            data: [],
            message: err.errors.map((e) => e.message)
        });
    });
};

// Update an Instance
exports.update = async (req, res) => {
    res.send("Here at update one " + req.params.id);
};

// Delete an Instance
exports.delete = (req, res) => {
    res.send("Here at delete one " + req.params.id);
};