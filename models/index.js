const Genre = require('./Genre');
const User = require('./User');

User.hasMany(Genre, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Genre.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { Genre, User };