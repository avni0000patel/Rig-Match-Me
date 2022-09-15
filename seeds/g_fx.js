const { Gfx } = require("../models");

const gfxdata = [
  {
    gear_type: "Guitar Effects",
    model: "Ibanez TS9 Tube Screamer Overdrive Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-a5b2f4b2a4a1bdee__hmac-448fe743b1e64b59010d96e3b7928b606def04fb/images/items/750/TS9-large.jpg.auto.webp",
    description: "Classic stompbox distortion and overdrive effect",
    // genre: 'Rock, Metal, Country, Alternative Rock, Punk Rock',
    budget: "$",
  },
  {
    gear_type: "Guitar Effects",
    model: "Boss DS-1 Distortion Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-596174c5d7faea32__hmac-5ebe684c6b9952bd623984bd801b757357f7a11c/images/items/750/DS1-large.jpg.auto.webp",
    description:
      "Distortion Effects Pedal with Distortion, Level, and Tone Controls",
    // genre: 'Rock, Metal, Country, Alternative Rock, Punk Rock',
    budget: "$",
  },
  {
    gear_type: "Guitar Effects",
    model: "Revv G3 - Preamp/Overdrive/Distortion Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-2db5df44dcf31ed6__hmac-ecb68bf2d1cd151b254d04f1f405b1e2c7f85eea/images/items/750/RevvG3-large.jpg.auto.webp",
    description: "Preamp/Overdrive/Distortion Pedal for Electric Guitar",
    // genre: 'Metal, Punk Rock',
    budget: "$$",
  },
  {
    gear_type: "Guitar Effects",
    model: "Boss CE-2W Waza Craft Chorus Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-868bfec5b8e5070e__hmac-7f051ed8ef1ae7de17852133b08a83cac9c4e29e/images/items/750/CE2W-large.jpg.auto.webp",
    description:
      "Chorus Effects Pedal for Guitar with 3 Modes (Standard, CE-1 Chorus, and CE-1 Vibrato) and Rate and Depth Controls",
    // genre: 'Rock, Hip-Hop, Country, Alternative Rock, Reggae',
    budget: "$$",
  },
  {
    gear_type: "Guitar Effects",
    model: "Walrus Audio Julianna Stereo Analog Chorus/Vibrato Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-1fa2283296b07ec2__hmac-c1facd3924c19295fb526a51ded0aaa7e5f9c384/images/items/750/Julianna-large.jpg.auto.webp",
    description: "Stereo Chorus/Vibrato FX Pedal with True Bypass Switching",
    // genre: 'Hip-Hop, Country, Alternative Rock, Reggae',
    budget: "$$",
  },
  {
    gear_type: "Guitar Effects",
    model: "MXR EVH 5150 Chorus Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-9a9a1b1cf6a78017__hmac-b21513b940f90e8fd764079c3f2d6de67a4c74a6/images/items/750/EVH30-large.jpg.auto.webp",
    description:
      "Chorus Guitar Effects Pedal with Volume, Tone, and Intensity Controls, Input and Output Level Switches, Switchable True/Buffered Bypass Operation, and Mono and Stereo Outputs",
    // genre: 'Rock, Hip-Hop, Metal, Country, Alternative Rock, Reggae',
    budget: "$$",
  },
  {
    gear_type: "Guitar Effects",
    model: "TC Electronic Hall of Fame 2 Reverb Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-4bc43b72422cb0be__hmac-66945b1c0471c493bf518f6765ed94867085c842/images/items/750/HallOfFame2-large.jpg.auto.webp",
    description:
      "Reverb Effects Pedal with 3 TonePrint Slots and Expression-capable Footswitch",
    // genre: 'Rock, Hip-Hop, Country, Alternative Rock, Reggae',
    budget: "$$",
  },
  {
    gear_type: "Guitar Effects",
    model: "Boss DD-8 Digital Delay Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-acabb0a2b38bdbf7__hmac-61830c3b77739e55f62c3867467180d88de47775/images/items/750/DD8-large.jpg.auto.webp",
    description:
      "Delay Guitar Effect Pedal with 10 Seconds of Delay, 11 Delay Modes, 40-second Looper with Overdub, Tap Tempo, Carryover Switch, Twist Function, True Stereo I/O with 3 Output Modes, Smart I/O, and 2 Footswitch Inputs",
    // genre: 'Rock, Hip-Hop, Metal, Country, Alternative Rock, Reggae',
    budget: "$$",
  },
  {
    gear_type: "Guitar Effects",
    model: "Strymon blueSky Reverberator Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-48bf936c783ebf5a__hmac-2fa902ce9f3fc7a7e746d6701d92b1e66ac8a6de/images/items/750/BlueSkyReverb-large.jpg.auto.webp",
    description:
      "Digital Stereo Reverb Pedal with Plate, Room, and Spring Reverb, 3 Modes, and Decay, Mix, Pre-delay, and Damping Controls with Favorite Switch and 24-bit/96kHz Conversion",
    // genre: 'Rock, Hip-Hop, Country, Alternative Rock, Reggae',
    budget: "$$$",
  },
];

const seedGfx = () => Gfx.bulkCreate(gfxdata);

module.exports = seedGfx;
