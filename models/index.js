const Genre = require('./Genre');
const User = require('./User');
const Instrument = require('./Instrument');
const Rig = require('./Rig');

User.hasMany(Genre, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Instrument, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Rig, {
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

Rig.belongsTo(User, {
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

Genre.belongsToMany(Instrument, {
    through: 'instrumentGenre',
    as: 'instruments',
    foreignKey: 'genre_id',
    onDelete: 'CASCADE'
});

Instrument.belongsToMany(Genre, {
    through: 'instrumentGenre',
    as: 'genres',
    foreignKey: 'instrument_id',
    onDelete: 'CASCADE'
})

module.exports = { Genre, User, Instrument, Rig };
