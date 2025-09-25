import {WebPage} from './webpage.model';
import {Skill} from './skill.model';
import {Education} from './education.model';
import {Experience} from './experience.model';
import {Hobby} from './hobby.model';
import {SkillGroup} from './skill.group.model';


export interface Resume {
  name: string;
  title: string;
  birthDate: Date;
  webPages: WebPage[];
  phone: string;
  email: string;
  about: string;
  skills: Skill[];
  educations: Education[];
  experiences: Experience[];
  hobbies: Hobby[];
  consent: string;
  photoUrl: string;
  location: string;
  lang: string;
  groups: SkillGroup[];
}
