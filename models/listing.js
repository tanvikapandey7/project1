const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const listingSchema = new Schema ({
     title: {
       type: String ,
        required: true,
     },
     description:String,
     image:{
      type: String,
      default:"https://unsplash.com/photos/half-moon-over-misty-mountains-and-ocean-zN8DMkeELG8",
      set: (v) =>
         v ===""? 
      "https://unsplash.com/photos/half-moon-over-misty-mountains-and-ocean-zN8DMkeELG8"
      :v ,
     
     } ,
     price:Number,
     location:String,
     country:String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing ; 