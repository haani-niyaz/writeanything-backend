const firebaseDB = require('../utils/firebase')
const Story = require('../models/story');


exports.home = function(req,res){
	Story.find({},function(err, stories){
   
    if (err || !stories){
      res.status(404);
      return res.send('Stories not found');
    }
      // return view with data
      res.render('pages/stories', {stories:stories});
  });

}


exports.seed = function(req,res){

    firebaseDB.ref("stories").on("value", function(snapshot) {

    stories = snapshot.val();

    // remove all and seed on successfull callback
    Story.remove({},function(){
      
      for (var story in stories){
      
        console.log(stories[story]['title']);
        console.log(stories[story]['passages']);
     
        var s = new Story();
        s.title = stories[story]['title'];
        s.passages = stories[story]['passages'];
        s.save();


      } // for-end
    });

      // return to stories view
      res.redirect('/');

   });

	
}