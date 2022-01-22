import './App.css';
import { Fragment } from 'react';

function App() {
  const text = "click";
  const onClickButton = () => {
    alert(text);
  }
  return (
    <>
    {console.log("RUN!")}
    <div className='hello'>
      <h1>Hello world</h1>
    </div>
    <p>はじめまして</p>
    <button onClick={onClickButton}>{text}</button>
    <Hello toWhat="japan"/>
    <MonthDay month="7" day="10" />
    </>
  );
}

function MonthDay(props) {
  return <div>{props.month}月 {props.day}日</div>
}

function Hello(props) {
  // 正しい例。div は HTML タグなので、<div> と書くのは正解です。
  return <div>Hello {props.toWhat}</div>;
}

export default App;
