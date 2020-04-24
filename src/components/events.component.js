import React, { Component } from 'react';
import axios from 'axios';
import DataTableEvents from './event-table';

//changed 'Users' to 'Events' below
export default class Events extends Component { 

    constructor(props) {
        super(props);
        this.state = { events: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/events')
            .then(res => {
                this.setState({ events: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTableEvents() {
        return this.state.events.map((data, i) => {
            return <DataTableEvents obj={data} key={i} />;
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
                                <td>Event Type</td>
                                <td>Username</td>
                                <td>Date</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTableEvents()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}