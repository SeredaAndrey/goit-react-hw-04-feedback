import Controls from 'components/controls/controls';
import Values from 'components/values/values';
import { useEffect, useState } from 'react';

const LS_KEY = 'localstorage_key_feedback';

const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem(LS_KEY));
};

export default function Counter() {
  const [good, setGood] = useState(() => {
    return getLocalStorage() ? getLocalStorage().good : 0;
  });
  const [neutral, setNeutral] = useState(() => {
    return getLocalStorage() ? getLocalStorage().neutral : 0;
  });
  const [bad, setBad] = useState(() => {
    return getLocalStorage() ? getLocalStorage().bad : 0;
  });

  useEffect(() => {
    const state = { good, bad, neutral };
    localStorage.setItem(LS_KEY, JSON.stringify(state));
  }, [good, bad, neutral]);

  const handleIncrement = state => {
    switch (state) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className="counter">
      <Controls onIncrement={handleIncrement} />
      <Values
        goodValue={good ?? 0}
        neutralValue={neutral ?? 0}
        badValue={bad ?? 0}
      />
    </div>
  );
}
