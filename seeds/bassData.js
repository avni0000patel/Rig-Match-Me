const { Bass } = require("../models");

const bassdata = [
  {
    gear_type: "",
    model: "",
    image: "",
    description: "",
    // genre: ,
    budget: "",
  },
  {
    gear_type: "Bass Amplifier",
    model: "Fender Rumble 40 1x10 40-watt Bass Combo Amp",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-eae508c92808d82d__hmac-d727a4fbe2bb755794083e05bab1fb126d84d1e8/images/items/750/Rum40-large.jpg.auto.webp",
    description:
      "1 x 10 inch 40-watt Bass Combo with 4-band EQ, Three Voicing Options, XLR Direct Out, and Footswitchable Overdrive",
    // genre: ,
    budget: "$$",
  },
  {
    gear_type: "Bass Amplifier",
    model: "Orange Crush Bass 50 1x12 50-watt Bass Combo Amp",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-0efe1ab98ffb98f8__hmac-a105593ef54f9825e5cf23984db11c1c40d3ec46/images/items/750/CB50Org-large.jpg.auto.webp",
    description:
      "50-watt 1x12 inch Bass Combo Amplifier with Active EQ and Parametric Mid Control",
    // genre: ,
    budget: "$$$",
  },
  {
    gear_type: "Bass Amplifier",
    model: "Boss Katana-110 Bass 1 x 10-inch 60-watt Combo Amp",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-a9048940ddb794f9__hmac-5d06f47b6ba6701cc10d79e0cde96d110f635868/images/items/750/Kata110Bass-large.jpg.auto.webp",
    description:
      "60/1W 1x10 inch Bass Combo Amplifier with 3 Amp Voicings, Shape Switch, 4 Effects Sections, 4-band EQ, Blend Control, 6 User Presets, Power Control, Cab-emulated Headphone/Record Output, and USB",
    // genre: ,
    budget: "$$$",
  },
  {
    gear_type: "Bass Amplifier",
    model: "Ampeg Rocket Bass RB-110 1x10 inch 50-watt Bass Combo Amp",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-957ee0760a157272__hmac-20be788ca468e9933080b6d3e2359083b32f0cec/images/items/750/RocketB110-large.jpg.auto.webp",
    description:
      "50W 1 x 10 inch Bass Combo Amplifier with 3-band EQ, 1/8 inch Aux Input, 1/8 inch Headphone Output, 0dB and -15dB 1/4 inch Inputs, and XLR Balanced Output",
    // genre: ,
    budget: "$$",
  },
  {
    gear_type: "Bass Amplifier",
    model: "Hartke HD75 1x12 inch 75-watt Bass Combo Amp",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-a2bf45f316179ca3__hmac-bd784a889f6b3f101b482199b3e18ba1071a0a9b/images/items/750/HD75Combo-large.jpg.auto.webp",
    description:
      "1x12 inch 75W Bass Combo with HyDrive Paper/Aluminum Speaker and 1 inch Tweeter",
    // genre: ,
    budget: "$$$",
  },
  {
    gear_type: "Bass Effects",
    model: "Tech 21 SansAmp Bass Driver DI V2",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-687abf55b2257567__hmac-3d32548bcabaca882944e17361b8bdffe951bda4/images/items/750/BassDriverV2-large.jpg.auto.webp",
    description:
      "Bass Preamp/DI Pedal with Extended Bass Control, Selectable Midrange Frequency Control, Drive, Blend, and Parallel Output",
    // genre: ,
    budget: "$$",
  },
  {
    gear_type: "Bass Effects",
    model: "Boss OC-5 Octave Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-503e4f974fb162c5__hmac-034a68d28fba3d5f894527b227f6f33506620f9e/images/items/750/OC5-large.jpg.auto.webp",
    description:
      "Polyphonic Guitar/Bass Octave Pedal with Mono/Poly Modes, -2/-1/+1 Octave Controls, and Dry Direct Output",
    // genre: ,
    budget: "$$",
  },
  {
    gear_type: "Bass Effects",
    model: "Darkglass Microtubes Infinity Preamp/Distortion/Audio Interface",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-a0c7ec507f13849c__hmac-3c1892cc3609446d44c70bc6f7717725e98edd15/images/items/750/MTInfinity-large.jpg.auto.webp",
    description:
      "Preamp/Distortion/Compressor/USB Interface for Bass Guitar with Impulse Responses, Bluetooth, USB Interface, Tuner, Balanced Stereo Outputs, Aux and MIDI In, and Headphone Out",
    // genre: ,
    budget: "$$$$",
  },
  {
    gear_type: "Bass Effects",
    model: "Walrus Audio Julia V2 Analog Chorus/Vibrato Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-d75f3e0554d9733d__hmac-1396f9f33e5ab6780924fe4565194e79c13c89ff/images/items/750/JuliaChorusV2-large.jpg.auto.webp",
    description: "Chorus/Vibrato FX Pedal with True Bypass Switching",
    // genre: ,
    budget: "$$",
  },
  {
    gear_type: "Bass Effects",
    model: "Electro-Harmonix Bass Big Muff Pi Bass Fuzz Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-2a7934c05317aadb__hmac-9f500aa5bd407b7c54bc0048780e587194abc56b/images/items/750/BassBigMuff-large.jpg.auto.webp",
    description:
      "Fuzz Pedal for Bass Guitar with Volume, Tone, and Sustain Controls and a Bass Boost/Dry Toggle",
    // genre: ,
    budget: "$",
  },
  {
    gear_type: "Bass Effects",
    model: "MXR M87 Bass Compressor Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-ebb4568ad4f14f79__hmac-377a123b6b4f1081afb999dcc33f0b18be74e615/images/items/750/BassComp-large.jpg.auto.webp",
    description:
      "Bass Compressor Pedal with Attack, Release, Ratio, Input, and Output Controls and Constant Headroom Technology",
    // genre: ,
    budget: "$$",
  },
  {
    gear_type: "Bass Effects",
    model: "Darkglass Alpha Omicron Bass Preamp/OD Pedal",
    image:
      "https://media.sweetwater.com/api/i/q-82__f-webp__ha-fa3cda7874bb5dcc__hmac-57ef35a833d74d26009b3f92c3e6e876cf1031cd/images/items/750/AlphaOmicron-large.jpg.auto.webp",
    description:
      "Bass Preamp/Distortion Pedal with Dual Distortion Modes and Blend Control",
    // genre: ,
    budget: "$$",
  },
];

const seedBass = () => Bass.bulkCreate(bassdata);

module.exports = seedBass;
