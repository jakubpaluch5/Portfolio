import React from 'react';
import Education from './education';
import Landing from './landing';
import {Switch, Route} from 'react-router-dom';
const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/education" component={Education} />
    </Switch>
)
export default Main;