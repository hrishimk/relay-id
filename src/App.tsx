import React, { useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { fromGlobalId } from 'graphql-relay'

function App() {

  const [value, setValue] = useState('')

  const parsed = useMemo(() => {
    return fromGlobalId(value)
  }, [value])

  return (
    <div className="App">
      <div className='section'>
        <div>
          <h1>Get Int id from relay global id</h1>
        </div>
        <input value={value} onChange={e => setValue(e.target.value)} autoFocus />

        <table>
          <thead>
            <tr>
              <th>type</th>
              <th>id</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{parsed.type || '🤡'}</td>
              <td>{parsed.id || '🤬'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
