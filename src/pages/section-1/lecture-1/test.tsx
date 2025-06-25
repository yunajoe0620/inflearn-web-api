import { useEffect } from 'react';

function Test() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const intervalCallback = (a: string, b: string) => {
    console.log('aaa', a, 'bbb', b);
  };

  const result = setInterval(
    intervalCallback,
    1000,
    'params1',
    'params2',
  );
  console.log('ID입니다아', result);

  const fetchData = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Web API Example</h1>
      <h2>setInterval</h2>
      <p></p>
    </div>
  );
}

export default Test;
