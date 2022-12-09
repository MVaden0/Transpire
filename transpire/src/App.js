import React from 'react';
import './App.css';
import { Card } from './features/card/Card';
import { Table } from './features/table/Table';

function App() {
  return (
    <div className="App">
      <Table title='This is a table' subtitle='and it has a subtitle'>

      </Table>
    </div>
  );
}

export default App;
