import { createContext, Dispatch } from "react";

export type TStop = {
    location: string;
    destination: string;
    distance: string;
}

export type TTransportMethod = {
    value: 'Car' | 'Train' | 'Plane';
    cost: number;
}

export type TDestinationAction = 
    | { type: "ADD_DESTINATION" }
    | { type: "UPDATE_CURRENT_DESTINATION", payload: Partial<TStop> }
    | { type: "REMOVE_DESTINATION", payload: TStop }
    | { type: "SET_TRANSPORT_METHOD", payload: TTransportMethod }

export type TDestinationState = {
    // setCurrentStop: (stop: Partial<TStop>) => void;
    // removeDestination: (stop: TStop) => void;
    addDestination: () => void;
    updateCurrentDestination: (current: Partial<TStop>) => void;
    removeDestination: ( stop: TStop) => void;
    setTransportMethod: ( method: TTransportMethod) => void;
    transportMethod: TTransportMethod;
    currentDestination: Partial<TStop>;
    destinations: Partial<TStop>[];
}

export type TDestinationContext = {
    state: TDestinationState,
    dispatch: Dispatch<TDestinationAction>
}

export const DestinationContext: any = createContext<TDestinationContext | null>(null);