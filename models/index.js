const Genre = require('./Genre');
const User = require('./User');
const Instrument = require('./Instrument');

User.hasMany(Genre, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Instrument, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Genre.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Instrument.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Genre.hasMany(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Instrument.hasMany(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Genre.hasMany(Instrument, {
    foreignKey: 'genre_id',
    onDelete: 'CASCADE'
});

Instrument.belongsTo(Genre, {
    foreignKey: 'genre_id',
    onDelete: 'CASCADE'
})

module.exports = { Genre, User, Instrument };