import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.username}
                </td>
                <td>
                    {this.props.obj.message}
                </td>
                <td>
                    {this.props.obj.date}
                </td>
            </tr>
        );
    }
}

export default DataTable;