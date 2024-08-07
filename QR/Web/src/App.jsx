import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pageprescription from "./Pageprescription";

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route path="prescription/:id" element={<Pageprescription />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

// http://localhost:5173/prescription/669915637ae10ff9f4f5ecac