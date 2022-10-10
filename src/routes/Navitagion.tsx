import { BrowserRouter } from "react-router-dom"
import { Routes, Route, NavLink, Navigate } from "react-router-dom"
import {
    FormikAbstractations,
    FormikBasicPage,
    FormikComponents,
    FormikYupPage,
    RegisterPage
} from "../03-forms/pages"

import react from '../assets/react.svg'

export const Navitagion = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={react} alt="React logo" />
                    <ul>
                        <li>
                            <NavLink to="/register" className={({ isActive }) => isActive ? 'nav-active' : ''}>Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic" className={({ isActive }) => isActive ? 'nav-active' : ''}>FormikBasicPage</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup" className={({ isActive }) => isActive ? 'nav-active' : ''}>formik yup</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components" className={({ isActive }) => isActive ? 'nav-active' : ''}>formik components</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-abstractation" className={({ isActive }) => isActive ? 'nav-active' : ''}>formik abstractation</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="formik-basic" element={<FormikBasicPage />} />
                    <Route path="formik-yup" element={<FormikYupPage />} />
                    <Route path="formik-components" element={<FormikComponents />} />
                    <Route path="formik-abstractation" element={<FormikAbstractations />} />
                    <Route path="about" element={<h1>About Page</h1>} />
                    <Route path="users" element={<h1>Users Page</h1>} />
                    <Route path="home" element={<h1>Home Page</h1>} />
                    <Route path="/*" element={<Navigate to="/home" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
