import './Main.css'
import React, {Component} from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import TeamsCreate from '../teams/TeamsCreate'


const initialState = {
	team: {name: '', description: ''},
	list: []
}

export default class Main extends Component {

	save() {
		const team = this.state.team
	}

	renderTable() {
		return(
			<main className="main">
			<div className="group-teams">
				<div className="teams1">
					<strong>My teams</strong>
					<Link to="/teams">	
						<button onClick={ TeamsCreate }>
							+
						</button>
					</Link>
				</div>
				<div className="btn-group">
  					<select className="sel-name">
  						<option value="valor1">Name</option>
  					</select>
  					<select className="sel-desc">
  						<option value="valor2">Description</option>
  					</select>
					<table className="table">
  						<tbody>
  							<tr>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
				
			
			<div className="group-top">
				<div className="top1">
					<strong>Top 5</strong>
				</div>
				<div className="titulo">
					<strong className="t1">Hightest Avg Age</strong>
					<strong className="t2">Lowest Avg Age</strong>
				</div>
					<table className="table-top">
							<tr>
								<td>Inter Milan</td>
							</tr>
						</table>
						<table className="table-top1">
							<tr>
								<td>Inter Milan</td>
							</tr>
						</table>
					</div>
				
			</main>
			)
	}

	

	render() {
		return(
			<main>
				{this.renderTable() }
			</main>
			)
	}
}

		
			



                  
