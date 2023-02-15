const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
let url =
  "mongodb+srv://gretatomasoni:0000@cluster0.ightwgc.mongodb.net/prova?retryWrites=true&w=majority";
const client = new MongoClient(url);

// Database Name
const dbName = "school";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  // Create collection
  const db = client.db(dbName);
  const collectionOne = db.collection("students");
  const collectionTwo = db.collection("courses");

  //   ! Insert records - collection students
  //   const insertResultOne = await collectionOne.insertMany([
  //     {
  //       nome: "Greta",
  //       cognome: "Tomasoni",
  //       matricola: 0000,
  //       corsi: ["corso 1", "corso 2", "corso 3"],
  //       esami: ["esame 1", "esame 2", "esame 3"],
  //     },
  //     {
  //       nome: "Pippo",
  //       cognome: "Aaaaaa",
  //       matricola: 1111,
  //       corsi: ["corso 2", "corso 3", "corso 4"],
  //       esami: ["esame 1", "esame 4", "esame 5"],
  //     },
  //     {
  //       nome: "Paperino",
  //       cognome: "Bbbbbb",
  //       matricola: 2222,
  //       corsi: ["corso 1", "corso 3", "corso 4"],
  //       esami: ["esame 2", "esame 3", "esame 4"],
  //     },
  //   ]);
  //   console.log("Inserted documents =>", insertResultOne);

  //   ! Insert records - collection courses
  //   const insertResultTwo = await collectionTwo.insertMany([
  //     {
  //       corso: "corso 1",
  //       materia: "materia 1",
  //       docente: "Qui",
  //     },
  //     {
  //       corso: "corso 2",
  //       materia: "materia 2",
  //       docente: "Quo",
  //     },
  //     {
  //       corso: "corso 3",
  //       materia: "materia 3",
  //       docente: "Qua",
  //     },
  //   ]);
  //   console.log("Inserted documents =>", insertResultTwo);

  //   ! Find a record
  //   const filteredDocs = await collectionOne.find({ nome: "Greta" }).toArray();
  //   console.log("Found documents filtered by { nome: Greta } =>", filteredDocs);

  //   ! Update a record
  //   const updateResult = await collectionOne.updateOne(
  //     { nome: "Paperino" },
  //     { $set: { nome: "Pluto" } }
  //   );
  //   console.log("Updated documents =>", updateResult);

  //   ! Insert records - collection students - record to delete
  //   const insertResultOne = await collectionOne.insertOne({
  //     nome: "Paperino",
  //     cognome: "Cccccc",
  //     matricola: 3333,
  //     corsi: ["corso 1", "corso 2", "corso 3"],
  //     esami: ["esame 1", "esame 2", "esame 3"],
  //   });
  //   console.log("Inserted documents =>", insertResultOne);

  //   ! Remove a record
  //   const deleteResult = await collectionOne.deleteOne({ nome: "Paperino" });
  //   console.log("Deleted documents =>", deleteResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
