export class Category {
  id: number;
  name: string;
  description: string;
  createdBy: string;
  createdDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;

  constructor(id: number) {
    this.id = id;
  }
}
