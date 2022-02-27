import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "User 1",
    email: "userone@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "User 2",
    email: "usertwo@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
