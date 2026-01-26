const {
  createEvent,
  getAllEvents,
  getEventByName,
  getEventsByDate,
  sellTicket,
} = require("./functions");

async function tests() {
  //await createEvent("Festival Zepelin", new Date("2023-03-05"), 5);
  //await createEvent("Garota VIP", new Date("2023-06-06"), 100);

  //const result = await getAllEvents();
  //console.log(result);

  //const result2 = await getEventByName("Show 1");
  //console.log(result2);

  //const result3 = await getEventsByDate(new Date("2026-01-01"));
  //console.log(result3);

  await sellTicket(3);
  await sellTicket(3);
  await sellTicket(3);
  await sellTicket(3);
  await sellTicket(3);
  await sellTicket(3);

  const result = await getAllEvents();
  console.log(result);

  process.exit(0);
}

tests();
