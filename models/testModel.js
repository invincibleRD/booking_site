import { Schema, model, models } from "mongoose";

const testSchema =new Schema(
    {
        fullname:{
            type:String,
            required:true,
        }
    }
);
const Book_table= models.Took_table || model("bookings_table",testSchema);
export default Book_table;
