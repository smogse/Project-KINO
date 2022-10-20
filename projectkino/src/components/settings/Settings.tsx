import React from 'react';
import './settings.css';
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../types/types';
import { toggleTheme } from '../../redux/action_creators/theme_action_creators';

const Settings = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state: StoreState) => state.theme.theme);
    const handleChangeTheme = () => {
        dispatch(toggleTheme());
    }
    return (

        <div className='main-block-settings'>
            <div className='wripper-block'>
                <h2 className='tittle-block'>Тема</h2>
                <div className='changes-block'>
                    <div>
                        <p className='tittle-theme-light'>{theme === 'light' ? "Светлая" : "Тёмная"} тема</p>
                        <p className='theme-light'>Используется {theme === 'light' ? "светлая" : "тёмная"} тема</p>
                    </div>
                    <button onClick={handleChangeTheme} className="settings-button">Выбрать тему</button>
                </div>
            </div>
        </div>
    )
}

export { Settings }