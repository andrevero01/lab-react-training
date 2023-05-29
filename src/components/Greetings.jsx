import { useState } from 'react';
import { useEffect } from 'react';

function Greetings({ lang, children }) {
  const [greeting, setGreeting] = useState('');
  useEffect(() => {
    if (lang === 'de') {
      setGreeting('Hallo');
    } else if (lang === 'en') {
      setGreeting('Hello');
    } else if (lang === 'es') {
      setGreeting('Hola');
    } else if (lang === 'fr') {
      setGreeting('Bonjour');
    }
  }, [lang]);
  return (
    <div>
      <p>
        {greeting} {children}
      </p>
    </div>
  );
}
export default Greetings;
