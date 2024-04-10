import { useEffect, useState } from "react";
import { getTickets } from "../library/getTickets";
import TicketAccordion from "./TicketAccordion";

const CurrentTickets = () => {
  // State to manage the current tickets
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use effect hook to fetch current tickets
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await getTickets();
        setTickets(response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <main>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-6 place-items-center bg-gray-200 rounded-t-lg p-2">
          <p className="">Ticket ID</p>
          <p className="">Ticket Type</p>
          <p className="hidden md:block">Issue Location</p>
          <p className="">Reported Date</p>
          <p className="hidden md:block">Subject</p>
          <p className="">Ticket Status</p>
        </div>
        {tickets.map((item, index) => (
          <TicketAccordion
            key={index}
            ticketID={item.id}
            ticketSubject={item.issueDescription}
            ticketStatus={item.issueStatus}
            ticketDate={item.reportedOn}
            ticketType={item.issueType}
            issueLocation={item.issueLocation}
          />
        ))}
      </main>
    </div>
  );
};

export default CurrentTickets;
