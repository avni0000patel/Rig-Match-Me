const { Dpeds } = require("../models");

const dpedsdata = [
  {
    gear_type: "Drum Pedal",
    model: "DW DWCP3000 3000 Series Single Bass Drum Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-84a5c6d7106efc10__hmac-1d1a01cbe5a373fca359359de5b6b33edf270537/images/items/750/DWCP3000-large.jpg.auto.webp",
    description: "Bass Drum Pedal with 2-way Beater",
    // genre: 'Rock, Hip-Hop, Country, Alternative Rock, Punk Rock, Reggae',
    budget: "$$",
  },
  {
    gear_type: "Drum Pedal",
    model: "Tama HP200P Iron Cobra 200 Power Glide Single Bass Drum Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-f51649950e956138__hmac-56899f6f8ba677bdd2b3614b255d898d887848f7/images/items/750/HP200P-large.jpg.auto.webp",
    description:
      "Kick Drum Pedal with Spring Tight and Single-chain Power Glide Cam",
    // genre: 'Rock, Hip-Hop, Country, Alternative Rock, Punk Rock, Reggae',
    budget: "$",
  },
  {
    gear_type: "Drum Pedal",
    model: "Pearl P2050C Eliminator Redline Chain Drive Single Bass Drum Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-30f8e3c0220e0732__hmac-ee5c7ea10878cb79b2cdc8a9504efe40ec2631fc/images/items/750/P2050C-large.jpg.auto.webp",
    description:
      "Bass Pedal with Chain Drives, 4 Interchangeable Cams, NiNja Axle Bearings, and QuadBeater",
    // genre: 'Rock, Hip-Hop, Country, Alternative Rock, Punk Rock, Reggae',
    budget: "$$",
  },
  {
    gear_type: "Drum Pedal",
    model: "Pearl P932 Longboard Double Bass Drum Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-43b093918e36552c__hmac-e8634f8e3197157fc44cba8e65273498d2330281/images/items/750/P932-large.jpg.auto.webp",
    description:
      "Single-chain Drive Double Kick Pedal with Infinitely Adjustable Beater Angle, PowerShifter Longboard, and Dual Surface Beater",
    // genre: 'Rock, Metal, Punk Rock',
    budget: "$$$",
  },
  {
    gear_type: "Drum Pedal",
    model: "Roland RDH-102A Double Bass Drum Pedal with Noise Eater",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-34ab22126ba24d96__hmac-296ad98165f7e4244e30e7e0a21f8e865429216b/images/items/750/RDH102A-large.jpg.auto.webp",
    description:
      "Dual-chain Double Bass Drum Pedal with Self-aligning Beaters and Noise Eater Base",
    // genre: 'Rock, Metal, Punk Rock',
    budget: "$$$$",
  },
  {
    gear_type: "Drum Pedal",
    model: "Yamaha DFP-9D FP 9 Series Direct Drive Double Bass Drum Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-ccee0c44ed06688e__hmac-263c9abb698a52728c145ca615e44c45c17127b1/images/items/750/DFP-9D-large.jpg.auto.webp",
    description:
      "Direct-drive Double Bass Pedal with Longboard, Adjustable Link, and Carry Case",
    // genre: 'Rock, Metal, Punk Rock',
    budget: "$$$$",
  },
];

const seedDpeds = () => Dpeds.bulkCreate(dpedsdata);

module.exports = seedDpeds;
