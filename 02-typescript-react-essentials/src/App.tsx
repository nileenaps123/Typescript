import Component from './starter/01-return'

function App() {
  return (
    <main>
      <Component name="Peter" id={123}>
      <h2>HelloWorld</h2>
      </Component>
      <Component name="Peter" id={123}></Component>
    </main>
  );
}

export default App;
