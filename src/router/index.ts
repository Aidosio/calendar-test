import login from "../page/Login";
import Event from "../page/Event";
import React from "react";

export interface IRoute {
    path: string
    element: React.ComponentType
}

export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/',
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, element: login}
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.EVENT, element: Event}
]