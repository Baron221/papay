const mongoose = require("mongoose");
const {} = require("../lib/config");
const Schema = mongoose.Schema;

const followeSchema = new mongoose.Schema(
  {
    follow_id: { type: Schema.Types.ObjectId, required: true },
    subscriber_id: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: { createdAt: true } }
);

followeSchema.index({ follow_id: 1, subscriber_id: 1 }, { unique: true });

module.exports = mongoose.model("Follow", followeSchema);
