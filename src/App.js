import "./App.css";

import { FloppyDisk } from "phosphor-react";
import PrimarySecondaryButton from "./components/PrimarySecondaryButton";

function App() {
  return (
    <div className="App">
      <div className="App-buttonContainer">
        <PrimarySecondaryButton
          buttonType="primary"
          buttonText="Save as..."
          buttonIcon={<FloppyDisk />}
        />

        <PrimarySecondaryButton
          buttonType="primary"
          buttonText="Save as..."
          buttonIcon={<FloppyDisk />}
          isDisabled
        />

        <PrimarySecondaryButton
          buttonType="secondary"
          buttonText="Save as..."
          buttonIcon={<FloppyDisk />}
        />
      </div>
    </div>
  );
}

export default App;
