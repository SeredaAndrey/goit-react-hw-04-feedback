import Controls from 'components/controls/controls';
import Values from 'components/values/values';
import { useEffect, useState } from 'react';

const LS_KEY = 'localstorage_key_feedback';

const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem(LS_KEY));
};

export default function Counter() {
  const [good, setGood] = useState(getLocalStorage().good);
  const [neutral, setNeutral] = useState(getLocalStorage().neutral);
  const [bad, setBad] = useState(getLocalStorage().bad);

  useEffect(() => {
    const data = { good, bad, neutral };
    localStorage.setItem(LS_KEY, JSON.stringify(data));
  }, [good, bad, neutral]);

  const handleIncrementGood = () => {
    setGood(state => state + 1);
  };
  const handleIncrementNeutral = () => {
    setNeutral(state => state + 1);
  };
  const handleIncrementNegative = () => {
    setBad(state => state + 1);
  };

  return (
    <div className="counter">
      <Controls
        onIncrementGood={handleIncrementGood}
        onIncrementNeutral={handleIncrementNeutral}
        onIncrementBad={handleIncrementNegative}
      />
      <Values goodValue={good} neutralValue={neutral} badValue={bad} />
    </div>
  );
}
