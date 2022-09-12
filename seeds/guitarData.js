const { Guitar } = require("../models");

const guitardata = [
  {
    gear_type: "",
    model: "",
    image: "",
    description: "",
    // genre: ,
    budget: "",
  },
  {
    gear_type: "Guitar Amplifier",
    model: "Fender Mustang LT 25 1x8 25-watt Combo Amp",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-f3318f737952092b__hmac-ca04bd96aad095343b47583152af48bc0a3db8de/images/items/750/MustLT25-large.jpg.auto.webp",
    description:
      "25 watt guitar amplifier with an 8 inch speaker, 20 amp models, 25 effects, and 50 presets (30 pre-loaded; 20 easily accessible). The amp also includes USB connectivity for recording to your computer",
    // genre: ,
    budget: "$",
  },
  {
    gear_type: "Guitar Amplifier",
    model: "Fender '65 Deluxe Reverb 1x12 22-watt Tube Combo Amp",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-bbddf2d350a5006f__hmac-2660bdea63e101b6bca7323010e07bcb7743c58f/images/items/750/65DeluxeRev-large.jpg.auto.webp",
    description:
      "22 watt tube guitar amplifier with a 12 inch speaker, 2-band EQ, and built-in reverb and vibrato effects.",
    // genre: ,
    budget: "$$$$",
  },
  {
    gear_type: "Guitar Amplifier",
    model: "Roland JC-40 Jazz Chorus 2x10 40-watt Stereo Combo Amp",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-989b37cf4fcc7b36__hmac-0accd4fc7663b8eab9ff7b3d925d44bcecd4913e/images/items/750/JC40-large.jpg.auto.webp",
    description:
      "40 watt guitar amp with two 10 inch speakers, built-in distortion, vibrato, reverb and chorus effects, and a 3-band EQ",
    // genre: ,
    budget: "$$$",
  },
  {
    gear_type: "Guitar Amplifier",
    model: "Marshall MG30GFX 30-watt 1x10 Combo Amp with Effects",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-1dc5857f2a43e4b7__hmac-2153f505995195b8fb589475c16ff797aaffa496/images/items/750/MG30GFX-large.jpg.auto.webp",
    description:
      "30 watt guitar amp with a 10 inch speaker, built-in digital effects, and line inputs and outputs for practicing and recording",
    // genre: ,
    budget: "$$",
  },
  {
    gear_type: "Guitar Amplifier",
    model: "EVH 5150 Iconic Series 40-watt 1 x 12-inch Tube Combo Amp",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-290c0145dbb9db98__hmac-c56d8450859672f517fbdfa2ec07309ad68f5538/images/items/750/5150IC40CBK-large.jpg.auto.webp",
    description:
      "40 watt guitar amp with one 12 inch speaker, 3-band EQ, and built in noise gate for high gain drive",
    // genre: ,
    budget: "$$$",
  },
  {
    gear_type: "Guitar Amplifier",
    model: "Orange Crush 35RT 1x10 35-watt Combo Amp",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-0d277888ab742708__hmac-96873bfcc425b87a7eda1c007b8595035071211d/images/items/750/Crush35RTOR-large.jpg.auto.webp",
    description:
      "35 watt guitar amp with a 12 inch speaker, built in reverb effect, and a integrated chromatic tuner",
    // genre: ,
    budget: "$$",
  },
  {
    gear_type: "Guitar Amplifier",
    model: "Boss Katana-50 MkII 1 x 12-inch 50-watt Combo Amp",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-b3dcad43e8a8f1e4__hmac-1bef53cb0313baab21cfcb159584e4dfe53a1565/images/items/750/Kata50mk2-large.jpg.auto.webp",
    description:
      "50 watt guitar amp with a 12 inch speaker, 60 digital BOSS effects, accessible from the BOSS Tone Studio, and USB output for recording to your computer",
    // genre: ,
    budget: "$$",
  },
  {
    gear_type: "Guitar Effects",
    model: "Ibanez TS9 Tube Screamer Overdrive Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-a5b2f4b2a4a1bdee__hmac-448fe743b1e64b59010d96e3b7928b606def04fb/images/items/750/TS9-large.jpg.auto.webp",
    description: "Classic stompbox distortion and overdrive effect",
    // genre: ,
    budget: "$",
  },
  {
    gear_type: "Guitar Effects",
    model: "Boss DS-1 Distortion Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-596174c5d7faea32__hmac-5ebe684c6b9952bd623984bd801b757357f7a11c/images/items/750/DS1-large.jpg.auto.webp",
    description:
      "Distortion Effects Pedal with Distortion, Level, and Tone Controls",
    // genre: ,
    budget: "$",
  },
  {
    gear_type: "Guitar Effects",
    model: "Revv G3 - Preamp/Overdrive/Distortion Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-2db5df44dcf31ed6__hmac-ecb68bf2d1cd151b254d04f1f405b1e2c7f85eea/images/items/750/RevvG3-large.jpg.auto.webp",
    description: "Preamp/Overdrive/Distortion Pedal for Electric Guitar",
    // genre: ,
    budget: "$$",
  },
  {
    gear_type: "Guitar Effects",
    model: "Boss CE-2W Waza Craft Chorus Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-868bfec5b8e5070e__hmac-7f051ed8ef1ae7de17852133b08a83cac9c4e29e/images/items/750/CE2W-large.jpg.auto.webp",
    description:
      "Chorus Effects Pedal for Guitar with 3 Modes (Standard, CE-1 Chorus, and CE-1 Vibrato) and Rate and Depth Controls",
    // genre: ,
    budget: "$$",
  },
  {
    gear_type: "Guitar Effects",
    model: "Walrus Audio Julianna Stereo Analog Chorus/Vibrato Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-1fa2283296b07ec2__hmac-c1facd3924c19295fb526a51ded0aaa7e5f9c384/images/items/750/Julianna-large.jpg.auto.webp",
    description: "Stereo Chorus/Vibrato FX Pedal with True Bypass Switching",
    // genre: ,
    budget: "$$",
  },
  {
    gear_type: "Guitar Effects",
    model: "MXR EVH 5150 Chorus Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-9a9a1b1cf6a78017__hmac-b21513b940f90e8fd764079c3f2d6de67a4c74a6/images/items/750/EVH30-large.jpg.auto.webp",
    description:
      "Chorus Guitar Effects Pedal with Volume, Tone, and Intensity Controls, Input and Output Level Switches, Switchable True/Buffered Bypass Operation, and Mono and Stereo Outputs",
    // genre: ,
    budget: "$$",
  },
  {
    gear_type: "Guitar Effects",
    model: "TC Electronic Hall of Fame 2 Reverb Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-4bc43b72422cb0be__hmac-66945b1c0471c493bf518f6765ed94867085c842/images/items/750/HallOfFame2-large.jpg.auto.webp",
    description:
      "Reverb Effects Pedal with 3 TonePrint Slots and Expression-capable Footswitch",
    // genre: ,
    budget: "$$",
  },
  {
    gear_type: "Guitar Effects",
    model: "Boss DD-8 Digital Delay Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-acabb0a2b38bdbf7__hmac-61830c3b77739e55f62c3867467180d88de47775/images/items/750/DD8-large.jpg.auto.webp",
    description:
      "Delay Guitar Effect Pedal with 10 Seconds of Delay, 11 Delay Modes, 40-second Looper with Overdub, Tap Tempo, Carryover Switch, Twist Function, True Stereo I/O with 3 Output Modes, Smart I/O, and 2 Footswitch Inputs",
    // genre: ,
    budget: "$$",
  },
  {
    gear_type: "Guitar Effects",
    model: "Strymon blueSky Reverberator Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-48bf936c783ebf5a__hmac-2fa902ce9f3fc7a7e746d6701d92b1e66ac8a6de/images/items/750/BlueSkyReverb-large.jpg.auto.webp",
    description:
      "Digital Stereo Reverb Pedal with Plate, Room, and Spring Reverb, 3 Modes, and Decay, Mix, Pre-delay, and Damping Controls with Favorite Switch and 24-bit/96kHz Conversion",
    // genre: ,
    budget: "$$$",
  },
];

const seedGuitar = () => Guitar.bulkCreate(guitardata);

module.exports = seedGuitar;
