export class Todo {
  id: number;
  category: string;
  status: TodoStatus;
  title: string;

  constructor(id: number, category: string, status: TodoStatus, title: string) {
    this.id = id;
    this.category = category;
    this.status = status;
    this.title = title;
  }
}

export enum TodoStatus {
  DONE = "done",
  PENDING = "pending",
}