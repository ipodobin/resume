import {Skill} from './skill.model';
import {Education} from './education.model';
import {Experience} from './experience.model';
import {Hobby} from './hobby.model';
import {WebPage} from './webpage.model';
import {SkillGroup} from './skill.group.model';


export class User {
  constructor(
    public name: string,
    public title: string,
    public birthDate: Date,
    public webPages: WebPage[],
    public phone: string,
    public email: string,
    public about: string,
    public skills: Skill[],
    public educations: Education[],
    public experiences: Experience[],
    public hobbies: Hobby[],
    public consent: string,
    public photoUrl: string,
    public location = '',
    public lang = 'en',
    public groups: SkillGroup[] = []
  ) {
  }
}
