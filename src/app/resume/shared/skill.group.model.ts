import {Skill} from './skill.model';


export class SkillGroup {
  constructor(
    public name: string,
    public skills: Skill[] = [],
    public index = 0
  ) {
  }
}
