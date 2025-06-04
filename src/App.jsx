import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <h1>デブ活</h1>
      <div className="user_name_input_area">
        <h2> ユーザ登録画面 </h2>
        <p className="title">ユーザ登録画面</p>
        <input placeholder="ユーザ名を入力" />
        <button>入力</button>
      </div>

      <div className="weight_input_area">
        <h2>体重入力画面</h2>
        <p className="title">体重入力画面</p>

        <ul>
          <text>現在の体重</text>
          <input placeholder="40kg" />
        </ul>
        <ul>
          <text>理想の体重 </text>
          <input placeholder="50kg" />
        </ul>
        <ul>
          <text>体重増加期間 </text>
          <input placeholder="6ヶ月" />
        </ul>

        <button>計算</button>
        <ul>
          <text>理想の体重までのカロリー摂取量</text>
          <text>200kcal</text>
        </ul>

      </div>

      <div className="calorie_input_area">
        <h2>カロリー入力画面</h2>
        <p className="title">カロリー入力画面</p>
        <ul>
          <text>カロリー摂取量</text>
          <input placeholder="100kcal" />
        </ul>
        <ul>
          <text>足りないカロリー </text>
          <text>100kcal</text>
          <button>計算</button>
        </ul>
        <button>計算</button>
        <ul>
          <text>追加の食事回数 </text>
          <text>1回 </text>
        </ul>
      </div>

    </>
  );
}

export default App;
