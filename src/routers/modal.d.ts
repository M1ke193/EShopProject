import React from "react";
import PropTypes from 'prop-types';
export interface RouteConfig {
    path: string;
    element: React.Element;
    props?: PropTypes
    children?: Array<childrenItem>;
}

interface childrenItem {
    path: string;
    Component: React.Element;
}

export type RouteArr = Array<RouteConfig[]>