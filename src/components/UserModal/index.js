import React from 'react';
import { Calendar, momentLocalizer ,Views} from 'react-big-calendar';

import moment from 'moment';




const UserModal = ({user})=>{
    const localizer =  momentLocalizer(moment);
    return (
        <Calendar
            localizer={localizer}
            events={user.activity_periods}
            step={15}
            timeslots={8}
            startAccessor="start"
            endAccessor="end"
            defaultView={Views.WEEK}
            defaultDate={moment().toDate()}
            eventPropGetter={event => {
                const eventData = user.activity_periods.find(ot => ot.id === event.id);
                const backgroundColor = eventData && eventData.color;
                return { style: { backgroundColor } };
            }}
        />
    )
};

export default UserModal;