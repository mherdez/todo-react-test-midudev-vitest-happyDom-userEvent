import { ChangeEvent, useState } from 'react';
import './App.css'

function App() {

  const [valor, setValor] = useState<number>(0)
  const [secuencia, setSecuencia] = useState<string>('')

  const fibonacci = (n: number) => {
    let a:number = 0;
      let b:number = 1;
      const sequence:number[] = [a, b];

      for (let i = 2; i < n; i++) {
        const next:number = a + b;
        sequence.push(next);
        a = b;
        b = next;
      }
      setSecuencia(sequence.join(", "));

  }

  const setInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValor(+e.target.value)
  }
  const calcular = () => {
    fibonacci(valor)
  }

  return (
    <>
      <h1>Hola mundo</h1>
      <input type="number" min={0} max={20} onChange={setInput}/>
      <button onClick={calcular}>Calcular</button>
      <p>{secuencia}</p>
    </>
  )
}

export default App
