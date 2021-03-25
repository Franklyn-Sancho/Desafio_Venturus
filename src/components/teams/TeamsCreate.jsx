import './TeamsCreate.css'
import React, { Component } from 'react'
import axios from 'axios'
import Header from '../template/Header'
import Footer from '../template/Footer'
import MainCreate from './MainCreate'



export default class TeamsCreate extends Component {
	render() {
        return (
        	<div className="group-create">
           		<Header>
           		</Header>
           		<MainCreate>
           		</MainCreate>
				<Footer>
				</Footer>
			</div>
        )
    }
}