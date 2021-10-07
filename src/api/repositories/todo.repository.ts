import { JSONDatasource } from "../datasource";

class TodoRepository {
  datasource: JSONDatasource;

  constructor() {
    this.datasource = new JSONDatasource();
  }

  async getAll(uid: string) {
    return await this.datasource.getAllTodos(uid);
  }
}

export default TodoRepository;