import React, {Component} from 'react';
import Table from 'react-bootstrap/lib/Table';

function HabbitsTableHeader(props) {
    function setDates () {
        let dates = [];
        let lastDays = props.lastDays;
        for (let key in lastDays) {
            let date = (<th>{lastDays[key]}<br/>{key.slice(-2)}</th>);
            dates.push(date);
        }
        return dates;
    }

    let dateElements = setDates();

    return(
        <thead>
            <tr>
                <th></th>
                {dateElements}
            </tr>
        </thead>
    );
}

export default HabbitsTableHeader;