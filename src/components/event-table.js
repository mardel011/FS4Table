import React, { Component } from 'react';

class DataTableEvents extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.eventType}
                </td>
                <td>
                    {this.props.obj.username}
                </td>
                <td>
                    {this.props.obj.date}
                </td>
            </tr>
        );
    }
}

export default DataTableEvents;