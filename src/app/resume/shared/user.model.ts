import { Skill } from "./skill.model";
import { Education } from "./education.model";
import { Experience } from "./experience.model";
import { Hobby } from "./hobby.model";



export class User {
    constructor(
        public name: string,
        public title: string, 
        public birthDate: Date,
        public webpage: string,
        public phone: string,
        public email: string,
        public about: string,
        public skills: Skill[],
        public educations: Education[],
        public experiences: Experience[],
        public hobbies: Hobby[]
    ) {}
}