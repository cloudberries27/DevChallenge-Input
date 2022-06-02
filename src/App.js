import React from 'react';
import Input from './components/input';
import './App.css';

function App() {
  const [icon, setIcon] = React.useState("favorite");
  return (
    <div className="App">
      <h1>Input Boxes</h1>
      <p>&lt;Input/&gt;</p>
      <Input/>
      <p>&lt;Input error/&gt;</p>
      <Input error/>
      <p>&lt;Input disabled/&gt;</p>
      <Input disabled/>
      <p>&lt;Input helperText="Some interesting text"/&gt;</p>
      <Input helperText="Some interesting text"/>
      <p>&lt;Input helperText="Some interesting text" error/&gt;</p>
      <Input helperText="Some interesting text" error/>
      <p>Select Icon: 
        <select onChange={(e)=>setIcon(e.target.value)}>
          <option value="favorite">Heart</option>
          <option value="star">Star</option>
          <option value="bolt">Lightning Bolt</option>
          <option value="cake">Birthday Cake</option>
          <option value="cloud">Cloud</option>
        </select>
      </p>
      <p>&lt;Input startIcon="{icon}"/&gt;</p>
      <Input startIcon={icon}/>
      <p>&lt;Input endIcon="{icon}"/&gt;</p>
      <Input endIcon={icon}/>
      <p>&lt;Input value="text"/&gt;</p>
      <Input value="Text"/>
      <p>&lt;Input size="sm"/&gt;</p>
      <Input size="sm"/>
      <p>&lt;Input size="md"/&gt;</p>
      <Input size="md"/>
      <p>&lt;Input fullWidth/&gt;</p>
      <Input fullWidth/>
      <p>&lt;Input multiline row="4"/&gt;</p>
      <Input multiline row="4"/>
      <footer>created by <a href="https://devchallenges.io/portfolio/cloudberries27" target="_blank" rel="noreferrer">@cloudberries27</a> - devchallenges.io </footer>
    </div>
  );
}

export default App;
