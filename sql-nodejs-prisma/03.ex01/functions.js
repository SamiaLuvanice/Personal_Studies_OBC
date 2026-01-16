const { query } = require("./pool");

async function createEvent(name, eventDate, totalTickets) {
    if (typeof totalTickets !== "number" || totalTickets <= 0) {
        throw new Error("Total tickets must be greater than 0.");
    }
    const { rows } = await query(
        `INSERT INTO events (name, event_date, total_tickets)
     VALUES ($1, $2, $3)
     RETURNING id, name, event_date AS "eventDate",
               total_tickets AS "totalTickets", tickets_sold AS "ticketsSold";`,
        [name, eventDate, totalTickets]
    );
    return rows[0];
}

async function getAllEvents() {
    const { rows } = await query(
        `SELECT id, name,
            event_date AS "eventDate",
            total_tickets AS "totalTickets",
            tickets_sold AS "ticketsSold"
     FROM events;`
    );
    return rows;
}

async function getEventsByName(name) {
    const { rows } = await query(
        `SELECT id, name,
            event_date AS "eventDate",
            total_tickets AS "totalTickets",
            tickets_sold AS "ticketsSold"
     FROM events
     WHERE name = $1;`,
        [name]
    );
    return rows;
}

// se event_date for TIMESTAMP e você quer filtrar por DIA:
async function getEventsByDate(eventDate) {
    const { rows } = await query(
        `SELECT id, name,
            event_date AS "eventDate",
            total_tickets AS "totalTickets",
            tickets_sold AS "ticketsSold"
     FROM events
     WHERE DATE(event_date) = DATE($1);`,
        [eventDate]
    );
    return rows;
}

async function sellTicket(eventId) {
    const { rows } = await query(
        `UPDATE events
     SET tickets_sold = tickets_sold + 1
     WHERE id = $1
       AND event_date > NOW()
       AND tickets_sold < total_tickets
     RETURNING id, name,
               event_date AS "eventDate",
               total_tickets AS "totalTickets",
               tickets_sold AS "ticketsSold";`,
        [eventId]
    );

    if (rows.length === 0) {
        console.log("Cannot sell ticket: event already ended, sold out, or not found!");
        return null;
    }
    return rows[0];
}

module.exports = {
    createEvent,
    getAllEvents,
    getEventsByName,
    getEventsByDate,
    sellTicket,
};
