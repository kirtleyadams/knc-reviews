const {AuthenticationError} = require('apollo-server-express');
const { User, } = require('../models');
const utils = require('../utils/auth');

const resolvers = {
	Query: {
		user: async (_root, {id}) => {
			return await User.findById(id).populate({path:"playerId"});
		},
		users: async (_root, _args, context) => {
			return await User.find({}).populate({path:"playerId"});
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
		login: async (_root, {email, password}) => {
			const userFound = await User.findOne({email});
			if (!userFound) {
				throw new AuthenticationError('No user found with this email');
			}
			// successfully logged in
			if (userFound.password === password) {
				const token = utils.signToken(userFound.firstName, userFound._id);
				console.log(userFound);
				return {token, userFound};
			}
			throw new AuthenticationError('You must provide correct credentials');
		},
	},

	Reviewer: { 
		fullName: (root) => {
			return `${root.firstName} ${root.lastName}`;
		}
	}
};

module.exports = resolvers;