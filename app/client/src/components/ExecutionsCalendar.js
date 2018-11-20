import React from 'react';
import dateFns from 'date-fns';
import { Glyphicon } from 'react-bootstrap';

class Calendar extends React.Component {
  state = {
    currentMonth: new Date(),
  };

  makeDateHash(executions) {
    let resultHash = {};
    for (let i = 0; i < executions.length; i++) {
      resultHash[executions[i]['date']] = true;
    }
    return resultHash;
  }

  renderHeader() {
    const dateFormat = 'MMMM YYYY';
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <Glyphicon onClick={this.prevMonth} glyph="chevron-left" />
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end">
          <Glyphicon onClick={this.nextMonth} glyph="chevron-right" />
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = 'ddd';
    const days = [];
    let startDate = dateFns.startOfWeek(this.state.currentMonth);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>,
      );
    }
    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { currentMonth } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const executionsHash = this.makeDateHash(this.props.executions);

    const dateFormat = 'D';
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = dateFns.format(day, 'YYYY-MM-DD');
        days.push(
          <div className={`col cell ${executionsHash[cloneDay] ? 'executed' : ''}`} key={day}>
            <span className="number">{formattedDate}</span>
          </div>,
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>,
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1),
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1),
    });
  };

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

export default Calendar;
