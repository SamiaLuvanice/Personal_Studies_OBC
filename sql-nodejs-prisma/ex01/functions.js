const { query } = require("./pool");

async function createEvent(name, eventDate, totalTickets) {
  if (typeof totalTickets === "number" && totalTickets > 0) {
    await query(
      `INSERT INTO events (name, event_date, total_tickets) VALUES ($1, $2, $3)`,
      [name, eventDate, totalTickets],
    );
    console.log(`Event '${name}' created successfully.`);
  } else {
    throw new Error("Total tickets must be greater than zero.");
  }
}

async function getAllEvents() {
  const { rows } = await query(`
    SELECT
        id, name,
        event_date AS "eventDate",
        total_tickets AS "totalTickets",
        tickets_sold AS "ticketsSold"
    FROM events
    `);
  return rows;
}

async function getEventByName(name) {
  const { rows } = await query(
    `
      SELECT
          id, name,
            event_date AS "eventDate",
            total_tickets AS "totalTickets",
            tickets_sold AS "ticketsSold"
        FROM events
        WHERE name = $1
        `,
    [name],
  );
  return rows[0];
}

async function getEventsByDate(eventDate) {
  const { rows } = await query(
    `
        SELECT
            id, name,
            event_date AS "eventDate",
            total_tickets AS "totalTickets",
            tickets_sold AS "ticketsSold"
        FROM events
        WHERE event_date = $1`,
    [eventDate],
  );
  return rows;
}

async function sellTicket(eventId, numberOfTickets) {
  const { rows } = await query(
    `SELECT 
      id, name,
      event_date AS "eventDate",
      total_tickets AS "totalTickets",
      tickets_sold AS "ticketsSold"
      FROM events WHERE id = $1`,
    [eventId],
  );

  const event = rows[0];
  if (!event) {
    console.log("Event not found.");
    return null;
  }

  const now = new Date();
  const eventDate = new Date(event.eventDate);

  if (eventDate > now && event.ticketsSold < event.totalTickets) {
    await query(
      `UPDATE events 
            SET tickets_sold = tickets_sold + 1 
            WHERE id = $1`,
      [eventId],
    );
    console.log(`Sold ${numberOfTickets} tickets for event '${event.name}'.`);
  } else {
    console.log("Cannot sell tickets for this event.");
  }
}

module.exports = {
  createEvent,
  getAllEvents,
  getEventByName,
  getEventsByDate,
  sellTicket,
};
