import "./App.css";

import { FloppyDisk } from "phosphor-react";

import { BUTTON_TYPE } from "./constants/buttons";
import PrimarySecondaryButton from "./components/PrimarySecondaryButton";

function App() {
  return (
    <div className="App">
      <div className="App-buttonContainer">
        <PrimarySecondaryButton
          buttonType={BUTTON_TYPE.PRIMARY}
          buttonText="Save as..."
          buttonIcon={<FloppyDisk />}
        />

        <PrimarySecondaryButton
          buttonType={BUTTON_TYPE.PRIMARY}
          buttonText="Save as..."
          buttonIcon={<FloppyDisk />}
          isDisabled
        />

        <PrimarySecondaryButton
          buttonType={BUTTON_TYPE.SECONDARY}
          buttonText="Save as..."
          buttonIcon={<FloppyDisk />}
        />
      </div>
    </div>
  );
}

export default App;
