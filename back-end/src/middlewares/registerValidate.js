const registerValidate = (email, password, name) => {
if (!email || !password) {
const e = new Error('All fields must be filled');
e.name = 'ValidationError';
throw e;
}
const regex = /\S+@\S+\.\S+/;
if (!regex.test(email)) {
const e = new Error('Incorrect email or password');
e.name = 'NotFoundError';
throw e;
}
if (password.length < 6) {
const e = new Error('Password must be at least 6 characters long');
e.name = 'NotFoundError';
throw e;
}

if (name.length < 12) {
const e = new Error('Name must be at least 12 characters long');
e.name = 'NotFoundError';
throw e;
}
};

module.exports = registerValidate;
