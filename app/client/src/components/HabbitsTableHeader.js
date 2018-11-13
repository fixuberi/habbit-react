import React, {Component} from 'react';
import Table from 'react-bootstrap/lib/Table';

function HabbitsTableHeader(props) {
    function setDates () {
        let dates = [];
        let lastDays = props.lastDays;
        for (let day in lastDays) {
            let date = (<th key={day}>{lastDays[day]}<br/>{day.slice(-2)}</th>);
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