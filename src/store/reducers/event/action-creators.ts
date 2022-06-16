import {EventActionEnum, SetEventAction, SetGuestsAction} from "./types";
import {IUser} from "../../../models/IUser";
import {IEvent} from "../../../models/IEvent";
import {AppDispatch} from "../../index";
import axios from "axios";
import UserService from "../../../api/UserService";
import Event from "../../../page/Event";

export const EventActionCreators = {
    setGuests: (payload: IUser[]): SetGuestsAction => ({type: EventActionEnum.SET_GUESTS, payload}),
    setEvent: (payload: IEvent[]): SetEventAction => ({type: EventActionEnum.SET_EVENT, payload}),
    fetchGuests:  () => async (dispatch: AppDispatch) => {
        try {
            const guests = await UserService.getUsers()
            dispatch(EventActionCreators.setGuests(guests.data))
        } catch (e) {
            console.log(e)
        }
    },
    createEvent:  (event: IEvent) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem("events") || '[]'
            const json = JSON.parse(events) as IEvent[]
            json.push(event)
            dispatch(EventActionCreators.setEvent(json))
            localStorage.setItem('events', JSON.stringify(json))
        } catch (e) {
            console.log(e)
        }
    },
    fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem("events") || '[]'
            const json = JSON.parse(events) as IEvent[]
            const currentUserEvents = json.filter(ev => ev.author === username || ev.guest === username)
            dispatch(EventActionCreators.setEvent(currentUserEvents))
        } catch (e) {
            console.log(e)
        }
    }
}