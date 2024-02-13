import { Route, Routes } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import HomePage from './pages/HomePage/HomePage'
import ProjectListPage from "./pages/ProjectListPage/ProjectListPage.jsx"
import CreateProjectPage from "./pages/CreateProjectPage/CreateProjectPage.jsx"
import ProjectDetailsPage from "./pages/ProjectDetailsPage/ProjectDetailsPage.jsx"
import EditProjectPage from "./pages/EditProjectPage/EditProjectPage.jsx"

const App = () => {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proyectos" element={<ProjectListPage />} />
        <Route path="/proyectos/:projectId" element={<ProjectDetailsPage />} />
        <Route path="/proyectos/editar/:projectId" element={<EditProjectPage />} />
        <Route path="/nuevo-proyecto" element={<CreateProjectPage />} />

        <Route path="*" element={<h1>404... D:</h1>} />

      </Routes>

    </div>
  )
}

export default App