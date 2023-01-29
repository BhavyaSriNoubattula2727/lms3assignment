import React from 'react';
import Trow from './trow'
const App = () => {
    return (
            <center><table className="ui very basic collapsing celled table" style={{marginTop:"5%"}}>
                <thead>
                    <tr><th>Employee</th>
                        <th>Correct Guesses</th>
                    </tr></thead>
                <tbody>
                    <Trow name="Lena" resource="Human Resources" age="22"/>
                    <Trow name="Matthew" resource="Fabric Design" age="15"/>
                    <Trow name="Lindsay" resource="Entertainment" age="12"/>
                    <Trow name="Mark" resource="Executive" age="11"/>
                </tbody>
            </table></center>
                
    );
};

export default App;