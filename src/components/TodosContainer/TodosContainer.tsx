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
        return (
          <div key={id}>
            <input type="checkbox" checked={completed} />
            <h3>{title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default TodosContainer;
