const Genre = require("./genre");
const User = require("./user");
const Instrument = require("./instrument");
const Rig = require("./rig");
const Instrument_Genre = require("./instrument_genre");
const Gamp = require("./gamp");
const Gfx = require("./gfx");
const Bamp = require("./bamp");
const Bfx = require("./bfx");
const Dpeds = require("./dpeds");
const Dcymb = require("./dcymb");

User.hasMany(Genre, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Instrument, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Rig, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Genre.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Instrument.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Rig.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Genre.hasMany(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Instrument.hasMany(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Genre.belongsToMany(Instrument, {
  through: "Instrument_Genre",
  //   as: "instruments",
  //   foreignKey: "genre_id",
  onDelete: "CASCADE",
});

Instrument.belongsToMany(Genre, {
  through: "Instrument_Genre",
  //   as: "genres",
  //   foreignKey: "instrument_id",
  onDelete: "CASCADE",
});

Instrument.hasOne(Gamp);

Gamp.belongsTo(Instrument);

Instrument.hasOne(Gfx);

Gfx.belongsTo(Instrument);

Instrument.hasOne(Bamp);

Bamp.belongsTo(Instrument);

Instrument.hasOne(Bfx);

Bfx.belongsTo(Instrument);

Instrument.hasOne(Dpeds);

Dpeds.belongsTo(Instrument);

Instrument.hasOne(Dcymb);

Dcymb.belongsTo(Instrument);

module.exports = {
  Genre,
  User,
  Instrument,
  Rig,
  Instrument_Genre,
  Gamp,
  Gfx,
  Bamp,
  Bfx,
  Dpeds,
  Dcymb,
};
