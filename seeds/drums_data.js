const { Drums } = require("../models");

const drumsdata = [
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
  {
    gear_type: "Cymbal Set",
    model: "Zildjian K Custom Dark Cymbal Set - 14/16/18/20 inch",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-4e28a20fa32d59e2__hmac-1bbc46f47b049a8a245490610c893e6ec8f167e6/images/items/750/KCD900-large.jpg.auto.webp",
    description:
      "4-piece Zildjian K Custom Dark Cymbal Pack with 14 inch Hi-hat Pair, 16 inch Crash, 18 inch Crash, and 20 inch Ride",
    // genre: 'Rock, Hip-Hop, Country, Alternative Rock, Punk Rock, Reggae',
    budget: "$$$$",
  },
  {
    gear_type: "Cymbal Set",
    model:
      "Zildjian A Cymbal Set - 14/16/21 inch - with Free 18 inch Medium Thin Crash",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-7d8da258a9f85fb8__hmac-41ecd882ecb09a25394ba226b7a8910bae78dd92/images/items/750/A391-large.jpg.auto.webp",
    description:
      "A Zildjian Cymbal Pack with 14 inch A New Beat Hi-hats, a 16 inch A Medium Thin Crash, and a 21 inch A Sweet Ride, Plus a Bonus 18 inch A Medium Thin Crash",
    // genre: 'Rock, Metal, Country, Alternative Rock, Punk Rock',
    budget: "$$$$",
  },
  {
    gear_type: "Cymbal Set",
    model:
      "Meinl Cymbals Classics Custom Dark Set - 14/16/20 inch - with Free 18 inch Crash",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-5fc6505289d4d575__hmac-10e7f50703d6558e31245de62d59774bcf273652/images/items/750/CCD460-18-large.jpg.auto.webp",
    description:
      "4-piece Cymbal Box Set with 14 inch Hi-hats, 16 inch Crash, 20 inch Ride, and Bonus 18 inch Crash",
    // genre: 'Rock, Metal, Country, Alternative Rock, Punk Rock',
    budget: "$$$$",
  },
  {
    gear_type: "Cymbal Set",
    model:
      "Sabian SBR Performance Cymbal Set - 14/16/20 inch - with Free 10 inch Splash",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-c48ca61f880e771e__hmac-235bb07348395daaaf2d22493e08d83d69a780b0/images/items/750/SBR5003G-large.jpg.auto.webp",
    description:
      "Cymbal Pack with 14 inch Hi-hats, 16 inch Crash, 20 inch Ride, and FREE 10 inch Splash",
    // genre: 'Rock, Hip-Hop, Metal, Country, Alternative Rock, Punk Rock, Reggae',
    budget: "$$",
  },
  {
    gear_type: "Cymbal Set",
    model: "Wuhan 457 Rock Cymbal Set - 14/16/20-inch - Free 12-inch China",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-0ad192c9d8ac9c12__hmac-80636f7531aa99256e30d3ecc9b8baa76a269df4/images/items/750/457ROCKCH-large.jpg.auto.webp",
    description:
      "4-piece Brass Cymbal Set with 14 inch Hi-hats, 16 inch Crash, 20 inch Ride, and 12 inch China - Brilliant",
    // genre: 'Rock, Hip-Hop, Metal, Country, Alternative Rock, Punk Rock, Reggae',
    budget: "$$",
  },
  {
    gear_type: "Cymbal Set",
    model:
      "Paiste PST 7 Universal Cymbal Set - 14/18/20 inch - with Free 16 inch Crash",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-c3bede4fa2f27a81__hmac-67258d373c0d8bb99007edd6b1ed74462266e062/images/items/750/PST7USET16-large.jpg.auto.webp",
    description:
      "CuSn8 Bronze Cymbal Pack with 14 inch Hi-hats, 18 inch Crash, 20 inch Ride, and FREE 16 inch Crash",
    // genre: 'Rock, Hip-Hop, Country, Alternative Rock, Punk Rock, Reggae',
    budget: "$$$$",
  },
  {
    gear_type: "Cymbal Set",
    model:
      "Meinl Cymbals Ultimate Set - 8/10/14/14/14/16/18/20 inch - with Free 16 inch Trash Crash",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-07a1afca10cd09b9__hmac-235e90c4a64993ade7604d04d911ba34374b4449/images/items/750/HCS-SCS1-large.jpg.auto.webp",
    description:
      "9-piece Cymbal Pack with 8 inch Bell, 10 inch Splash, 14 inch Hi-hats (Pair), 14/16/18 inch Crashes, 14 inch China, 16 inch Trash Crash, and 20 inch Ride",
    // genre: 'Rock, Metal, Alternative Rock',
    budget: "$$$$",
  },
  {
    gear_type: "Cymbal Set",
    model: "Paiste PST X DJs Cymbal Set - 12/12/12 inch",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-980766682b8d70d3__hmac-231fede8974e9bab98ebd478281ff9af47cf87c8/images/closeup/750-PSTXDJSet_detail1.jpg.auto.webp",
    description:
      "3-piece B8 Bronze FX Cymbal Set with 12 inch Crash, 12 inch Ride, and 12 inch Hi-hats (Pair)",
    // genre: 'Hip-Hop, Reggae',
    budget: "$$",
  },
];

const seedDrums = () => Drums.bulkCreate(drumsdata);

module.exports = seedDrums;
