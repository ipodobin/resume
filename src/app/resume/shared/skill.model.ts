

export class Skill {
    constructor(
        public name: string,
        public level: number,
        public group: string,
        public description: string,
        public enabled = false
    ) {}
}
