'use strict'
import { FC, ReactNode, useReducer } from "react"
import { DestinationContext, TDestinationAction, TDestinationState, TStop, TTransportMethod } from "./destinationsContext"


export const DestinationReducer = (state: TDestinationState, action: TDestinationAction): TDestinationState => {
    switch(action.type) {
        case "ADD_DESTINATION": {
            const newDestination = state.currentDestination;
            const newState = newDestination.location && newDestination.destination && newDestination.distance ?
                { ...state, destinations: [...state.destinations, newDestination], currentDestination: { location: newDestination.destination, destination: "", distance: "" } } :
                state;

            localStorage.setItem('state', JSON.stringify(newState));
            return newState;
        }
        case "UPDATE_CURRENT_DESTINATION": {
            const current = { ...state.currentDestination, ...action.payload };
            localStorage.setItem('state', JSON.stringify(state))
            return { ...state, currentDestination: current };
        }
        case "REMOVE_DESTINATION": {
            const destinations = [...state.destinations]
            destinations.splice(destinations.indexOf(action.payload), 1);
            const newState = { ...state, destinations };
            localStorage.setItem('state', JSON.stringify(newState));
            return newState;
        }

        case "SET_TRANSPORT_METHOD": {
            console.log('SET_TRANSPORT_METHOD', action.payload)
            const newState = {...state, transportMethod: action.payload }
            localStorage.setItem('state', JSON.stringify(newState));
            return newState;
        }
        default: return state;
    }
}

export type TDestinationProvider = {
    children: ReactNode,
}

export const DestinationProvider: FC<TDestinationProvider> = (props) => {
    const { children } = props;
    const cachedStateString = localStorage.getItem('state');
    const cachedState = cachedStateString ? JSON.parse(cachedStateString) : {}
    const [state, dispatch] = useReducer(DestinationReducer, {
        addDestination: () => dispatch({ type: "ADD_DESTINATION" }),
        updateCurrentDestination: (current: Partial<TStop>) => dispatch({ type: "UPDATE_CURRENT_DESTINATION", payload: current }),
        removeDestination: (stop: TStop) => dispatch({ type: "REMOVE_DESTINATION", payload: stop }),
        setTransportMethod: (method: TTransportMethod) => dispatch({ type: "SET_TRANSPORT_METHOD", payload: method }),
        transportMethod: { value: '', cost: 0 },
        currentDestination: {},
        destinations: [],

        ...cachedState
    })

    return <DestinationContext.Provider value={{
        state, dispatch
    }}>
        {children}
    </DestinationContext.Provider>
}