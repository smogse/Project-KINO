import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../../redux/action_creators/user_action_creators';
import './registration.css';

// const handleClick = () => {
        // fetch("https://studapi.teachmeskills.by/auth/users/", {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         username: "AlinaShevchenko",
        //         email: "all2403@mail.ru",
        //         password: "12345aLiNa!"
        //     }),
        //   }).then((result) => console.log("result", result))

        // fetch("https://studapi.teachmeskills.by/auth/users/activation/",{
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         uid: "ODUy",
        //         token: "bd8p74-77b7c86800ffe06db9a6352281721c4a"
        //     }),
        // }).then((result) => console.log("result", result));

        // fetch("https://studapi.teachmeskills.by/auth/jwt/create/",{
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         email: "all2403@mail.ru",
        //         password: "12345aLiNa!"
        //     }),
        // }).then((result) => console.log("result", result));

    //     fetch("https://studapi.teachmeskills.by/auth/users/me/",{
    //         method: 'GET',
    //         headers: {
    //           'Content-Type': 'application/json',
    //           Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY1Njc4MzcyLCJqdGkiOiIwNzc3NDA0ZmE3MDk0NDFlOGJjMjBjY2Q4MzVlMjE2OSIsInVzZXJfaWQiOjg1Mn0.q8JzUpwzx4ODZApI9Y3TGtRAgQSvzvwllzdmMWVVWO0
    //         },
    //     }).then((result) => console.log("result", result.json()));
    // }

const Registration = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const handleInputChange = (e: any, setter: Function) => {
        setter(e.target.value)
    }
    const onSignUp = () => {
        dispatch(signup({
            username: name,
            email,
            password
        }))
    }

    return (
        <div className="registration-form">
            <h2>Регистрация</h2>
            <Form.Group className="mb-3" controlId="formBasicLogin">
                <Form.Label>Логин</Form.Label>
                <Form.Control type="login" className="registration-placeholder" placeholder="Введите логин" onChange={(e) => handleInputChange(e, setName)} value={name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Почта</Form.Label>
                <Form.Control type="email" className="registration-placeholder" placeholder="Введите почту" onChange={(e) => handleInputChange(e, setEmail)} value={email} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" className="registration-placeholder" placeholder="Введите пароль" onChange={(e) => handleInputChange(e, setPassword)} value={password} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Подтверждение пароля</Form.Label>
                <Form.Control type="password" className="registration-placeholder" placeholder="Подтверждение пароля" onChange={(e) => handleInputChange(e, setConfirmPassword)} value={confirmpassword} />
                <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Button variant="secondary" type="submit" className="registration-button" onClick={onSignUp}>
                Регистрация
            </Button>

            <Link to={`/signin`} className="header-link">
                <Form.Text className="text-muted no-account-text">
                    <span className="registration-text">У Вас уже есть аккаунт? Вход</span>
                </Form.Text>
            </Link>
        </div>
    )
}

export { Registration }