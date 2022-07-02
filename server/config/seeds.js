const db = require('./connection');
const { Movie, User } = require('../models');

db.once('open', async () => {
    await User.deleteMany();
    
    const users = await User.insertMany([
        {
            firstName: 'KnC',
            lastName: 'Reviews',
            username: 'admin',
            email: 'admin@admin.com',
            password: 'pass',
        },
    ]);

    console.log('Users Seeded', users)

    await Movie.deleteMany();

    const movies = await Movie.insertMany([
        {
            title: 'Game Over, Man!',
            plot: 'When a gunman holds hostages inside an elite Los Angeles party, three unlikely warriors put their lives and reputations on the line and try to become heroes to save the day.',
            genre: 'Comedy',
            year: '2018',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTUxNjI4MDU2OF5BMl5BanBnXkFtZTgwMDAzMzA1NDM@._V1_.jpg',
            director: 'Kyle Newacheck',
            rating: 6,
            review: 'It was good. Fell asleep halfway thru which is better than I normally do'
        },
        {
            title: 'Frozen',
            plot: "When their kingdom becomes trapped in perpetual winter, fearless Anna (Kristen Bell) joins forces with mountaineer Kristoff (Jonathan Groff) and his reindeer sidekick to find Anna's sister, Snow Queen Elsa (Idina Menzel), and break her icy spell. Although their epic journey leads them to encounters with mystical trolls, a comedic snowman (Josh Gad), harsh conditions, and magic at every turn, Anna and Kristoff bravely push onward in a race to save their kingdom from winter's cold grip.",
            genre: 'Family',
            year: '2013',
            poster: 'https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg',
            director: ' Chris Buck, Jennifer Lee',
            rating: 9,
            review: 'Amazing. I watch it every day!'
        },
    ]);

    console.log('Movies Seeded', movies)

    process.exit();
})