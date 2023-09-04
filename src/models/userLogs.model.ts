import mongoose, { Mongoose, Schema } from "mongoose";

export interface IUserLog {
    email: string;
    password: string;
}

const  UserLogSchema= new Schema<IUserLog>({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
},{timestamps: true})

const userLogModel= mongoose.model<IUserLog>('UserLog', UserLogSchema);

export default userLogModel