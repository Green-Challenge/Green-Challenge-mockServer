import { user } from "./auth.js";

export async function createProfile(profileReq) {
  const userIndex = user.findIndex((user) => user.userId === profileReq.userId);
  user[userIndex] = {
    ...user[userIndex],
    ...profileReq,
  };
  return {
    ...profileReq,
  };
}
