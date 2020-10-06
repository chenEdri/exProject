import React, { Component } from "react";
import { ShowTime } from './ShowTime.jsx'
import { CountDown } from './CountDown.jsx'

import { Link } from 'react-router-dom'

export class Home extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <h1></h1>
                </header>
                <main>
                    <ShowTime />
                    <CountDown />
                   <Link to="/user"></Link>
                </main>
            </div>
        )
    }
}