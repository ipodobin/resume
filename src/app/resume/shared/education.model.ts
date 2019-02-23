export class Education {
  constructor(
    public name: string,
    public specialization: string,
    public from: Date,
    public to: Date,
    public title: string,
    public description: string
  ) {
  }

  static sort(edu1, edu2) {
    return new Date(edu1.to).getTime() - new Date(edu2.to).getTime();
  }

  static sortBy(field) {
    return function (edu1, edu2) {
      return new Date(edu1[field]).getTime() - new Date(edu2[field]).getTime();
    };
  }

  static reverse(edu1, edu2) {
    return new Date(edu2.to).getTime() - new Date(edu1.to).getTime();
  }

  static reverseBy(field) {
    return function (edu1, edu2) {
      return new Date(edu2[field]).getTime() - new Date(edu1[field]).getTime();
    };
  }
}
