const { Bamp } = require("../models");

const bampdata = [
  {
    gear_type: "Bass Amplifier",
    model: "Fender Rumble 40 1x10 40-watt Bass Combo Amp",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-eae508c92808d82d__hmac-d727a4fbe2bb755794083e05bab1fb126d84d1e8/images/items/750/Rum40-large.jpg.auto.webp",
    description:
      "1 x 10 inch 40-watt Bass Combo with 4-band EQ, Three Voicing Options, XLR Direct Out, and Footswitchable Overdrive",
    // genre: 'Rock, Metal, Country, Alternative Rock, Punk Rock',
    budget: "$$",
  },
  {
    gear_type: "Bass Amplifier",
    model: "Orange Crush Bass 50 1x12 50-watt Bass Combo Amp",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-0efe1ab98ffb98f8__hmac-a105593ef54f9825e5cf23984db11c1c40d3ec46/images/items/750/CB50Org-large.jpg.auto.webp",
    description:
      "50-watt 1x12 inch Bass Combo Amplifier with Active EQ and Parametric Mid Control",
    // genre: 'Rock, Metal, Country, Punk Rock',
    budget: "$$$",
  },
  {
    gear_type: "Bass Amplifier",
    model: "Boss Katana-110 Bass 1 x 10-inch 60-watt Combo Amp",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-a9048940ddb794f9__hmac-5d06f47b6ba6701cc10d79e0cde96d110f635868/images/items/750/Kata110Bass-large.jpg.auto.webp",
    description:
      "60/1W 1x10 inch Bass Combo Amplifier with 3 Amp Voicings, Shape Switch, 4 Effects Sections, 4-band EQ, Blend Control, 6 User Presets, Power Control, Cab-emulated Headphone/Record Output, and USB",
    // genre: 'Rock, Hip-Hop, Metal, Country, Alternative Rock, Punk Rock, Reggae',
    budget: "$$$",
  },
  {
    gear_type: "Bass Amplifier",
    model: "Ampeg Rocket Bass RB-110 1x10 inch 50-watt Bass Combo Amp",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-957ee0760a157272__hmac-20be788ca468e9933080b6d3e2359083b32f0cec/images/items/750/RocketB110-large.jpg.auto.webp",
    description:
      "50W 1 x 10 inch Bass Combo Amplifier with 3-band EQ, 1/8 inch Aux Input, 1/8 inch Headphone Output, 0dB and -15dB 1/4 inch Inputs, and XLR Balanced Output",
    // genre: 'Rock, Hip-Hop, Metal, Country, Alternative Rock, Punk Rock, Reggae',
    budget: "$$",
  },
  {
    gear_type: "Bass Amplifier",
    model: "Hartke HD75 1x12 inch 75-watt Bass Combo Amp",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-a2bf45f316179ca3__hmac-bd784a889f6b3f101b482199b3e18ba1071a0a9b/images/items/750/HD75Combo-large.jpg.auto.webp",
    description:
      "1x12 inch 75W Bass Combo with HyDrive Paper/Aluminum Speaker and 1 inch Tweeter",
    // genre: 'Rock, Hip-Hop, Metal, Country, Alternative Rock, Punk Rock, Reggae',
    budget: "$$$",
  },
];

const seedBamp = () => Bamp.bulkCreate(bampdata);

module.exports = seedBamp;
