import React, { useState } from 'react';
import './search.css';
import { Button, Offcanvas, Form } from 'react-bootstrap';


const Search = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="search">
            <input placeholder="Search" className="search-input"></input>
            <Button onClick={handleShow} className="me-2 search-button">
                <i className="bi bi-bar-chart" ></i>
            </Button>
            <Offcanvas clasName='offcanvas' show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title style={{ color: '#fff', fontSize: '24px' }}>Фильтр</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p className='filter-title'>Год выхода</p>
                    <div className='new-old-button-container'>
                        <button className='new-old-button'>Новые</button>
                        <button className='new-old-button right-button'>Старые</button>
                    </div>

                    <p className='filter-title'>Жанры</p>
                    <input className='filter-genre-input' placeholder='Введите жанр'></input>

                    <p className='filter-title'>Год производства</p>
                    <div className='filter-content-container'>
                        <div className='filter-content'>
                            <span>От</span>
                            <span className='filter-range-content'>1900</span>
                        </div>

                        <div className='filter-content'>
                            <span>До</span>
                            <span className='filter-range-content'>2022</span>
                        </div>
                    </div>
                    <Form.Range className='filter-range' />

                    <p className='filter-title'>Рейтинг</p>
                    <div className='filter-content-container'>
                        <div className='filter-content'>
                            <span>От</span>
                            <span className='filter-range-content'>1</span>
                        </div>

                        <div className='filter-content'>
                            <span>До</span>
                            <span className='filter-range-content'>10</span>
                        </div>
                    </div>
                    <Form.Range className='filter-range' />

                    <div className='filter-button-container'>
                        <button className='filter-button'>Очистить фильтр</button>
                        <button className='filter-button button-color'>Показать результаты</button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}


export { Search }