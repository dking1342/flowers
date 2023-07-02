import mongoose from 'mongoose';
import { Model } from 'mongoose';

const { Schema } = mongoose;

const StaffSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
  },
});

let Staff: Model<any>;
if (mongoose.models.staff) {
  Staff = mongoose.model('staff');
} else {
  Staff = mongoose.model('staff', StaffSchema);
}
export default Staff;
