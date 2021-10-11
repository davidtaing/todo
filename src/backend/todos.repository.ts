import { JSONDatasource } from "./datasources/";

class TodoRepository {
  datasource: JSONDatasource;

  constructor(datasource: JSONDatasource) {
    // load data
    this.datasource = datasource;
  }

  async getTodosByUser(uid: string) {
    const { data: { todos } } = this.datasource;
    return todos.filter(todo => todo.uid === uid);
  }
}

export default TodoRepository;