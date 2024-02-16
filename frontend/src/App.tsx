import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Compiler from "./pages/Compiler";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
function App() {
  return (
    <>
      <Toaster position="bottom-right" theme="dark" />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/compiler" element={<Compiler />}></Route>
          <Route path="/compiler/:urlId" element={<Compiler />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
