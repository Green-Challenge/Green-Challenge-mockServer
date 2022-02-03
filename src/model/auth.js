import { v4 as uuidv4 } from "uuid";

export const user = [];

export async function findByEmail(email) {
  return user.find((user) => user.email === email);
}

export async function createUser(name, email, password) {
  const userId = uuidv4();
  user.push({
    userId,
    name,
    email,
    password,
  });
  return userId;
}

export async function findById(id) {
  return user.find((user) => user.userId === id);
}
