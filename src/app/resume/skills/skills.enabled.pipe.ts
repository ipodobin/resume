import {Pipe, PipeTransform} from '@angular/core';
import {Skill} from '../shared/skill.model';

@Pipe({
  name: 'skillsenabled',
  pure: false
})
export class SkillsEnabledPipe implements PipeTransform {
  transform(skills: Skill[], enabled: boolean): any {
    if (!skills) {
      return skills;
    }
    if (enabled == null) {
      enabled = true;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return skills.filter(skill => skill.enabled === enabled);
  }
}
