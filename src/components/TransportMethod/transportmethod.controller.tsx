import { useContext } from "react"
import { TransportMethods } from "../Common/constants"
import { DestinationContext, TDestinationContext } from "../../context/destinationsContext"

export const TransportMethod = () => {
    const context = useContext<TDestinationContext>(DestinationContext);
    const { state: {
        setTransportMethod,
        transportMethod
    }} = context;

    return (
        <div className="flex flex-col gap-4">
        <label htmlFor="selector" className="font-bold">Transport Method</label>
        <select
            id="selector"
            name="select"
            onChange={(evt: any) => { setTransportMethod(TransportMethods[evt.target.selectedIndex - 1]); }}
            className='w-40'
            value={transportMethod.value}
        >
            <option value="" >Car, Train, Plane</option>
            {TransportMethods && TransportMethods.map((current: any, index: number) => {
                return <option value={current.value} key={index} >{current.value}</option>
            })}
        </select>
        </div>
    )
}