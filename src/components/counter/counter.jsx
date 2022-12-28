import Controls from 'components/controls/controls';
import Values from 'components/values/values';
import { useRef } from 'react';
import { useEffect, useState } from 'react';

const LS_KEY = 'localstorage_key_feedback';

export default function Counter() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const isFirstRender = useRef(true);

  useEffect(() => {
    switch (isFirstRender.current) {
      case true: {
        const data = JSON.parse(localStorage.getItem(LS_KEY));
        if (data) {
          setGood(data.good);
          setBad(data.bad);
          setNeutral(data.neutral);
        }
        isFirstRender.current = false;
        break;
      }
      case false: {
        const data = { good, bad, neutral };
        localStorage.setItem(LS_KEY, JSON.stringify(data));
        break;
      }

      default:
        break;
    }
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
