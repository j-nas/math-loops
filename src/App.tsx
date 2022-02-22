import {useEffect, useState} from 'react';
import {Operator} from './types';
import {Button, Container, TextField} from '@mui/material';
import {random} from 'lodash';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [opA, setOpA] = useState(0);
  const [opB, setOpB] = useState(0);
  const [operator, setOperator] = useState('add');
  const [answer, setAnswer] = useState(0);
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

  const resetProblem = () => {
    setOpA(pickNumbers);
    setOpB(pickNumbers);
    setResult(determineResult);
  };
  const handleNumberInput = (e: {target: {value: string}}) => {
    setAnswer(Number(e.target.value));
  };
  const checkAnswer = (): boolean => {
    if (answer === result) {
      toast('You got it!');
      return true;
    }
    toast.error('Try Again');
    return false;
  };
  return (
    <Container>
      <h1>
        {opA} {operator} {opB}
      </h1>
      <TextField
        id="answer"
        label="Enter Answer"
        variant="outlined"
        value={answer}
        onChange={handleNumberInput}
      />
      <Button onClick={checkAnswer}>Submit Answer</Button>
      <Button onClick={resetProblem}>New Problem</Button>
      <ToastContainer />
    </Container>
  );
}

export default App;
