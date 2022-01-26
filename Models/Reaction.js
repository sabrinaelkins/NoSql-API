const {Schema,model} = require("mongoose");

const reactionSchema = new Schema({
  reactionID: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true
  },
  username: {
    type: String,
    trim: true,
    required: true
  },
  createdAt: {
        type: Date,
        default: Date.now
  },
});

const reaction = mongoose.model("Reaction", reactionSchema);

module.exports = reaction;