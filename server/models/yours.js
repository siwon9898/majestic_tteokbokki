import mongoose from "mongoose";

const YoursSchema = new mongoose.Schema({
  comment: {
    type: String,
  },
});
const Yours = mongoose.model("Yours", YoursSchema);
export default Yours;
