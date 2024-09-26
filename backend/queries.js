const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    user: process.env.POOL_USER,
    password: process.env.POOL_PASSWORD,
    host: process.env.POOL_HOST,
    port: process.env.POOL_PORT,
    database: process.env.POOL_DATABASE,
});

const addScore = (req, res) => {
    pool.query(
        `INSERT INTO super_skill_pinball_high_scores (score, name) VALUES ($1, $2) RETURNING *`,
        [req.body.score, req.body.name],
        (err, results) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(201).redirect("http://localhost:3000/");
            }
        }
    );
}

module.exports = {
    addScore,
}
