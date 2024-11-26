function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>Today is {currDate.toLocaleDateString()}.</h2>
      <h3> The time is {currDate.toLocaleTimeString()}. </h3>
    </div>
  );
}

export default App;