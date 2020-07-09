import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Routes } from '../../constants.js';

import './Header.scss';

const Header = () => {
    const pathname = useLocation().pathname;

    return (
        <header className="header">
            MiniGame
            {pathname === Routes.MAIN_PAGE &&
                <Link className="header__link" to={`${process.env.PUBLIC_URL}${Routes.HISTORY_PAGE}`}>
                    История
                </Link>
            }
            {pathname === Routes.HISTORY_PAGE &&
                <Link className="header__link" to={`${process.env.PUBLIC_URL}${Routes.MAIN_PAGE}`}>
                    Главная
                </Link>
            }
        </header>
    );
}

export { Header };
