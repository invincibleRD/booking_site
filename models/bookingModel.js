import { Schema, model, models } from "mongoose";

const bookingSchema =new Schema(
    {
        full_name:{
            type:String,
            required:true,
        },
        teacher:{
            type:String,
            required:true,
        },
        education:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        language:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        slot_date_time:{
            type:String,
            required:true
        },
    }
);
const Bookings_table= models.bookings_table || model('bookings_table',bookingSchema);
export default Bookings_table;
