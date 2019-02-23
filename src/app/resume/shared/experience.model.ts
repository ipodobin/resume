export class Experience {
  constructor(
    public name: string,
    public from: Date,
    public to: Date,
    public position: string,
    public description: string
  ) {
  }

  static sort(exp1, exp2) {
    return new Date(exp1.to).getTime() - new Date(exp2.to).getTime();
  }

  static reverse(exp1, exp2) {
    return new Date(exp2.to).getTime() - new Date(exp1.to).getTime();
  }
}
