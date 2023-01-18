import GithubLink from './components/GithubLink';

import './App.css';

function App() {
  return (
    <div className="App">
      <GithubLink />

      <header>
        <h1>[Previewer]</h1>
        <h2>border-radius</h2>
      </header>

      <section>
        <span>border-radius:</span>
        <span>0</span>
        <span>0</span>
        <span>0</span>
        <span>0;</span>
      </section>

      <main>
        <div className="row">
          <label htmlFor="top-left-border">
            Top Left
            <input type="number" placeholder="0" id="top-left-border" min={0} step={1} />
          </label>
          <label htmlFor="top-right-border">
            Top Right
            <input type="number" placeholder="0" id="top-right-border" min={0} step={1} />
          </label>
        </div>
        <div className="border-previewer" />
        <div className="row">
          <label htmlFor="bottom-left-border">
            Bottom Left <input type="number" placeholder="0" id="bottom-left-border" min={0} step={1} />
          </label>
          <label htmlFor="bottom-right-border">
            Bottom Right
            <input type="number" placeholder="0" id="bottom-right-border" min={0} step={1} />
          </label>
        </div>
      </main>
    </div>
  );
}

export default App;
