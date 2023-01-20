import { ChangeEvent, useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

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

  async function handleCommandCopy() {
    try {
      const commandValue = document.getElementById('css-border-command')?.innerText;

      if (commandValue) {
        toast.success('Comando copiado 😉');
        await navigator.clipboard.writeText(commandValue);
      }
    } catch (error) {
      toast.error('Oops! Não foi possível copiar o comando 😕');
    }
  }

  return (
    <>
      <div className="App">
        <GithubLink />

        <header>
          <h1>[Previewer]</h1>
          <h2>border-radius</h2>
        </header>

        <section role="button" onClick={handleCommandCopy} tabIndex={0} aria-hidden="true">
          <p id="css-border-command">
            border-radius:
            {radiusValues['top-left-radius'] === radiusValues['top-right-radius'] &&
            radiusValues['top-left-radius'] === radiusValues['bottom-left-radius'] &&
            radiusValues['top-left-radius'] === radiusValues['bottom-right-radius'] ? (
              ` ${radiusValues['top-left-radius']}px`
            ) : (
              <>
                {' '}
                {radiusValues['top-left-radius'] > 0
                  ? `${radiusValues['top-left-radius']}px`
                  : radiusValues['top-left-radius']}{' '}
                {radiusValues['top-right-radius'] > 0
                  ? `${radiusValues['top-right-radius']}px`
                  : radiusValues['top-right-radius']}{' '}
                {radiusValues['bottom-left-radius'] > 0
                  ? `${radiusValues['bottom-left-radius']}px`
                  : radiusValues['bottom-left-radius']}{' '}
                {radiusValues['bottom-right-radius'] > 0
                  ? `${radiusValues['bottom-right-radius']}px`
                  : radiusValues['bottom-right-radius']}
                ;
              </>
            )}
          </p>
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
      <ToastContainer theme="dark" position="top-right" autoClose={2000} closeOnClick pauseOnHover />
    </>
  );
}

export default App;
