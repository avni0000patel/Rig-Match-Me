const Genre = require("./genre");
const User = require("./user");
const Instrument = require("./instrument");
const Rig = require("./rig");
const Instrument_Genre = require("./instrument_genre");

const G_amp_Genre = require("./g_amp_genre");
const G_fx_Genre = require("./g_fx_genre");
const B_amp_Genre = require("./b_amp_genre");
const B_fx_Genre = require("./b_fx_genre");
const D_peds_Genre = require("./d_peds_genre");
const D_cymb_Genre = require("./d_cymb_genre");

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
  onDelete: "CASCADE",
});

Instrument.belongsToMany(Genre, {
  through: "Instrument_Genre",
  onDelete: "CASCADE",
});

Genre.belongsToMany(Gamp, {
  through: "Gamp_Genre",
  onDelete: "CASCADE",
});

Gamp.belongsToMany(Genre, {
  through: "Gamp_Genre",
  onDelete: "CASCADE",
});

Genre.belongsToMany(Gfx, {
  through: "Gfx_Genre",
  onDelete: "CASCADE",
});

Gfx.belongsToMany(Genre, {
  through: "Gfx_Genre",
  onDelete: "CASCADE",
});

Genre.belongsToMany(Bamp, {
  through: "Bamp_Genre",
  onDelete: "CASCADE",
});

Bamp.belongsToMany(Genre, {
  through: "Bamp_Genre",
  onDelete: "CASCADE",
});

Genre.belongsToMany(Bfx, {
  through: "Bfx_Genre",
  onDelete: "CASCADE",
});

Bfx.belongsToMany(Genre, {
  through: "Bfx_Genre",
  onDelete: "CASCADE",
});

Genre.belongsToMany(Dpeds, {
  through: "Dpeds_Genre",
  onDelete: "CASCADE",
});

Dpeds.belongsToMany(Genre, {
  through: "Dpeds_Genre",
  onDelete: "CASCADE",
});

Genre.belongsToMany(Dcymb, {
  through: "Dcymb_Genre",
  onDelete: "CASCADE",
});

Dcymb.belongsToMany(Genre, {
  through: "Dcymb_Genre",
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
  G_amp_Genre,
  G_fx_Genre,
  B_amp_Genre,
  B_fx_Genre,
  D_peds_Genre,
  D_cymb_Genre,
  Gamp,
  Gfx,
  Bamp,
  Bfx,
  Dpeds,
  Dcymb,
};
