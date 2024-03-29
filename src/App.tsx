import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "src/pages/Home";
import NotFound from "src/shared/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Other routes */}
        <Route path="/fraga" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
