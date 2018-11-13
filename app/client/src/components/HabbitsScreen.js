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
                "date": "2018-11-12", 
                "habbit_id": 1, 
                "id": 1
            },
            {
                "date": "2018-11-11", 
                "habbit_id": 1, 
                "id": 2
            }
        ], 
        "id": 1, 
        "name": "wake up earlyssssss sssssssss sssssss", 
    }, 
    {
        "executions": [
            {
                "date": "2018-11-09", 
                "habbit_id": 1, 
                "id": 3
            }
        ], 
        "id": 3, 
        "name": "do something", 
    }, 
    {
        "executions": [
            {
                "date": "2018-11-12", 
                "habbit_id": 1, 
                "id": 1
            }  
        ], 
        "id": 4, 
        "name": "be positivity", 
    }
];
export default HabbitsScreen;