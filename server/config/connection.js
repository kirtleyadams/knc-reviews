const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'reviewdb+srv://coRBRank:i1tyhm8CLKnBazSQ@cluster0.wxs72.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
mongoose.connect('mongodb://localhost:27017/reviewdb', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

module.exports = mongoose.connection;