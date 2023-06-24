import CheckBoxContiner from "./components/CheckBoxContiner";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="card">
          <span className="other">Pictures or other assets</span>
          <CheckBoxContiner label="1 398 kr " />
        </div>
        <hr />
        <div className="card">
          <span className="other">Pictures or other assets</span>
          <CheckBoxContiner label="1 523 kr " />
        </div>
        <hr />
        <div className="card">
          <span className="other">Pictures or other assets</span>
          <CheckBoxContiner label="1 523 kr " />
        </div>
        <hr />
        <div className="card">
          <span className="other">Pictures or other assets</span>
          <CheckBoxContiner label="1 850 kr " />
        </div>
      </div>
    </div>
  );
};

export default App;
