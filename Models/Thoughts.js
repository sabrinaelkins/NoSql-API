const {Schema,model} = require("mongoose");

const thoughtsSchema = new Schema({
  thoughtText: {
    type: String,
    required: "Enter a thought!"
  },
  createdAt: {
    type: Date,
    default: Date.now
},
reaction:[ 
    {
        type: Schema.Types.ObjectId,
        ref: "Reactions"
    }
],
  username: {
    type: String,
    trim: true,
    required: true
  },
}, {
    toJSON: {
        virtuals: true
    },
        id: false
})
thoughtsSchema.virtual("reactioncount").get(() => this.reaction.length)


const thoughts = mongoose.model("Thoughts", thoughtsSchema);

module.exports = thoughts;