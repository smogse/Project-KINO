import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signin } from '../../redux/action_creators/user_action_creators';
import './signin.css';

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const passRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const handleEmailChange = (e: any) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value)
    }
    const onSignIn = (e: any) => {
        if (email === '') {
            emailRef.current.focus();
        } else if (password === '') {
            passRef.current.focus();
        }
        console.log(email, password)
        dispatch(signin({ email, password }, navigate))
    }
    return (
        <div className="signin-form">
            <h2>Вход</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Почта</Form.Label>
                <Form.Control ref={emailRef} type="email" className="signin-placeholder" placeholder="Введите почту" onChange={handleEmailChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control ref={passRef} type="password" className="signin-placeholder" placeholder="Введите пароль" onChange={handlePasswordChange} />
            </Form.Group>
            <Button variant="secondary" type="submit" className="signin-button" onClick={onSignIn}>
                Войти
            </Button>
            <Link to={`/registration`} className="header-link">
                <Form.Text className="text-muted no-account-text">
                    <span>У Вас нет аккаунта? Регистрация</span>
                </Form.Text>
            </Link>
        </div>
    )
}


export { SignIn }