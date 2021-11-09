import mongoose from "mongoose";

const HistorySchema = new mongoose.Schema({
  keyword: {
    type: String,
    required: true,
  },
  imgURL: {
    type: String,
  },
  description: {
    type: String,
  },
  year: {
    type: Number,
  },
});
const History = mongoose.model("History", HistorySchema);
export default History;
