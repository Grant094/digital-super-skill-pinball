const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
});

const addScore = (req, res) => {
    pool.query(
        `INSERT INTO super_skill_pinball_high_scores (score, name) VALUES ($1, $2) RETURNING *`,
        [req.body.score, req.body.name],
        (err, results) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(201).redirect("https://pinball.grantoxer.com/");
            }
        }
    );
}

const getScores = (req, res) => {
    pool.query(
        `SELECT * FROM super_skill_pinball_high_scores ORDER BY score DESC`,
        (err, results) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send(results);
            }
        }
    );
}

module.exports = {
    addScore,
    getScores,
}
