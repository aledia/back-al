const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const newsSchema = new Schema({
  title: String,
  descriptions: String,
  image_url: String,
  creator: String,
  creator_id: { type : Schema.Types.ObjectId, ref: 'users' } ,
  creator_img: String,
  
  coords:[  {latitude:  Number , longitude: Number}  ]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Circuits = mongoose.model('Circuits', newsSchema);
module.exports = Circuits;