import React, {useEffect, useState} from 'react';
import EventCalendar from "../components/EventCalendar";
import {Button, Modal, Row} from "antd";
import EventForm from "../components/EventForm";
import {useActions} from "../Hooks/useActions";
import {useTypeSelector} from "../Hooks/useTypeSelector";
import {IEvent} from "../models/IEvent";

const Event = (): JSX.Element => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true)
    };

    const addNewEvent = (event: IEvent) => {
        setIsModalVisible(false)
        createEvent(event)
    }

    const {fetchGuests, createEvent, fetchEvents} = useActions()

    const {guests, events} = useTypeSelector(state => state.event)

    const {user} = useTypeSelector(state => state.auth)

    useEffect(()=>{
        fetchGuests()
        fetchEvents(user.username)
    },[])



    return (
        <div>
            <EventCalendar events={events}/>
            <Row justify={"center"}>
                <Button onClick={showModal}>
                    Add event
                </Button>
            </Row>
            <Modal
                title="Add event"
                visible={isModalVisible}
                footer={null}
            >
                <EventForm
                    guests={guests}
                    submit={addNewEvent}
                />
            </Modal>
        </div>
    );
};

export default Event;