import { TransportMethods } from "../Common/constants"

export const Info = () => {
    return (
        <div className="absolute right-0 bottom-0 flex flex-col gap-4 shadow-xl border-2 border-gray-100 p-6 rounded-md ">
            <p>Cost per km:</p>
            <ul>
                {
                    TransportMethods.map((item, key) => {
                        return <li key={key}>{item.value}: {item.cost.toLocaleString('en-US', { style:'currency', currency: 'USD'})} per km</li>
                    })
                }
            </ul>
        </div>
    )
}