import { v4 as uuidv4 } from "uuid";

export const user = [
  {
    userId: "b3748f34-78d9-42f5-8cb8-e1daadadae83",
    name: "kooJaYoon",
    email: "test@gmail.com",
    password: "123456789",
    nickName: "koo",
    siNm: "서울시",
    sggNm: "강남구",
  },
];

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

export async function updateProfile(modifyProfileReq) {
  const user = await findById(modifyProfileReq.userId);
  if (!user) {
    return null;
  }
  user.profileImg && (user.profileImg = modifyProfileReq.profileImg);
  user.nickName = modifyProfileReq.nickName;
  user.siNm = modifyProfileReq.siNm;
  user.sggNm = modifyProfileReq.sggNm;
  return {
    profileImg: user.profileImg,
    nickName: user.nickName,
    siNm: user.siNm,
    sggNm: user.sggNm,
  };
}
