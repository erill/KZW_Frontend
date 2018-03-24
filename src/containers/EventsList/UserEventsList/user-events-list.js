import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip'

import { getUserEvents } from '../../../actions';
import { Container, Table, TableHead, TableRow, TableData, TableRowHead, Checkbox } from '../events-list-styles';

class UserEventsList extends Component {
    componentDidMount() {
        this.props.getUserEvents();
    }

    renderEvents() {
        const data = this.props.events[0];
        if (data !== undefined) {
            return data.data.map(event => {
                return (
                    <TableRow key={event._id}>
                        <TableData>
                            {event.date}
                            <br />
                            {event.hour}
                        </TableData>
                        <TableData data-tip data-for='happyFace'>
                            {event.name}
                            <br />
                            <b>{event.speaker}</b>
                            <ReactTooltip id='happyFace' type='error' place='right' className='Tooltip'>
                                {event.description}
                            </ReactTooltip>
                        </TableData>
                        <TableData>
                            {event.building}, {event.room}
                        </TableData>
                        <TableData>{event.leftSpots}</TableData>
                        <TableData><Checkbox type="checkbox" /></TableData>
                    </TableRow>
                );
            });
        } 
    }

    render() {
        return (
            <Container>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableRowHead>Data</TableRowHead>
                            <TableRowHead>Warsztat</TableRowHead>
                            <TableRowHead>Miejsce </TableRowHead>
                            <TableRowHead>Ilość miejsc</TableRowHead>
                            <TableRowHead />
                        </TableRow>
                    </TableHead>
                    <tbody>
                        {this.renderEvents()}
                    </tbody>
                </Table>
            </Container>
        );
    }
}

function mapStateToProps({ events }) {
    return { events };
}

export default connect(mapStateToProps, {getUserEvents} )(UserEventsList);
