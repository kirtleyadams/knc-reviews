const {AuthenticationError} = require('apollo-server-express');
const { User, Movie } = require('../models');
const utils = require('../utils/auth');

const resolvers = {
	Query: {
		user: async (_root, {id}) => {
			return await User.findById(id);
		},
		users: async (_root, _args, context) => {
			return await User.find({});
		},
		movie: async (_root, {id}) => {
			return await Movie.findById(id);
		},
		recentMovies: async (_root, _args, context) => {
			return await Movie.find({}).limit(4);
		},
		allMovies: async (_root, _args, context) => {
			return await Movie.find({});
		},
	},

	Mutation: {
		createUser: async (_root, {firstName, lastName, username, email, password}) => {
			const user = await User.create({
				firstName,
				lastName,
				username,
				email,
				password,
			});
			const token = utils.signToken(user.firstName, user._id);
			console.log(token);
			return {token, user};
		},
		createReview: async (_root, {title, plot, genre, year, poster, director, rating, review}) => {
			const movie = await Movie.create({
				title,
				plot,
				genre,
				year,
				poster,
				director,
				rating,
				review,
			});
			console.log('Created Review', movie)
		},
		login: async (_root, {username, password}) => {
			const userFound = await User.findOne({username});
			if (!userFound) {
				throw new AuthenticationError('No user found with this username');
			}
			// successfully logged in
			if (userFound.password === password) {
				const token = utils.signToken(userFound.username, userFound._id);
				console.log(userFound);
				return {token, userFound};
			}
			throw new AuthenticationError('You must provide correct credentials');
		},
	},
};

module.exports = resolvers;