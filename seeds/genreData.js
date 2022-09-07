const { Genre } = require('../models');

const genredata = [
  {
    genre: 'Rock',
    description: 'Also known as Rock and Roll, rock music is a genre centered on distorted electric guitar, electric bass, drums, and vocals.',
    example: 'AC/DC',
  },
  {
    genre: 'Hip-Hop',
    description: 'Also known as Rap music, hip-hop is a genre that focuses mainly on rhythmic drum beats, synthesized sounds and samples.',
    example: 'The Roots',
  },
  {
    genre: 'Metal',
    description: 'Metal is a sub-genre of Rock that is known for heavily distorted guitars, fast tempo drum beats, and agressive vocal style.',
    example: 'Slayer',
  },
  {
    genre: 'Country',
    description: 'Country music is a genre that is traditionally a mixture of ballads and dance tunes played on guitar, bass, drums, and other instruments',
    example: 'Alabama',
  },
  {
    genre: 'Alternative Rock',
    description: 'Alternative rock music is a rock sub-genre that blends elements of conventional rock with influences from other musical styles (such as punk rock, hard rock, hip-hop, or folk)',
    example: 'Red Hot Chilli Peppers',
  },
];

const seedGenres = () => Genre.bulkCreate(genredata);

module.exports = seedGenres;
