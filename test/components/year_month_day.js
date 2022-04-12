import React from 'react';

export class YearMonthDay extends React.Component {
    render() {
        return(
            <span>{this.props.year}/{this.props.month}/{this.props.children}</span>
        )
    }
}