import React, { useState } from "react";
import classes from './Card.module.css';
import { useSelector } from 'react-redux';
import ReactCardFlip from "react-card-flip";

import LoadingSpinner from '../UI/LoadingSpinner';
import icon from '../../assets/icon.png';


const numberFormat = (value) =>
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);


const Card = (props) => {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    const error = useSelector((state) => state.dashboard.error);

    const loading = useSelector((state) => state.dashboard.loading);

    const item = props.wealthSummary;

    return (

        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">


            <div className={classes.card}>

                {error && <p className={classes.error}>Error: {error}</p>}

                {loading && <LoadingSpinner />}

                {!loading && !error &&

                    <><div className={classes.header}>
                        <h1>Seu resumo</h1>
                        <img src={icon} alt="" />
                    </div>

                        <div className={classes.content}>
                            <p>Valor investido</p>
                            <span>{numberFormat(item.total)}</span>
                        </div>

                        <div className={classes.content}>
                            <div className={classes.contentSection}>
                                <div>
                                    <p>Rentabilidade/mês</p>
                                    <span>{item.profitability.toPrecision(4)}%</span>
                                </div>
                                <div>
                                    <p>CDI</p>
                                    <span>{item.cdi.toPrecision(3)}%</span>
                                </div>
                                <div>
                                    <p>Ganho/mês</p>
                                    <span>{numberFormat(item.gain)}</span>
                                </div>
                            </div>
                        </div>

                        <div className={classes.divider} />

                        <div className={classes.footer}>
                            <button onClick={handleClick}>VER MAIS</button>
                        </div></>}
            </div>

            <div className={classes.card} onClick={handleClick}>
                <p className={classes.error}>Error: some error occurred...</p>
            </div>



        </ReactCardFlip >



    )
}

export default Card;