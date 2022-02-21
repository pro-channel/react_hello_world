import './App.css';
import { useState, useEffect } from 'react';
import { YearMonthDay } from './components/year_month_day'

function App() {
  const [number, setNumber] = useState(0);
  const onClickButton = () => {
    setNumber(number + 1);
  }

  useEffect(() => console.log("numberの値が更新されました", [number]));

  const [inputValue, setInputValue] = useState("");

  return (
    <>
    {console.log("RUN!")}
    <div className='hello'>
      <h1>Hello world</h1>
    </div>

    <hr />
    {<p>{number}</p>}
    <button onClick={onClickButton}>count up</button>
    <button onClick={() => setNumber(number - 1)}>count down</button>

    <hr />
    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    <button onClick={() => alert(inputValue)}>value check</button>
    
    <hr />
    <TitleDay title="新しいfunctionを追加しました">
      <YearMonthDay year="2022" month="7">15(Fri)</YearMonthDay>
    </TitleDay>
    </>
  );
}

function TitleDay({title, children}) {
  return <h1>{title} : {children}</h1>
}

export default App;
