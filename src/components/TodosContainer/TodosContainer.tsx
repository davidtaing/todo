import Todo from "../Todo/Todo";

const sampleData = [
  {
    id: 1,
    title: "finish this project",
    completed: false,
  },
  {
    id: 2,
    title: "go to sleep",
    completed: false,
  },
  {
    id: 3,
    title: "go to work",
    completed: true,
  },
];

const TodosContainer = () => {
  return (
    <div>
      {sampleData.map(({ id, title, completed }) => {
        return <Todo key={id} title={title} completed={completed} />;
      })}
    </div>
  );
};

export default TodosContainer;
