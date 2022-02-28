const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const dateFormat = require("../utils/dateFormat");

const thoughtsSchema = new Schema({
  thoughtText: {
    type: String,
    minLength: 1,
    maxLength: 200,
    required: "Enter a thought!"
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timeStamp => dateFormat(timeStamp)
  },
  reaction: [reactionSchema],

  username: {
    type: String,
    trim: true,
    required: true
  },
}, {
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
})



thoughtsSchema.virtual("reactioncount").get(() => this.reaction.length)


const thoughts = mongoose.model("Thoughts", thoughtsSchema);

module.exports = thoughts;