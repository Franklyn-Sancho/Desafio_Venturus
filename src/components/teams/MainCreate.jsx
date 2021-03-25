import React, {Component} from 'react'
import './MainCreate.css'

export default class MainCreate extends Component {



    renderForm() {
        return(
            <div className="teams-create">
                <div className="title-create">
                    <strong>Create your team</strong>    
                </div>
                    <div className="form">
                        <strong className="form-title">TEAM INFORMATION</strong>
                    
                <div className="form-name">
                   <label>Name</label>
                   <input type="text"
                   name="Team Name"
                   placeholder="Insert Team Name"/>
                </div>
                <div className="form-web"> 
                    <label>Website</label>
                    <input type="text"
                    name="Team Website"
                    placeholder="http://myteam.com"/>
                </div>
                <form className="form-describe">
                    <label>Description</label>
                    <input type="text"
                    name="Description"                           
                    placeholder="Team Describe"/>
                </form>
                <form className="form-radio">
                    <p>Team type</p>
                        <input type="radio" className="form-control"
                        name="Fantasy" value="Real"/>
                        <label>Real</label>
                        <input type="radio" className="form-radio"
                        name="Fantasy" value="Fantasy"/>
                        <label>Fantasy</label>
                </form>
               </div>
              </div>

                   
            )
    }

    render() {
        return(
            <maincreate className="maincreate">
                 {this.renderForm()}           
            </maincreate>
    
            )
    }
}
        

    
	