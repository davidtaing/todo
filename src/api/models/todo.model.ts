export class Todo {
  id: number;
  title: string;
  category: string;
  status: TodoStatus;

  constructor(
    id: number,
    title: string,
    category: string,
    done: boolean = false
  ) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.status = done ? TodoStatus.DONE : TodoStatus.PENDING;
  }
}

export enum TodoStatus {
  DONE = "done",
  PENDING = "pending",
}
