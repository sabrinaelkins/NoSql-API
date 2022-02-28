const {Schema,model} = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const reactionSchema = new Schema({
  reactionID: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 200
  },
  username: {
    type: String,
    trim: true,
    required: true
  },
  createdAt: {
        type: Date,
        default: Date.now,
        get: timeStamp => dateFormat(timeStamp)
  }
},{
  toJSON:{
    getters: true
  }
});

const reaction = mongoose.model("Reaction", reactionSchema);

module.exports = reaction;