const userValidate = require('./userValidate');

const registerValidate = (email, password, name) => {
    userValidate(email, password);

    if (name.length < 12) {
        const e = new Error('Name must be at least 12 characters long');
        e.name = 'NotFoundError';
        throw e;
    }
};

module.exports = registerValidate;
