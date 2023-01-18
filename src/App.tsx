import { ChangeEvent, useRef, useState } from 'react';
import GithubLink from './components/GithubLink';

import './App.css';

function App() {
  const [radiusValues, setRadiusValues] = useState({
    'top-left-radius': 50,
    'top-right-radius': 0,
    'bottom-left-radius': 0,
    'bottom-right-radius': 0,
  });

  const borderPreviewerRef = useRef<HTMLDivElement>(null);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { id, value, max } = event.target;

    if (Number(value) > Number(max)) return;

    setRadiusValues({
      ...radiusValues,
      [id]: Number(value),
    });
  }

  return (
    <div className="App">
      <GithubLink />

      <header>
        <h1>[Previewer]</h1>
        <h2>border-radius</h2>
      </header>

      <section>
        <span>border-radius:</span>
        <span>
          {radiusValues['top-left-radius'] > 0
            ? `${radiusValues['top-left-radius']}px`
            : radiusValues['top-left-radius']}
        </span>
        <span>
          {radiusValues['top-right-radius'] > 0
            ? `${radiusValues['top-right-radius']}px`
            : radiusValues['top-right-radius']}
        </span>
        <span>
          {radiusValues['bottom-left-radius'] > 0
            ? `${radiusValues['bottom-left-radius']}px`
            : radiusValues['bottom-left-radius']}
        </span>
        <span>
          {radiusValues['bottom-right-radius'] > 0
            ? `${radiusValues['bottom-right-radius']}px`
            : radiusValues['bottom-right-radius']}
          ;
        </span>
      </section>

      <main>
        <div className="row">
          <label htmlFor="top-left-radius">
            Top Left
            <input
              type="number"
              value={radiusValues['top-left-radius']}
              onChange={handleInputChange}
              id="top-left-radius"
              min={0}
              max={999}
              step={1}
            />
          </label>
          <label htmlFor="top-right-radius">
            Top Right
            <input
              type="number"
              value={radiusValues['top-right-radius']}
              onChange={handleInputChange}
              id="top-right-radius"
              min={0}
              max={999}
              step={1}
            />
          </label>
        </div>
        <div
          ref={borderPreviewerRef}
          className="border-previewer"
          style={{
            borderTopLeftRadius: radiusValues['top-left-radius'],
            borderTopRightRadius: radiusValues['top-right-radius'],
            borderBottomLeftRadius: radiusValues['bottom-left-radius'],
            borderBottomRightRadius: radiusValues['bottom-right-radius'],
          }}
        />
        <div className="row">
          <label htmlFor="bottom-left-radius">
            Bottom Left
            <input
              type="number"
              value={radiusValues['bottom-left-radius']}
              onChange={handleInputChange}
              id="bottom-left-radius"
              min={0}
              max={999}
              step={1}
            />
          </label>
          <label htmlFor="bottom-right-radius">
            Bottom Right
            <input
              type="number"
              value={radiusValues['bottom-right-radius']}
              onChange={handleInputChange}
              id="bottom-right-radius"
              min={0}
              max={999}
              step={1}
            />
          </label>
        </div>
      </main>
    </div>
  );
}

export default App;
