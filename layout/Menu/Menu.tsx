import React, {useContext} from 'react';
import style from './Menu.module.css';
import cn from 'classnames';
import {format} from 'date-fns';
import {AppContext} from "../../context/app.context";


export const Menu = (): JSX.Element => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);

    return (
        <div>
            <ul>
                {menu.map((item) => (<li key={item._id.secondCategory}>{item._id.secondCategory}</li>))}
            </ul>
        </div>
    );
};

