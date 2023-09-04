import mongoose, { Schema } from "mongoose";

export enum sites {
    github,
    frontendmentor,
    twitter,
    linkedin,
    youtube,
    facebook,
    twitch,
    devto,
    codewars,
    codepen,
    freecodecamp,
    gitLab,
    hashnode,
    stackoverflow,
}
export interface ILinks{
    site: sites.github|sites.frontendmentor|sites.twitter|sites.linkedin|sites.youtube|sites.facebook|sites.twitch|sites.devto|sites.codewars|sites.codepen|sites.freecodecamp|sites.gitLab|sites.hashnode|sites.stackoverflow;
    link: string;
}
export interface IUser {
    first_name: string;
    last_name: string;
    email: string;
    log_id: string;
    profile_photo: string;
    links: ILinks[]
}

const UserShema= new Schema<IUser>({
    first_name: {
        type: String,
        trim: true,
    },
    last_name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    log_id: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    profile_photo: String,
    links: [{
        site:  {
            required: true,
            type: String,
        },
        link: {
            required: true,
            type: String,
        },
    }],
},{timestamps: true});

const userModel= mongoose.model<IUser>('User',UserShema)

export default userModel