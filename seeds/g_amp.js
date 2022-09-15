const { Gamp } = require("../models");

const gampdata = [
  {
    gear_type: "Guitar Amplifier",
    model: "Fender Mustang LT 25 1x8 25-watt Combo Amp",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-f3318f737952092b__hmac-ca04bd96aad095343b47583152af48bc0a3db8de/images/items/750/MustLT25-large.jpg.auto.webp",
    description:
      "25 watt guitar amplifier with an 8 inch speaker, 20 amp models, 25 effects, and 50 presets (30 pre-loaded; 20 easily accessible). The amp also includes USB connectivity for recording to your computer",
    // genre: 'Rock, Hip-Hop, Metal, Country, Alternative Rock, Punk Rock, Reggae',
    budget: "$",
  },
  {
    gear_type: "Guitar Amplifier",
    model: "Fender '65 Deluxe Reverb 1x12 22-watt Tube Combo Amp",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-bbddf2d350a5006f__hmac-2660bdea63e101b6bca7323010e07bcb7743c58f/images/items/750/65DeluxeRev-large.jpg.auto.webp",
    description:
      "22 watt tube guitar amplifier with a 12 inch speaker, 2-band EQ, and built-in reverb and vibrato effects.",
    // genre: 'Rock, Country, Alternative Rock, Punk Rock, Reggae',
    budget: "$$$$",
  },
  {
    gear_type: "Guitar Amplifier",
    model: "Roland JC-40 Jazz Chorus 2x10 40-watt Stereo Combo Amp",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-989b37cf4fcc7b36__hmac-0accd4fc7663b8eab9ff7b3d925d44bcecd4913e/images/items/750/JC40-large.jpg.auto.webp",
    description:
      "40 watt guitar amp with two 10 inch speakers, built-in distortion, vibrato, reverb and chorus effects, and a 3-band EQ",
    // genre: 'Hip-Hop, Country, Reggae',
    budget: "$$$",
  },
  {
    gear_type: "Guitar Amplifier",
    model: "Marshall MG30GFX 30-watt 1x10 Combo Amp with Effects",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-1dc5857f2a43e4b7__hmac-2153f505995195b8fb589475c16ff797aaffa496/images/items/750/MG30GFX-large.jpg.auto.webp",
    description:
      "30 watt guitar amp with a 10 inch speaker, built-in digital effects, and line inputs and outputs for practicing and recording",
    // genre: 'Rock, Hip-Hop, Metal, Country, Alternative Rock, Punk Rock, Reggae',
    budget: "$$",
  },
  {
    gear_type: "Guitar Amplifier",
    model: "EVH 5150 Iconic Series 40-watt 1 x 12-inch Tube Combo Amp",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-290c0145dbb9db98__hmac-c56d8450859672f517fbdfa2ec07309ad68f5538/images/items/750/5150IC40CBK-large.jpg.auto.webp",
    description:
      "40 watt guitar amp with one 12 inch speaker, 3-band EQ, and built in noise gate for high gain drive",
    // genre: 'Rock, Metal, Alternative Rock, Punk Rock',
    budget: "$$$",
  },
  {
    gear_type: "Guitar Amplifier",
    model: "Orange Crush 35RT 1x10 35-watt Combo Amp",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-0d277888ab742708__hmac-96873bfcc425b87a7eda1c007b8595035071211d/images/items/750/Crush35RTOR-large.jpg.auto.webp",
    description:
      "35 watt guitar amp with a 12 inch speaker, built in reverb effect, and a integrated chromatic tuner",
    // genre: 'Rock, Metal, Country, Punk Rock',
    budget: "$$",
  },
  {
    gear_type: "Guitar Amplifier",
    model: "Boss Katana-50 MkII 1 x 12-inch 50-watt Combo Amp",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-b3dcad43e8a8f1e4__hmac-1bef53cb0313baab21cfcb159584e4dfe53a1565/images/items/750/Kata50mk2-large.jpg.auto.webp",
    description:
      "50 watt guitar amp with a 12 inch speaker, 60 digital BOSS effects, accessible from the BOSS Tone Studio, and USB output for recording to your computer",
    // genre: 'Rock, Hip-Hop, Metal, Country, Alternative Rock, Punk Rock, Reggae',
    budget: "$$",
  },
];

const seedGamp = () => Gamp.bulkCreate(gampdata);

module.exports = seedGamp;
