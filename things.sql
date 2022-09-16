CREATE TABLE things(
  id SERIAL PRIMARY KEY,
  body TEXT NOT NULL CHECK (body != ''),
  author VARCHAR(64) DEFAULT 'anonim',
  "createdAt" TIMESTAMP NOT NULL DEFAULT current_timestamp,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT current_timestamp
)