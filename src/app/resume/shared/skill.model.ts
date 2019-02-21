import {SkillGroup} from './skill.group.model';


export class Skill {
    constructor(
        public name: string,
        public level: number,
        public group: SkillGroup,
        public description: string,
        public enabled = false
    ) {}
}
