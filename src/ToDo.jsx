function App(){
  function callFun(){
    alert("Hello");
  }
  return (
    <div>
      <h1>My App</h1>
      <button onClick={callFun}>Click Me</button>
    </div>
  );
}
export default App;