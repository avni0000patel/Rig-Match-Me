const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.get("/contact", (req, res) => {
    res.render('contact');
});

app.post('/send', (req, res) => {
    console.log(req.body);

    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
    </ul
    <h3>Message:</h3>
    <p>${req.body.message}</p>
    `

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'jaquan.cummerata@ethereal.email',
            pass: 'fnkYJqY3gSVq6uu52W'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let info = transporter.sendMail({
        from: '"Jaquan Cummerata " <jaquan.cummerata@ethereal.email>', // sender address
        to: "AlvinKPollard@gmail.com, jdanleano@gmail.com", // list of receivers
        subject: "Hello from NodeMailer", // Subject line
        text: "Hello world?", // plain text body
        html: output // html body
    });

    console.log(info);

    res.render('contact', { msg: 'Email has been sent' });

});


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));
});
