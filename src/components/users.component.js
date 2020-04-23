import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './data-table';

export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = { messages: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/messages') //changed '4000/users' to '.../messages'
            .then(res => {
                this.setState({ messages: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        return this.state.messages.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>ID</td>
                                <td>Username</td>
                                <td>Date</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}