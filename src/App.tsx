import {useEffect, useState} from 'react';
import {Operator} from './types';
import {Button, Container, TextField} from '@mui/material';
import {random} from 'lodash';
function App() {
  const [opA, setOpA] = useState(0);
  const [opB, setOpB] = useState(0);
  const [operator, setOperator] = useState('add');
  const [result, setResult] = useState(0);

  const determineResult = (): number => {
    switch (operator) {
      case 'add':
        return opA + opB;
      default:
        return 0;
    }
  };
  const pickNumbers = (): number => {
    return random(1, 50);
  };

  useEffect(() => {
    setOpA(pickNumbers);
    setOpB(pickNumbers);
    setResult(determineResult);
  }, [opA, opB, result, operator]);
  return (
    <Container>
      <h1>
        {opA} {operator} {opB}
      </h1>
      <TextField id="answer" label="Enter Answer" variant="outlined" />
      <Button>Submit Answer</Button>
    </Container>
  );
}

export default App;
