export default function Todo({ name, status }) {
  const mycolor = status === true ? "green" : "red";
  return (
    <div className="todo">
      <h1 style={{ color: mycolor }}>{name}</h1>
    </div>
  );
}
