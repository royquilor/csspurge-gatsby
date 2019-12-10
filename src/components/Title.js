import React, {useState} from 'react'
import styled from 'styled-components';

const Div = styled.div`

`;

export default function title() {

  // React hooks replaces state and classes
  // useState will return two values and 'my title' is the first initial state
  // title could be this.state.title
  // updateTitle is this.setState()
  // we are just setting the newtitle to the title or setting a new state

  const [title, updateTitle] = useState('my title');
  const [inputVal, updateInput] = useState('');

  return (
    <Div>
      {title}
      <input type="text" value={inputVal} onChange={e => updateInput(e.target.value)} />
      <button onClick={() => updateTitle('new title')}>Click me</button>
    </Div>
  )
}
