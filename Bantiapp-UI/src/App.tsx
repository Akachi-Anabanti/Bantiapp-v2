import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { router } from "@/routes/RouterConfig";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="bantiapp-ui-theme">
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
