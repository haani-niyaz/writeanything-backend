var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var storySchema = new Schema({  
	title: String,
	passages: Array

});

var Story = mongoose.model('Story',storySchema);

module.exports = Story;





