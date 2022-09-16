const { Instrument } = require("../models");

const instrumentdata = [
  {
    instrument_type: "Electric Guitar",
    model: "Squier Bullet Strat HT",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-61cf53637d5ec413__hmac-e98af723307ad0283fe17253070e05ba349b3c75/images/closeup/750-BulletSGIHT_front.jpg.auto.webp",
    description: "6 string guitar with 3 single coil pickups",
    // genre: 'Rock, Country, Alternative Rock, Punk Rock, Reggae',
    budget: "$",
  },
  {
    instrument_type: "Electric Guitar",
    model: "Ibanez Gio GRX70QA",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-8c2a66c4bdaaf18f__hmac-245d84621a4ba592cc2706bd8ab585d56fd3e002/images/closeup/750-GRX70QATKS_front.jpg.auto.webp",
    description:
      "6 string guitar with 2 humbucker pickups and a 1 single coil pickup",
    // genre: 'Rock, Hip-Hop, Metal, Country, Alternative Rock, Punk Rock, Reggae',
    budget: "$",
  },
  {
    instrument_type: "Electric Guitar",
    model: "Jackson Dinky Arch Top JS22 DKA",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-fcd0d138294ac204__hmac-dd9321a9c31ced4be264abd7a27625f45a111ebe/images/closeup/750-JS22DKAAMBL_front.jpg.auto.webp",
    description: "6 string guitar with 2 humbucker pickups",
    // genre: 'Rock, Hip-Hop, Metal',
    budget: "$",
  },
  {
    instrument_type: "Electric Guitar",
    model: "Squier Classic Vibe 50s Telecaster",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-1a06ff234796de23__hmac-545908e8a8c07e9a11e2c54953b5579abec3bb66/images/closeup/750-TeleCV50BSB_front.jpg.auto.webp",
    description: "6 string guitar with 2 single coil pickups",
    // genre: 'Rock, Country, Alternative Rock, Punk Rock, Reggae',
    budget: "$$",
  },
  {
    instrument_type: "Electric Guitar",
    model: "Squier Classic Vibe 60s Jazzmaster",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-e71cd652efa2500e__hmac-0c44047427386d1ef69536b09ddffb2820d3fcea/images/closeup/750-JazzCV60SB_front.jpg.auto.webp",
    description: "6 string guitar with 2 single coil pickups",
    // genre: 'Rock, Hip-Hop, Country, Alternative Rock, Reggae',
    budget: "$$",
  },
  {
    instrument_type: "Electric Guitar",
    model: "Squier Classic Vibe 70s Jaguar",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-590dfac5c144705b__hmac-8883d24fa8d2f311efd9c740ac3a588be6227dc0/images/guitars/JagCV703TS/ICSL21004324/ICSL21004324-front-large.jpg.auto.webp",
    description: "6 string guitar with 2 single coil pickups",
    // genre: 'Rock, Hip-Hop, Country, Alternative Rock, Reggae',
    budget: "$$",
  },
  {
    instrument_type: "Electric Guitar",
    model: "PRS SE Custom 24-08",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-28dbfb98fce04cb7__hmac-eaa99528bacc07fe6348141fb60c4625f8706dfd/images/guitars/SECU2408VB/CTIE11607/CTIE11607-front-large.jpg.auto.webp",
    description:
      "6 string guitar with 2 humbucker pickups and coil tap functionality",
    // genre: 'Rock, Hip-Hop, Metal, Country, Alternative Rock, Reggae',
    budget: "$$$",
  },
  {
    instrument_type: "Electric Guitar",
    model: "Epiphone 1961 Les Paul SG Standard",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-e2ba2aab3c2faa12__hmac-4c9c75b971390a8ec12f552273bb014caba641f6/images/guitars/SG61LPSACW/21081538395/21081538395-front-large.jpg.auto.webp",
    description: "6 string guitar with 2 burstbucker pickups",
    // genre: 'Rock, Metal, Country, Punk Rock, Reggae',
    budget: "$$$",
  },
  {
    instrument_type: "Electric Guitar",
    model: "ESP LTD Viper-1000",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-170ff796866653c3__hmac-33a10142673aeddcb181554d881ef113abfa6c27/images/guitars/LVP1000ETQSBCS/IW20010480/IW20010480-front-large.jpg.auto.webp",
    description:
      "6 string guitar with 2 humbucker pickups and coil tap functionality",
    // genre: 'Metal, Punk Rock,',
    budget: "$$$",
  },
  {
    instrument_type: "Electric Guitar",
    model: "Ernie Ball Music Man",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-2acdcd96de92bc72__hmac-087fd52ce744bc581ff8ee826011579e95927b3b/images/closeup/750-Maj6AC_front.jpg.auto.webp",
    description:
      "6 string guitar with 2 humbucker pickups with push/pull volume and tone know functionality",
    // genre: 'Rock, Metal',
    budget: "$$$$",
  },
  {
    instrument_type: "Bass Guitar",
    model: "Jackson Spectra JS2",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-49f6525ea7271893__hmac-20d3aef3977eb334d0f8fb96e9be096071cabff6/images/closeup/750-JS2MB_front.jpg.auto.webp",
    description: "4 string bass guitar with 2 single coil pickups",
    // genre: 'Rock, Hip-Hop, Country, Alternative Rock, Punk Rock',
    budget: "$",
  },
  {
    instrument_type: "Bass Guitar",
    model: "Ibanez Gio GSR100EX",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-d28a520e3595525a__hmac-3668b8f185bfae9807516334b05fd855ccfd59e8/images/closeup/750-GSR100EXMOL_front.jpg.auto.webp",
    description: "4 string bass guitar with 1 humbucker pickup",
    // genre: 'Rock, Metal, Alternative Rock, Punk Rock, Reggae',
    budget: "$",
  },
  {
    instrument_type: "Bass Guitar",
    model: "Jackson Concert Bass JS3",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-ebbb478ad61753c0__hmac-d0493e8b8c596f98d266c53244f5d804af9c8610/images/guitars/JS3CBASBK/CWJ2177428/CWJ2177428-front-large.jpg.auto.webp",
    description:
      "4 string bass guitar with 2 active high output humbucker pickups",
    // genre: 'Rock, Hip-Hop, Metal, Alternative Rock, Punk Rock',
    budget: "$$",
  },
  {
    instrument_type: "Bass Guitar",
    model: "Yamaha TRBX305",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-59e3c7f4d0c3230c__hmac-59ab4bef5126da9f93a556f95dc8ebfb722c06f4/images/closeup/750-TRBX305WH_front.jpg.auto.webp",
    description: "5 string bass guitar with 2 ceramic dual coil active pickups",
    // genre: 'Rock, Hip-Hop, Metal',
    budget: "$$",
  },
  {
    instrument_type: "Bass Guitar",
    model: "Squier Classic Vibe 60s Mustang",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-5593f75e543bafcb__hmac-84407f5fd2b9fb4cee67cb7eaf28d6cd3fd4bc2a/images/closeup/750-MustBaCV60LSG_front.jpg.auto.webp",
    description: "4 string bass guitar with 1 split single coil pickup",
    // genre: 'Rock, Hip-Hop, Country, Alternative Rock, Punk Rock, Reggae',
    budget: "$$",
  },
  {
    instrument_type: "Bass Guitar",
    model: "Epiphone Embassy Bass",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-6f28f890d4dd1011__hmac-9ad06f553ea700eba906afc88d4b6a73eb24f50c/images/guitars/EBEMGPHNH/21082354511/21082354511-front-large.jpg.auto.webp",
    description: "4 string bass guitar with 2 humbucker pickups",
    // genre: 'Rock, Country, Alternative Rock',
    budget: "$$$",
  },
  {
    instrument_type: "Bass Guitar",
    model: "Fender Player Jazz Bass",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-f90c127a27cb875a__hmac-3d311d1ba1e5e1ff9ddb756824ca5f9ae6dcd3c0/images/guitars/JBassPMTP/MX22196512/MX22196512-front-large.jpg.auto.webp",
    description: "4 string bass guitar with 2 jazz single coil pickups",
    // genre: 'Rock, Hip-Hop, Country, Alternative Rock, Punk Rock, Reggae',
    budget: "$$$",
  },
  {
    instrument_type: "Bass Guitar",
    model: "Schecter Stiletto Studio 5",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-df93f7ff99d9fc7b__hmac-d7430374b146535a11cf8f48ac512506290e9b30/images/guitars/STST5SBS/W22051328/W22051328-front-large.jpg.auto.webp",
    description: "5 string bass guitar with 2 EMG humbucker pickups",
    // genre: 'Hip-Hop, Metal, Reggae',
    budget: "$$$",
  },
  {
    instrument_type: "Bass Guitar",
    model: "Warwick RockBass Corvette $$ 5-string",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-d6f80f8097393bec__hmac-eb5e3f7a395c801f84ae0c89c0605018b7d6902e/images/items/750/CorvDB5RNBk-large.jpg.auto.webp",
    description: "5 string bass guitar with 2 passive humbucker pickups",
    // genre: 'Rock, Hip-Hop, Metal, Country, Alternative Rock, Reggae',
    budget: "$$$$",
  },
  {
    instrument_type: "Bass Guitar",
    model: "Spector NS Ethos",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-ae263d38cd5c0d64__hmac-8032470c00fba6a97cedcbf6cdc66e17b60a5083/images/guitars/NSEth4SFBG/W220209/W220209-front-large.jpg.auto.webp",
    description: "5 string bass guitar with 2 Aguilar humbucker pickups",
    // genre: 'Rock, Hip-Hop, Metal, Country, Alternative Rock, Reggae',
    budget: "$$$$",
  },
  {
    instrument_type: "Drums",
    model: "Ludwig Questlove Pocket Kit",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-a90197f7cfebf02d__hmac-b4d65c3ad217f6b81ee73a4b3a98a41fb95a93ae/images/items/750/PocketKit-BS-large.jpg.auto.webp",
    description: "4 piece drum set complete with cymbals and hardware",
    // genre: 'Hip-Hop, Punk Rock, Reggae',
    budget: "$",
  },
  {
    instrument_type: "Drums",
    model: "PDP Player 5-piece Complete Junior Drum Set",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-ce3d71c94dfb6efc__hmac-195c3ab01181991788808840d58712894535b858/images/items/750/PDJR18KTCB-large.jpg.auto.webp",
    description: "5 piece drum set complete with cymbals and hardware",
    // genre: 'Rock, Hip-Hop, Country, Alternative Rock, Punk Rock, Reggae',
    budget: "$$",
  },
  {
    instrument_type: "Drums",
    model: "Ludwig Accent 5-piece Complete Drum Set",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-2af271e815c9820f__hmac-151f442a66582334a97f820088d6a7565609276f/images/items/750/LC19015-large.jpg.auto.webp",
    description: "5 piece drum set complete with cymbals and hardware",
    // genre: 'Rock, Hip-Hop, Metal, Country, Alternative Rock, Punk Rock, Reggae',
    budget: "$$",
  },
  {
    instrument_type: "Drums",
    model: "Tama Imperialstar IE52C 5-piece Complete Drum Set",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-bbe1d626c58858cc__hmac-5e627cbc79df16d3dee4a6655c7853700e2c5ed5/images/items/750/IE52CDB-large.jpg.auto.webp",
    description: "5 piece drum set complete with cymbals and hardware",
    // genre: 'Rock, Hip-Hop, Metal, Country, Alternative Rock, Punk Rock, Reggae',
    budget: "$$$",
  },
  {
    instrument_type: "Drums",
    model: "Tama Imperialstar IE62C 6-piece Complete Drum Set",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-5be74ac11c0b76fe__hmac-13e03a67476e09f3af4b33a860c4d7d51994912e/images/items/750/IE62CCTW-large.jpg.auto.webp",
    description: "6 piece drum set complete with cymbals and hardware",
    // genre: 'Rock, Metal',
    budget: "$$$",
  },
];
console.log(instrumentdata);

const seedInstruments = () => Instrument.bulkCreate(instrumentdata);
console.log(seedInstruments);

module.exports = seedInstruments;
