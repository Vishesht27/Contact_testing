import logo from "./logo.svg";
import uba_logo from "./uba_logo.svg";
import "./App.css";
import { useEffect } from "react";
import ContactForm from "./contactForm";

function App() {
  // You can skip useEffect if you're not using TailwindCSS
  // Otherwise, for the production usage refer to https://tailwindcss.com/docs/installation
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={uba_logo} alt="logo" />
        <div className="py-6">
          <ContactForm />
        </div>
      </header>
    </div>
  );
}

export default App;