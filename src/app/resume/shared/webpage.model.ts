

export class WebPage {
    constructor(
        public name: string,
        public url: string,
        public type = PageType.OTHER
    ) { }
}

export enum PageType {
  OTHER,
  GITHUB,
  LINKEDIN,
}
