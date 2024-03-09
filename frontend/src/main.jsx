import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginForm from './screens/login.jsx'
import RegistrationForm from './screens/register.jsx'
import QuizApp from './screens/quiz.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginForm />
  </React.StrictMode>,
)
