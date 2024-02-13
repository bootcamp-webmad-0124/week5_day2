import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "https://project-management-api-4641927fee65.herokuapp.com"

const CreateProjectPage = () => {

    const [projectData, setProjectData] = useState({
        title: '',
        description: ''
    })

    const navigate = useNavigate()

    const handleFormSubmit = (e) => {
        e.preventDefault()

        axios
            .post(`${API_BASE_URL}/projects`, projectData)
            .then(() => navigate('/proyectos'))
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.target
        setProjectData({ ...projectData, [name]: value })
    }


    return (
        <div className="CreateProjectPage">
            <h3>Nuevo proyecto</h3>
            <hr />

            <form onSubmit={handleFormSubmit}>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={projectData.title}
                    onChange={handleInputChange}
                />

                <label>Description:</label>
                <textarea
                    type="text"
                    name="description"
                    value={projectData.description}
                    onChange={handleInputChange}
                />

                <button type="submit">Crear proyecto</button>
            </form>
        </div>
    );
}

export default CreateProjectPage;
