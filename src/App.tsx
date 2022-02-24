import {useEffect, useState} from 'react';
import {Operator} from './types';
import {Button, Grid, TextField} from '@mui/material';
import {random} from 'lodash';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JSConfetti from 'js-confetti';

function App() {
  const [opA, setOpA] = useState(0);
  const [opB, setOpB] = useState(0);
  const [operator, setOperator] = useState('plus');
  const [result, setResult] = useState(0);
  const [answer, setAnswer] = useState(0);

  const jsConfetti = new JSConfetti();

  useEffect(() => {
    setResult(determineResult());
  }, [opA, opB]);

  const determineResult = (): number => {
    switch (operator) {
      case 'plus':
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
  };
  const handleNumberInput = (e: {target: {value: string}}) => {
    setAnswer(Number(e.target.value));
  };
  const checkAnswer = (): boolean => {
    setResult(determineResult);
    if (answer === result) {
      toast('You got it!');
      jsConfetti.addConfetti();
      return true;
    }
    toast.error('Try Again');
    return false;
  };
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item>
        <h1>
          {opA} {operator} {opB}
        </h1>
      </Grid>
      <Grid item>
        <TextField
          id="answer"
          label="Enter Answer"
          variant="outlined"
          value={answer}
          onChange={handleNumberInput}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={checkAnswer}>
          Submit Answer
        </Button>
        <Button variant="contained" onClick={resetProblem}>
          New Problem
        </Button>
      </Grid>
      <ToastContainer />
    </Grid>
  );
}

export default App;
