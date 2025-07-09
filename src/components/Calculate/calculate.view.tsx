import { useCallback, useContext, useMemo, useState } from "react"
import { DestinationContext, TDestinationContext, TStop } from "../../context/destinationsContext"

export const Calculate = () => {
    const context = useContext<TDestinationContext>(DestinationContext);
    const [totalCost, setTotalCost] = useState<number>(0)

    const handleTotalCost = useCallback(() => {
        const totalDistance = context.state.destinations.reduce((acc: number, curr: Partial<TStop>) => {
            return acc + Number(curr.distance)
        }, 0)
        setTotalCost(context.state.transportMethod.cost * totalDistance);
    }, [context]);


    return (
        <div>
            <h3>Total Cost: {totalCost.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
            })} </h3>
            <button onClick={handleTotalCost}>Calculate cost</button>
        </div>
    )
}