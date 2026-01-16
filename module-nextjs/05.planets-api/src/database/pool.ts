import pg from 'pg';

const pool = new pg.Pool({
    connectionString: 'postgres://postgres:1797@localhost:5433/next_planets_app'
});

export { pool };