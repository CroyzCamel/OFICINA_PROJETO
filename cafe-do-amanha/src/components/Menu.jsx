import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './Menu.css';

// Importe suas imagens
import coffee1 from '../assets/images/graos.jpg';
import coffee2 from '../assets/images/petit.jpg';
import coffee3 from '../assets/images/croissant.jpeg';
import coffee4 from '../assets/images/milk.jpeg';
import coffee5 from '../assets/images/cha.jpeg';

function Menu() {
    const [currentImage, setCurrentImage] = useState(coffee1);

    /* Aqui eu fiz a criação do objeto feito para trocar o switch case e gerar um código mais maleavel */
    const images = {
        cafes: coffee1,
        sobremesas: coffee2,
        especiais: coffee3,
        'bebidas-geladas': coffee4,
        chas: coffee5,
    };

    return (
        <div className="menu-container">
            <div className="menu-header">
                <h1>Café do Amanhã</h1>
            </div>

            <div className="menu-content">
                <div className="menu-image">
                    <img src={currentImage} alt="Menu" />
                </div>

                <div className="menu-tabs">
                    <Tabs
                        defaultActiveKey="cafes"
                        id="styled-menu-tabs"
                        className="mb-3"
                        onSelect={(key) => {
                            setCurrentImage(images[key])
                        }}
                    >
                        <Tab eventKey="cafes" title="Cafés ☕">
                            <ul className="menu-list">
                                <li>Águas de Março ☕ <span>R$ 5,00</span><small>Café com leite e toque de baunilha</small></li>
                                <li>Sampa ☕ <span>R$ 6,50</span><small>Café espresso intenso</small></li>
                                <li>Garota de Ipanema ☕ <span>R$ 7,00</span><small>Café com leite e chantilly</small></li>
                                <li>Chega de Saudade ☕ <span>R$ 6,00</span><small>Café com canela e chocolate</small></li>
                                <li>Carinhoso ☕ <span>R$ 8,00</span><small>Café com leite e caramelo</small></li>
                                <li>Cappuccino Malandragem ☕ <span>R$ 9,00</span><small>Café com chantilly e canela</small></li>
                            </ul>
                        </Tab>
                        <Tab eventKey="sobremesas" title="Sobremesas 🍰">
                            <ul className="menu-list">
                                <li>Doce de Maracujá <span>R$ 8,00</span><small>Doce cremoso de maracujá com calda</small></li>
                                <li>Romeu e Julieta <span>R$ 9,00</span><small>Goiabada com queijo cremoso</small></li>
                                <li>Chão de Giz <span>R$ 10,00</span><small>Brigadeiro gourmet com raspas de chocolate</small></li>
                                <li>Bolinho de Chuva <span>R$ 6,50</span><small>Bolinho frito com canela e açúcar</small></li>
                                <li>Coração Bobo <span>R$ 7,50</span><small>Pudim de leite condensado com calda de caramelo</small></li>
                                <li>Pettit Gateau Ilegais <span>R$ 12,00</span><small>Bolo de chocolate com recheio cremoso</small></li>
                            </ul>
                        </Tab>
                        <Tab eventKey="especiais" title="Especiais 🎵">
                            <ul className="menu-list">
                                <li>Tarde em Itapoã <span>R$ 12,00</span><small>Café especial com notas de caramelo</small></li>
                                <li>O Canto da Cidade <span>R$ 10,00</span><small>Café com leite e especiarias</small></li>
                                <li>Fora da Ordem <span>R$ 11,50</span><small>Café com licor de chocolate</small></li>
                                <li>O Leãozinho <span>R$ 9,50</span><small>Café com leite e canela</small></li>
                                <li>Iron Maiden <span>R$ 11,50</span><small>Café forte com toque de baunilha</small></li>
                                <li>Metallica <span>R$ 9,50</span><small>Café espresso com chantilly</small></li>
                            </ul>
                        </Tab>
                        <Tab eventKey="bebidas-geladas" title="Bebidas Geladas 🥤">
                            <ul className="menu-list">
                                <li>Sorvete de Baunilha <span>R$ 7,00</span><small>Sorvete cremoso de baunilha</small></li>
                                <li>Milk Shake de Chocolate <span>R$ 10,00</span><small>Milk shake com chocolate belga</small></li>
                                <li>Milk Shake de Morango <span>R$ 10,00</span><small>Milk shake com morangos frescos</small></li>
                                <li>Vitamina de Banana <span>R$ 8,00</span><small>Vitamina com banana e leite</small></li>
                                <li>Vitamina de Morango <span>R$ 8,50</span><small>Vitamina com morango e leite</small></li>
                            </ul>
                        </Tab>
                        <Tab eventKey="chas" title="Chás 🍵">
                            <ul className="menu-list">
                                <li>Chá de Hortelã <span>R$ 4,50</span><small>Chá refrescante de hortelã</small></li>
                                <li>Chá Verde <span>R$ 5,00</span><small>Chá verde com notas suaves</small></li>
                                <li>Chá de Camomila <span>R$ 4,50</span><small>Chá relaxante de camomila</small></li>
                                <li>Chá de Frutas Vermelhas <span>R$ 6,00</span><small>Chá com blend de frutas vermelhas</small></li>
                                <li>Chá de Gengibre e Limão <span>R$ 5,50</span><small>Chá com gengibre e toque cítrico</small></li>
                            </ul>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
export default Menu;