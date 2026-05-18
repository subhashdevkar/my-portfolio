import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import WannaKnowMore from "./pages/WannaKnowMore"

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wanna-know-more" element={<WannaKnowMore />} />
    </Routes>
  )
}

export default App