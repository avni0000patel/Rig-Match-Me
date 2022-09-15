const { Bfx } = require("../models");

const bfxdata = [
  {
    gear_type: "Bass Effects",
    model: "Tech 21 SansAmp Bass Driver DI V2",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-687abf55b2257567__hmac-3d32548bcabaca882944e17361b8bdffe951bda4/images/items/750/BassDriverV2-large.jpg.auto.webp",
    description:
      "Bass Preamp/DI Pedal with Extended Bass Control, Selectable Midrange Frequency Control, Drive, Blend, and Parallel Output",
    // genre: 'Rock, Metal, Country, Alternative Rock, Punk Rock',
    budget: "$$",
  },
  {
    gear_type: "Bass Effects",
    model: "Boss OC-5 Octave Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-503e4f974fb162c5__hmac-034a68d28fba3d5f894527b227f6f33506620f9e/images/items/750/OC5-large.jpg.auto.webp",
    description:
      "Polyphonic Guitar/Bass Octave Pedal with Mono/Poly Modes, -2/-1/+1 Octave Controls, and Dry Direct Output",
    // genre: ' Hip-Hop, Country, Alternative Rock, Reggae',
    budget: "$$",
  },
  {
    gear_type: "Bass Effects",
    model: "Darkglass Microtubes Infinity Preamp/Distortion/Audio Interface",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-a0c7ec507f13849c__hmac-3c1892cc3609446d44c70bc6f7717725e98edd15/images/items/750/MTInfinity-large.jpg.auto.webp",
    description:
      "Preamp/Distortion/Compressor/USB Interface for Bass Guitar with Impulse Responses, Bluetooth, USB Interface, Tuner, Balanced Stereo Outputs, Aux and MIDI In, and Headphone Out",
    // genre: 'Rock, Metal, Punk Rock',
    budget: "$$$$",
  },
  {
    gear_type: "Bass Effects",
    model: "Walrus Audio Julia V2 Analog Chorus/Vibrato Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-d75f3e0554d9733d__hmac-1396f9f33e5ab6780924fe4565194e79c13c89ff/images/items/750/JuliaChorusV2-large.jpg.auto.webp",
    description: "Chorus/Vibrato FX Pedal with True Bypass Switching",
    // genre: 'Hip-Hop, Alternative Rock, Reggae',
    budget: "$$",
  },
  {
    gear_type: "Bass Effects",
    model: "Electro-Harmonix Bass Big Muff Pi Bass Fuzz Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-2a7934c05317aadb__hmac-9f500aa5bd407b7c54bc0048780e587194abc56b/images/items/750/BassBigMuff-large.jpg.auto.webp",
    description:
      "Fuzz Pedal for Bass Guitar with Volume, Tone, and Sustain Controls and a Bass Boost/Dry Toggle",
    // genre: 'Rock, Metal, Alternative Rock, Punk Rock',
    budget: "$",
  },
  {
    gear_type: "Bass Effects",
    model: "MXR M87 Bass Compressor Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-ebb4568ad4f14f79__hmac-377a123b6b4f1081afb999dcc33f0b18be74e615/images/items/750/BassComp-large.jpg.auto.webp",
    description:
      "Bass Compressor Pedal with Attack, Release, Ratio, Input, and Output Controls and Constant Headroom Technology",
    // genre: 'Rock, Hip-Hop, Metal, Country, Alternative Rock, Punk Rock, Reggae',
    budget: "$$",
  },
  {
    gear_type: "Bass Effects",
    model: "Darkglass Alpha Omicron Bass Preamp/OD Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-fa3cda7874bb5dcc__hmac-57ef35a833d74d26009b3f92c3e6e876cf1031cd/images/items/750/AlphaOmicron-large.jpg.auto.webp",
    description:
      "Bass Preamp/Distortion Pedal with Dual Distortion Modes and Blend Control",
    // genre: 'Rock, Metal, Country, Alternative Rock, Punk Rock',
    budget: "$$",
  },
];

const seedBfx = () => Bfx.bulkCreate(bfxdata);

module.exports = seedBfx;
