import { useContext } from "react";
import { DestinationContext, TDestinationContext } from "../../context/destinationsContext";

export const DestinationList = () => {
    const context = useContext<TDestinationContext>(DestinationContext);
    const {
        state
    } = context;

    const {
        destinations,
        addDestination,
        removeDestination,
    } = state;

    return (
        <div>
            { destinations && destinations.length > 0 && destinations.map((item: any, index: number) => <div key={index} onClick={() => removeDestination(item)} className="even:bg-gray-100 hover:bg-gray-200">
                {item.location} - {item.destination} - {item.distance}
            </div>)}

            <button className="text-blue-400 mt-4" onClick={() => addDestination()}>+ Add Another Destnation</button>
        </div>
    )
}