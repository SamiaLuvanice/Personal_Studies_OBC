const users = [
  {
    id: "1",
    name: "Alice",
    email: "alice@example.com",
    password: "password123",
    role: "admin",
  },
  {
    id: "2",
    name: "Bob",
    email: "bob@example.com",
    password: "password456",
    role: "standard",
  },
  {
    id: "3",
    name: "Charlie",
    email: "charlie@example.com",
    password: "password789",
    role: "standard",
  },
];

module.exports = {
  findAll: () => users,

  findById: (id) => users.find((user) => user.id === id),

  findByEmail: (email) => users.find((user) => user.email === email),

  registerUser: (name, email, password) => {
    const userAlreadyRegistered = users.find((user) => user.email === email);
    if (userAlreadyRegistered) return null;

    const newUser = {
      id: Math.floor(Math.random() * 10000).toString(),
      name,
      email,
      password,
      role: "standard",
    };

    users.push(newUser);
    return newUser;
  },

  createUser: (name, email, password, role) => {
    const userAlreadyRegistered = users.find((user) => user.email === email);
    if (userAlreadyRegistered) return null;

    const newUser = {
      id: Math.floor(Math.random() * 10000).toString(),
      name,
      email,
      password,
      role,
    };

    users.push(newUser);
    return newUser;
  },

  deleteUser: (id) => {
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) return false;

    const [deletedUser] = users.splice(userIndex, 1);
    return deletedUser;
  },
};
