const faker = require("faker");

const db = require("../config/connection");
const { User, Card } = require("../models");

db.once("open", async () => {
  // clear out current db
  await User.deleteMany({});
  await Card.deleteMany({});

  //   user data
  const userData = [];

  //   generate user info
  for (let i = 0; i < 50; i++) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = "password123";

    userData.push({ username, email, password });
  }
  //   insert users into database
  const createdUsers = await User.collection.insertMany(userData);

  //    create cards
  for (let i = 0; i < 200; i++) {
    const subject = ["Math", "Computer Science", "History", "Science", "Literature"];
    const title = faker.lorem.word();
    const question = faker.lorem.words(Math.round(Math.random() * 5) + 1);
    const answer = faker.lorem.words(Math.round(Math.random() * 10) + 1);
    const difficulty = Math.round(Math.random() * 5) + 1;
    const category = subject[Math.floor(Math.random() * 5)];
    const randomUser =
      createdUsers.ops[Math.round(Math.random() * (createdUsers.ops.length - 1))];
    const createdBy = randomUser.username;


    const createdCard = await Card.create({
      title,
      question,
      answer,
      difficulty,
      category,
      createdBy,
    });

    const updatedUser = await User.updateOne(
      { username: randomUser.username },
      { $push: { Cards: createdCard._id } }
    );
  }

  console.log("Seeding complete...");
  process.exit(0);
});
