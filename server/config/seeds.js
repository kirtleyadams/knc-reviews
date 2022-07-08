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
            director: 'Chris Buck, Jennifer Lee',
            rating: 9,
            review: 'Amazing. I watch it every day!'
        },
        {
            title: 'Scott Pilgrim Vs. The World',
            plot: "As bass guitarist for a garage-rock band, Scott Pilgrim (Michael Cera) has never had trouble getting a girlfriend; usually, the problem is getting rid of them. But when Ramona Flowers (Mary Elizabeth Winstead) skates into his heart, he finds she has the most troublesome baggage of all: an army of ex-boyfriends who will stop at nothing to eliminate him from her list of suitors",
            genre: 'Comedy',
            year: '2010',
            poster: 'https://m.media-amazon.com/images/I/517XbXyIwRL._AC_.jpg',
            director: 'Edgar Wright',
            rating: 10,
            review: 'Best. Movie. Ever.'
        },
        {
            title: 'Birds of Prey',
            plot: "It's open season on Harley Quinn when her explosive breakup with the Joker puts a big fat target on her back. Unprotected and on the run, Quinn faces the wrath of narcissistic crime boss Black Mask, his right-hand man, Victor Zsasz, and every other thug in the city. But things soon even out for Harley when she becomes unexpected allies with three deadly women -- Huntress, Black Canary and Renee Montoya.",
            genre: 'Action',
            year: '2020',
            poster: 'https://m.media-amazon.com/images/I/710H0wZePbL._AC_SL1334_.jpg',
            director: 'Cathy Yan',
            rating: 9,
            review: 'Margot Robbie is the best anti-villan. Will tug at your heartstrings'
        },
        {
            title: 'The Terror of Tiny Town',
            plot: "In the Old West's Tiny Town, Bat Haines ('Little Billy' Rhodes) pits two ranching families, the Lawsons and the Prestons, against each other by stealing their cattle and blaming the other family for the thefts. Haines blackmails the sheriff, who is an ex-convict, into taking no action, then attacks a stagecoach carrying Nancy (Yvonne Moray), the niece of Tex Preston. Nancy is rescued by Buck Lawson (Billy Curtis), and the two fall in love. Billy then battles Haines to stop the feud.",
            genre: 'Oldies',
            year: '1938',
            poster: 'https://m.media-amazon.com/images/I/51XTOdWS3rL._SY445_.jpg',
            director: 'Sam Newfield',
            rating: 4,
            review: 'Great movie ... If you enjoy painfully bad movies'
        },
        {
            title: 'Jesus Christ Vampire Hunter',
            plot: "Jesus (Phil Caracas) uses kung fu to wipe out a horde of bloodsuckers who attack lesbians.",
            genre: 'Musical',
            year: '2001',
            poster: 'https://m.media-amazon.com/images/I/51EraV3ey9L._AC_SY445_.jpg',
            director: 'Lee Demarbre',
            rating: 8,
            review: "So bad that it's good"
        },
    ]);

    console.log('Movies Seeded', movies)

    process.exit();
})