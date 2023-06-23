import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="mb-4">
        <p className="mb-2">{`<Button />`}</p>
        <Button text="Default" />
      </div>
      <div className="mb-4">
        <p className="mb-2">{`<Button variant=”outline” />`}</p>
        <Button text="Default" variant="outline" />
      </div>
      <div className="mb-4">
        <p className="mb-2">{`<Button variant=”text” />`}</p>
        <Button text="Default" variant="text" />
      </div>
      <div className="mb-4">
        <p className="mb-2">{`<Button disableShadow />`}</p>
        <Button text="Default" disabledShadow />
      </div>
      <div className="mb-4">
        <p className="mb-2">{`<Button disabled />`}</p>
        <Button text="Default" disabled />
      </div>
      <div className="mb-4">
        <p className="mb-2">{`<Button variant=”text” disabled />`}</p>
        <Button text="Default" variant="text" disabled />
      </div>

      <div className="wrapper mb-4">
        <h3>Icon</h3>
        <div className="grid-cols-4">
          <div>
            <p className="mb-2">{`<Button startIcon="switch_access" />`}</p>
            <Button text="Default" startIcon="switch_access" />
          </div>
          <div>
            <p className="mb-2">{`<Button endIcon="switch_access" />`}</p>
            <Button text="Default" endIcon="switch_access" />
          </div>
        </div>
      </div>

      <div className="wrapper mb-4">
        <h3>Sizing</h3>
        <div className="grid-cols-4">
          <div>
            <p className="mb-2">{`<Button size="sm" />`}</p>
            <Button text="Default" size="sm" />
          </div>
          <div>
            <p className="mb-2">{`<Button size="md" />`}</p>
            <Button text="Default" size="md" />
          </div>
          <div>
            <p className="mb-2">{`<Button size="lg" />`}</p>
            <Button text="Default" size="lg" />
          </div>
        </div>
      </div>

      <div className="wrapper">
        <h3>Color</h3>
        <div className="grid-cols-4">
          <div>
            <p className="mb-2">{`<Button color="default" />`}</p>
            <Button text="Default" />
          </div>
          <div>
            <p className="mb-2">{`<Button color="primary" />`}</p>
            <Button text="Default" color="primary" />
          </div>
          <div>
            <p className="mb-2">{`<Button color="secondary" />`}</p>
            <Button text="Default" color="secondary" />
          </div>
          <div>
            <p className="mb-2">{`<Button color="danger" />`}</p>
            <Button text="Default" color="danger" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
