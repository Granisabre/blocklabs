import { useContext } from "react";
import { DestinationContext, TDestinationContext } from "../../context/destinationsContext";

export const AddDestination = () => {
    const context = useContext<TDestinationContext>(DestinationContext);
    const {
        state
    } = context;
    const {
        updateCurrentDestination,
        currentDestination,
    } = state

    console.log('AddDestination', state)

    return (
        <div className="w-full grid grid-cols-3">
            <div>
                <label htmlFor='location' className="font-bold">Start Location</label>
                <input id='location' type="text" placeholder="Madrid" value={currentDestination.location} onChange={(evt: React.ChangeEvent<HTMLInputElement>) => updateCurrentDestination({ location: evt.target.value })} />
            </div>
            <div>
                <label htmlFor="destination" className="font-bold">Primary Destination</label>
                <input id="destination" type="text" placeholder="Paris" value={currentDestination.destination} onChange={(evt: React.ChangeEvent<HTMLInputElement>) => updateCurrentDestination({ destination: evt.target.value })} />
            </div>
            <div>
                <label htmlFor='distance' className="font-bold">Distance KM</label>
                <input id='distance' type="number" placeholder="1276" value={currentDestination.distance} onChange={(evt: React.ChangeEvent<HTMLInputElement>) => updateCurrentDestination({ distance: evt.target.value })} />
            </div>
        </div>
    )
}