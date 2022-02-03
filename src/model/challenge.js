export const challenge = [
  {
    challengeId: 1,
    challengeName: "뚜벅이 출퇴근",
    numberOfCompletions: 5,
    treeId: 1,
    numberOfLeaf: 4,
  },
  {
    challengeId: 2,
    challengeName: "자전거 출퇴근",
    numberOfCompletions: 3,
    treeId: 2,
    numberOfLeaf: 2,
  },
  {
    challengeId: 3,
    challengeName: "버스 출퇴근",
    numberOfCompletions: 9,
    treeId: 3,
    numberOfLeaf: 1,
  },
  {
    challengeId: 4,
    challengeName: "지하철 출퇴근",
    numberOfCompletions: 20,
    treeId: 4,
    numberOfLeaf: 8,
  },
  {
    challengeId: 5,
    challengeName: "킥보드 출퇴근",
    numberOfCompletions: 5,
    treeId: 5,
    numberOfLeaf: 1,
  },
  {
    challengeId: 6,
    challengeName: "쓰레기 줍깅",
    numberOfCompletions: 2,
    treeId: 6,
    numberOfLeaf: 0,
  },
  {
    challengeId: 7,
    challengeName: "동식물 사진찍기",
    numberOfCompletions: 5,
    treeId: 7,
    numberOfLeaf: 8,
  },
];

export async function getChallengeByUserId(userId) {
  return challenge.filter((challenge) => challenge.challengeId < 5);
}
