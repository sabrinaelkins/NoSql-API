const {Schema,model} = require("mongoose");

const userSchema = new Schema({
  userName: {
    type: String,
    trim: true,
    required: "What is your new user name?",
    unique: true
  },
  email: {
    type: String,
    required: "What is your email?",
    unique: true
  },
  thoughts:[ 
      {
          type: Schema.Types.ObjectId,
          ref: "Thoughts"
      }
  ],
  friends:[ 
    {
        type: Schema.Types.ObjectId,
        ref: "Friends"
    }
],
  date: {
    type: Date,
    default: Date.now
  }
},
{
    toJSON: {
        virtuals: true
    },
        id: false
}        
);

userSchema.virtual("friendcount").get(() => this.friends.length)

const User = mongoose.model("User", userSchema);

module.exports = User;