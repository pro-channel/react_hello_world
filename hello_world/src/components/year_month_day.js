import React from 'react';

export class YearMonthDay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <span>{this.props.year}/{this.props.month}/{this.props.children}</span>
        )
    }
}