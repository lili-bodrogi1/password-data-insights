A complex data project combining relational (Oracle SQL) and NoSQL (MongoDB) database systems. The dataset is based on real-life password breaches (RockYou, AshleyMadison, LinkedIn) and enriched with job, location, and user data.

## 🔍 Project Goals

- Analyze the correlation between password strength and user/job/location info
- Design a relational database (Oracle) with sequences, triggers, and procedures
- Rebuild the data model in NoSQL (MongoDB) with embedded documents
- Optimize queries for performance in both environments

## 🛠️ Technologies

- Oracle SQL (dbForge, SQL Developer)
- MongoDB
- JSON/CSV/TXT data handling
- Draw.io (ER diagrams)

## 📁 Structure

| Folder         | Contents                                     |
|----------------|----------------------------------------------|
| `docs/`        | Project documentation and ER diagrams        |
| `data/`        | Raw and processed data files                 |
| `sql/`         | All SQL scripts (DDL, DML, queries, etc.)    |
| `nosql/`       | MongoDB structure, JSON data, and queries    |
| `diagrams/`    | Visuals: ER model, connection diagrams       |

## 📊 Sample Business Questions

- How many people under the age of 25 earn over €80,000 per year?
- What is the most commonly used password among hacked databases?
- What are the most successful types of cyberattacks?
- How does password frequency relate to job types and salary?

## 💡 Highlights

- Generated >500,000 records from real data and generators
- Wrote triggers and procedures for dynamic email assignment
- Converted relational structure to NoSQL and optimized for query speed
- Created indexes and benchmarked query plans

## 🧠 What I’d do differently today

- Use Python to automate data generation and transformation
- Replace Oracle with PostgreSQL or cloud-based BigQuery
- Use MongoDB Atlas for cloud NoSQL
- Visualize results in Tableau or Power BI
