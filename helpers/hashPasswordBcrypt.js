const bcrypt = require('bcrypt');

const saltRounds = 5;

export const hashPassword =(password) => {
    bcrypt.hash(password, saltRounds, (err, hash) => hash ? hash : err);
}