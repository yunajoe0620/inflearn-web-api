import { useEffect, useState } from 'react';
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type Users = User[];

function Test() {
  const [time, setTime] = useState(0);
  const [timeId, setTimeId] = useState<number | null>(null);
  const [data, setData] = useState<Users>([]);

  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    const id = setInterval(() => {
      setTime((prev) => (prev = 1));
    }, 1000);
    setTimeId(id);
    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    })();
  }, []);
  return (
    <div>
      <h1>Web API Example</h1>
      <h2>setInterval</h2>
      <p>Count increasing every second: {time}</p>
      <p>setInterval ID: {timeId}</p>
      <h2>fetch</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
