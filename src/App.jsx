import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //ユーザログイン画面
  const [userNameText, setUserText] = useState("");
  //体重入力画面
  const [currentWeight, setCurrentWeight] = useState("");
  const [modelWeight, setModelWeight] = useState("");
  const [LengthOfDays, setLengthOfDays] = useState("");
  const [modelCalorie, setModelCalorie] = useState("");;//理想の総摂取カロリー(出力)
  // カロリー入力画面
  const [currentCalorie, setCurrentCalorie] = useState("");//現在の摂取カロリー
  const [mustCalorie, setMustCalorie] = useState("");//摂取しなければならないカロリー
  const [eatCount, setEatCount,] = useState("");//食事回数(出力)


  //ユーザログイン画面
  const onChangeUserText = (event) => setUserText(event.target.value);

  //体重入力画面
  const onChangeCurrentWeight = (event) => setCurrentWeight(event.target.value);
  const onChangeModelWeight = (event) => setModelWeight(event.target.value);
  const onChangeLengthOfDays = (event) => setLengthOfDays(event.target.value);
  const onChangeModelCalorie = (event) => setModelCalorie(event.target.value);

  //カロリー入力画面
  const onChangeCurrentCalorie = (event) => setCurrentCalorie(event.target.value);
  const onChangeMustCalorie = (event) => setMustCalorie(event.target.value);
  const onChangeEatCount = (event) => setEatCount(event.target.value);

  //ユーザ名入力ボタン
  const onClickInput = () => {
    if (userNameText === "") return;
    console.log(userNameText);
  };


  //カロリー計算ボタンが押されたら、入力された値をコンソール上に表示
  const onClickCalorieCal = () => {
    if (currentWeight === "" && modelWeight === "" && LengthOfDays === "") return;
    console.log(currentWeight);
    console.log(modelWeight);
    console.log(LengthOfDays);
  };

  //足りないカロリー計算ボタンが押されたら、現在のカロリー摂取量をコンソール上に表示
  const onClickMustCalorieCal = () => {
    if (currentCalorie === "") return;
    console.log(currentCalorie);
  };

  //食事回数計算ボタンが押されたら、
  const onClickEatCount = () => {
  };

  //画面
  return (
    <>
      <h1>デブ活</h1>
      <div className="user_name_input_area">
        <h2> ユーザログイン画面 </h2>
        <p className="title">ユーザログイン画面</p>
        <input placeholder="ユーザ名を入力" onChange={onChangeUserText} />
        <button onClick={onClickInput}>入力</button>
      </div>

      <div className="home-area">
        <h2>ホーム画面</h2>
        <p className="title">ホーム画面</p>
        <ul>
          <li>理想の体重までのカロリー摂取量</li>
        </ul>

        <ul>
          <li>追加の食事回数</li>
        </ul>
      </div>

      <div className="weight_input_area">
        <h2>体重入力画面</h2>
        <p className="title">体重入力画面</p>

        <ul>
          <li>現在の体重</li>
          <input placeholder="40kg" onChange={onChangeCurrentWeight} />
        </ul>
        <ul>
          <li>理想の体重 </li>
          <input placeholder="50kg" onChange={onChangeModelWeight} />
        </ul>
        <ul>
          <li>体重増加期間 </li>
          <input placeholder="6ヶ月" onChange={onChangeLengthOfDays} />
        </ul>

        <button onClick={onClickCalorieCal}>計算</button>
        <ul>
          <span>理想の体重までのカロリー摂取量</span>
          <span>200kcal</span>
        </ul>

      </div>

      <div className="calorie_input_area">
        <h2>カロリー入力画面</h2>
        <p className="title">カロリー入力画面</p>
        <ul>
          <span>現在のカロリー摂取量</span>
          <input placeholder="100kcal" onChange={onChangeCurrentCalorie} />
          <button onClick={onClickMustCalorieCal}>計算</button>
        </ul>
        <ul>
          <span>足りないカロリー </span>
          <span>100kcal</span>

        </ul>
        <button onClick={onClickEatCount}>計算</button>
        <ul>
          <span>追加の食事回数 </span>
          <span>1回 </span>
        </ul>
      </div>

    </>
  );
}

export default App;
