import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const onClickButton = () => {
    setNumber(number + 1);
  }

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

function YearMonthDay(props) {
  return <span>{props.year}/{props.month}/{props.children}</span>
}

function Hello(props) {
  // 正しい例。div は HTML タグなので、<div> と書くのは正解です。
  return <div>Hello {props.toWhat}</div>;
}

export default App;
