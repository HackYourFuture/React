import { useReducer, useEffect } from 'react';
import useKeyPress from '../hooks/useKeyPress';

const useFetch = (defaultValue, url, reducer) => {
  const keyPressData = useKeyPress();
  const [state, dispatch] = useReducer(reducer, defaultValue);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(url);
      const data = await response.json();
      return data[0];
    };
    keyPressData >= 1 &&
      getUser().then(info => dispatch({ type: 'FETCH', data: info, loading: { loading: false } }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyPressData]);

  return [state, dispatch];
};

export default useFetch;
