import { FC } from 'react';
import { TransportMethod } from '../TransportMethod/transportmethod.controller';
import { Calculate } from '../Calculate/calculate.view';
import { Info } from '../Info/info.controller';
import { DestinationProvider } from '../../context/destinationProvider';
import { AddDestination } from '../AddDestination/add-destination.controller';
import { DestinationList } from '../DestinationList/destination-list.controller';

const HomePage: FC = () => {
  return (
    <DestinationProvider>
      <div className="max-w-3/4 flex flex-col align-center"> {/* section wrapper */}
        <h1 className="text-center text-4xl font-extrabold my-8">Journey Expenses Calculator</h1>
        {/* form container */ }
        <div className="max-w-[800px] m-auto gap-8 flex flex-col">
          <AddDestination />
          <DestinationList />

          <div className="flex flex-col gap-8 relative">{/* summary section container */ }
            <TransportMethod />
            <Calculate />
            <Info />
          </div>
        </div>
      </div>
    </DestinationProvider>
  );
};

export default HomePage;
