import React from 'react';
import { motion } from 'framer-motion';
import { Search } from '../components/shared/Search';
import { FlightCard } from '../components/flights/FlightCard';
import { useFlightStore } from '../lib/store';

export const FlightsPage = () => {
  const { flights, setFlights, setSelectedFlight } = useFlightStore();

  // Sample flights data
  React.useEffect(() => {
    const sampleFlights = [
      {
        id: '1',
        from: 'New York (JFK)',
        to: 'London (LHR)',
        departureTime: '2024-03-20T10:00:00',
        arrivalTime: '2024-03-20T22:00:00',
        price: 599,
        duration: '7h 00m',
        airline: 'SkyWings Airlines'
      },
      {
        id: '2',
        from: 'London (LHR)',
        to: 'Paris (CDG)',
        departureTime: '2024-03-20T14:00:00',
        arrivalTime: '2024-03-20T16:30:00',
        price: 199,
        duration: '2h 30m',
        airline: 'SkyWings Airlines'
      }
    ];
    setFlights(sampleFlights);
  }, [setFlights]);

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Search />
        </motion.div>

        <div className="space-y-6">
          {flights.map((flight) => (
            <motion.div
              key={flight.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <FlightCard
                flight={flight}
                onSelect={(flight) => {
                  setSelectedFlight(flight);
                  // Navigate to booking page
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};