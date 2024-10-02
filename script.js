import { useState, useEffect } from 'react';
import './App.scss'

function App() {
    const [email, setEmail] = useState('');
    const [fio, setFio] = useState('');
}

const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I am expecting an e-mail address!");
    } else {
        email.setCustomValidity("");
    }
});