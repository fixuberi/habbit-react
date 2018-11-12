import React, {Component} from 'react';
import HabbitsScreenHeader from './HabbitsScreenHeader';
import HabbitsTable from './HabbitsTable';
import Grid from 'react-bootstrap/lib/Grid'

class HabbitsScreen extends React.Component {
    render() {
        return(
            <Grid>
                <HabbitsScreenHeader />
                <HabbitsTable habbits={table}/>
            </Grid>
        );
    }
}
const table = [
    {
        "executions": [
            {
                "date": "2018-11-04", 
                "habbit_id": 1, 
                "id": 1
            }
        ], 
        "id": 1, 
        "name": "wake up earlyssssss sssssssss sssssss", 
    }, 
    {
        "executions": [], 
        "id": 3, 
        "name": "do something", 
    }, 
    {
        "executions": [], 
        "id": 4, 
        "name": "something", 
    }
];
export default HabbitsScreen;