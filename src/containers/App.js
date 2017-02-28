/**
 *Compose our components
 */
import React, {Component} from 'react';
import Calc from '../components/calc';
export default class App extends Component {
    render() {
        return (
            <div className='app col-md-12'>
                    <h2 className='myName text-center'>Calc</h2>
                <Calc />
            </div>
        )
    }
}