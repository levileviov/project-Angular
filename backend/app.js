const express = require('express');
const cors = require('cors');
require('./sqlConnect');
const signup = require('./services/signup');
const login = require('./services/login');
const tasks = require('./services/tasks');
const products = require('./services/products');
const customers = require('./services/customers');
const contacts = require('./services/contacts');
const session = require('express-session');

const app = express();



// import express from 'express';
// import cors from 'cors';
// import './sqlConnect';
// import { signup } from './services/signup';
// import { getLoginStatus, googleLogin, login, logout } from './services/login';
// import { addTask, changeTaskLevel, changeTaskStatus, getCounterTasks, getTask, getTasks, removeTask, restoreTask, updateTask } from './services/tasks';
// import { addProduct, getCartProducts, getProduct, getProducts, removeProduct, restoreProduct, updateProduct } from './services/products';
// import { addContact, getContact, getContacts, removeContact, restoreContact, updateContact } from './services/contacts';
// import { addCustomer, getCustomer, getCustomers, removeCustomer, restoreCustomer, updateCustomer } from './services/customers';
// const session = require('express-session');

// const app = express();

// const unGuards = [
//     '/login',
//     '/logout',
//     '/signup',
// ];

app.use(session({
    secret: 'my-secret',
    name: 'mySession',
    resave: false,
    saveUninitialized: false,
}));

app.use(cors({
    origin: true,
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept',
}));

app.use(express.json());

// // פונקצית ביניים הבודקת את ההרשאות באופן גורף - לפני שהיא ניגשת בכלל לפונקציות
// app.use((req, res, next) => {
//     if (unGuards.includes(req.url) || req.session.user) {
//         next();
//     } else {
//         res.sendStatus(401);
//     }
// });

if (process.env.NODE_ENV == 'development') {
    app.listen(3000, () => {
        console.log('listening on 3000');
    });
} else {
    app.listen(() => {
        console.log('listening...');
    });
}

// app.use((req, res, next) => {
//     console.log(req.method);
//     console.log(req.url);
//     setTimeout(next, 1000);
// });

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/users/:userId', (req, res) => {
    res.send({
        params: req.params,
        query: req.query,
    });
});

function authGurd(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}
// app.get('/login', getLoginStatus);
// app.get('/logout', logout);
// app.post('/signup',  signup);
// app.post('/login', login);
// app.post('/googleLogin', googleLogin);


// app.get('/tasks', authGurd, getTasks);
// app.get('/tasks/counter', authGurd, getCounterTasks);
// app.get('/task/:id', authGurd, getTask);
// app.post('/tasks', authGurd, addTask);
// app.put('/tasks/:id', authGurd, updateTask);
// app.put('/tasks/:taskId/status/:newStatus', authGurd, changeTaskStatus);
// app.put('/tasks/:taskId/level/:newLevel', authGurd, changeTaskLevel);
// app.put('/tasks/restore/:id', authGurd, restoreTask);
// app.delete('/tasks/:id', authGurd, removeTask);

// app.get('/products', authGurd,  getProducts);
// app.post('/products/cart', authGurd,  getCartProducts);
// app.get('/product/:id', authGurd,  getProduct);
// app.post('/products', authGurd,  addProduct);
// app.put('/products/:id', authGurd,  updateProduct);
// app.put('/products/restore/:id', authGurd, restoreProduct);
// app.delete('/products/:id', authGurd,  removeProduct);

app.get('/login', login.getLoginStatus);
app.get('/logout', login.logout);
app.post('/signup', signup.signup);
app.post('/login', login.login);
app.post('/googleLogin', login.googleLogin);

app.get('/tasks', authGurd, tasks.getTasks);
app.get('/tasks/counter', authGurd, tasks.getCounterTasks);
app.get('/task/:id', authGurd, tasks.getTask);
app.post('/tasks', authGurd, tasks.addTask);
app.put('/tasks/:id', authGurd, tasks.updateTask);
app.put('/tasks/:taskId/status/:newStatus', authGurd, tasks.changeTaskStatus);
app.put('/tasks/:taskId/level/:newLevel', authGurd, tasks.changeTaskLevel);
app.put('/tasks/restore/:id', authGurd, tasks.restoreTask);
app.delete('/tasks/:id', authGurd, tasks.removeTask);

app.get('/products', authGurd, products.getProducts);
app.post('/products/cart', authGurd, products.getCartProducts);
app.get('/product/:id', authGurd, products.getProduct);
app.post('/products', authGurd, products.addProduct);
app.put('/products/:id', authGurd, products.updateProduct);
app.put('/products/restore/:id', authGurd, products.restoreProduct);
app.delete('/products/:id', authGurd, products.removeProduct);


// app.get('/customers', authGurd, getCustomers);
// app.get('/customer/:id', authGurd, getCustomer);
// app.post('/customers', authGurd, addCustomer);
// app.put('/customers/:id', authGurd, updateCustomer);
// app.put('/customers/restore/:id', authGurd, restoreCustomer);
// app.delete('/customers/:id', authGurd, removeCustomer);

// app.get('/contacts', authGurd, getContacts);
// app.get('/contact/:id', authGurd, getContact);
// app.post('/contacts', authGurd, addContact);
// app.put('/contacts/:id', authGurd, updateContact);
// app.put('/contacts/restore/:id', authGurd, restoreContact);
// app.delete('/contacts/:id', authGurd, removeContact);

app.get('/customers', authGurd, customers.getCustomers);
app.get('/customer/:id', authGurd, customers.getCustomer);
app.post('/customers', authGurd, customers.addCustomer);
app.put('/customers/:id', authGurd, customers.updateCustomer);
app.put('/customers/restore/:id', authGurd, customers.restoreCustomer);
app.delete('/customers/:id', authGurd, customers.removeCustomer);

app.get('/contacts', authGurd, contacts.getContacts);
app.get('/contact/:id', authGurd, contacts.getContact);
app.post('/contacts', authGurd, contacts.addContact);
app.put('/contacts/:id', authGurd, contacts.updateContact);
app.put('/contacts/restore/:id', authGurd, contacts.restoreContact);
app.delete('/contacts/:id', authGurd, contacts.removeContact);