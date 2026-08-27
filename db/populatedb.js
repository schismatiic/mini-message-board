const { Client } = require("pg");
process.loadEnvFile();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   username VARCHAR ( 255 ), text TEXT, added TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP  
);

INSERT INTO messages (username, text) 
VALUES
  ('Alex DeLarge', 'What’s it going to be then, eh?'),
('Frank Alexander', 'You’re a victim of the modern age.'),
('Mr. Deltoid', 'You’re a menace to society.'),
('Dr. Brodsky', 'It’s a matter of conditioning.');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DB_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
