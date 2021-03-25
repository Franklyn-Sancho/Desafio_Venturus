import React from 'react'
import { Switch, Route } from 'react-router'

import TeamsCreate from './components/teams/TeamsCreate'
import Main from './components/template/Main'

export default props =>
<Switch>
	<Route path='/teams' component={TeamsCreate} />
	<Route path='/' component={Main} />
</Switch>