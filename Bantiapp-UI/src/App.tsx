import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="bantiapp-ui-theme">
      <h1>HELLO WORLD!</h1>
    </ThemeProvider>
  );
}

export default App;
