const {
    createEvent,
    getAllEvents,
    getEventsByName,
    getEventsByDate,
    sellTicket,
} = require("./functions");
const { pool } = require("./pool");

async function tests() {
    try {
        // 1) cria evento
        const created = await createEvent("Corrida CAIXA", "2025-02-01", 200);
        console.log("Evento criado:", created);

        // 2) lista todos
        const all = await getAllEvents();
        console.log("Todos os eventos:", all);

        // 3) busca por nome (exato; se quiser contém/case-insensitive, mude para ILIKE e %)
        const byName = await getEventsByName("Corrida CAIXA");
        console.log("Eventos por nome:", byName);

        // 4) busca por data (se event_date for TIMESTAMP, sua função usa DATE(event_date) = DATE($1))
        const byDate = await getEventsByDate("2025-02-01");
        console.log("Eventos por data:", byDate);

        // 5) vende 2 tickets
        const sold1 = await sellTicket(created.id);
        console.log("Após vender 1º ticket:", sold1);

        const sold2 = await sellTicket(created.id);
        console.log("Após vender 2º ticket:", sold2);

    } catch (err) {
        console.error("Erro nos testes:", err);
    } finally {
        // fecha conexões do pool com elegância
        await pool.end();
    }
}

tests();
