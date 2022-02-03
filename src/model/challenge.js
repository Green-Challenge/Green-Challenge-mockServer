export const challenge = [
  {
    challengeId: 1,
    challengeName: "뚜벅이 출퇴근",
    numberOfCompletions: 5,
    treeId: 1,
    numberOfLeaf: 4,
    percent: 20.2,
    rewardToken: 10000,
    numberOfChallengers: 100,
    isCompelete: false,
    isParticipating: true,
    hasTag: ["환경지킴", "운동효과"],
    description: `내 몸도 지구도 함께 건강해지는 뚜벅이 출퇴근 챌린지!
		네이버스 이웃들과 함께 1,000km를 걸어 지구에게 
		나무 한 그루를 심는 것과 같은 효과를 선물해 주세요.`,
    challengeImg: "1",
    current: 3.2,
    target: 10.2,
    treeGrouwth: 1,
  },
  {
    challengeId: 2,
    challengeName: "자전거 출퇴근",
    numberOfCompletions: 3,
    treeId: 2,
    numberOfLeaf: 2,
    percent: 80.1,
    rewardToken: 9000,
    numberOfChallengers: 80,
    isCompelete: true,
    isParticipating: true,
    hasTag: ["환경지킴", "탄소배출제로"],
    description: `다리도 튼튼, 지구도 튼튼 자전거 출퇴근 챌린지!
		네이버스 이웃들과 함께 1,000km를 이동해 지구에게 나무 한 그루를 심는 것과 같은 효과를 선물해 주세요.`,
    challengeImg: "2",
    current: 3.2,
    target: 10.2,
    treeGrouwth: 3,
  },
  {
    challengeId: 3,
    challengeName: "버스 출퇴근",
    numberOfCompletions: 9,
    treeId: 3,
    numberOfLeaf: 1,
    percent: 10.2,
    rewardToken: 8000,
    numberOfChallengers: 20,
    isCompelete: true,
    isParticipating: true,
    hasTag: ["탄소감축", "타기만해도챌린지"],
    description: `승용차 대신 버스로 이동하는 출퇴근 챌린지!
		네이버스 이웃들과 함께 1,500km를 이동해 지구에게 나무 한 그루를 심는 것과 같은 효과를 선물해 주세요.`,
    challengeImg: "3",
    current: 3.2,
    target: 10.2,
    treeGrouwth: 1,
  },
  {
    challengeId: 4,
    challengeName: "지하철 출퇴근",
    numberOfCompletions: 20,
    treeId: 4,
    numberOfLeaf: 8,
    percent: 2.9,
    rewardToken: 7000,
    numberOfChallengers: 30,
    isCompelete: false,
    isParticipating: true,
    hasTag: ["탄소감축", "타기만해도챌린지"],
    description: `승용차 대신 지하철로 이동하는 출퇴근 챌린지!
		네이버스 이웃들과 함께 1,300km를 이동해 지구에게 나무 한 그루를 심는 것과 같은 효과를 선물해 주세요.`,
    challengeImg: "4",
    current: 3.2,
    target: 10.2,
    treeGrouwth: 3,
  },
  {
    challengeId: 5,
    challengeName: "킥보드 출퇴근",
    numberOfCompletions: 5,
    treeId: 5,
    numberOfLeaf: 1,
    rewardToken: 6000,
    numberOfChallengers: 40,
    isCompelete: false,
    isParticipating: false,
    hasTag: ["환경지킴", "동네한바퀴"],
    description: `가고 싶은 곳으로 편하게 이동하는 킥보드 챌린지!
		네이버스 이웃들과 함께 1,000km를 이동해 지구에게 나무 한 그루를 심는 것과 같은 효과를 선물해 주세요.`,
    challengeImg: "5",
    treeGrouwth: 3,
  },
  {
    challengeId: 6,
    challengeName: "쓰레기 줍깅",
    numberOfCompletions: 2,
    treeId: 6,
    numberOfLeaf: 0,
    rewardToken: 5000,
    numberOfChallengers: 60,
    isCompelete: false,
    isParticipating: false,
    hasTag: ["운동효과", "우리동네미화원"],
    description: `쓰레기 줍기와 걷기 운동을 동시에! 이웃들과 함께
		우리 동네 청소도 하고, 1,000km를 걸어 지구에게 
		나무 한 그루를 심는 것과 같은 효과를 선물해 주세요.`,
    challengeImg: "6",
    treeGrouwth: 3,
  },
  {
    challengeId: 7,
    challengeName: "동식물 사진찍기",
    numberOfCompletions: 5,
    treeId: 7,
    numberOfLeaf: 8,
    rewardToken: 5000,
    numberOfChallengers: 70,
    isCompelete: true,
    isParticipating: false,
    hasTag: ["환경지킴", "멍멍이", "길냥이"],
    description: `우리 동네 동식물을 자랑해 주세요! 인증샷을 남기고, 
		네이버스 이웃들과 함께 1,000km를 걸어 지구에게 
		나무 한 그루를 심는 것과 같은 효과를 선물해 주세요.`,
    challengeImg: "7",
    treeGrouwth: 3,
  },
];

export async function getChallengeByUserId(userId) {
  return challenge
    .filter((challenge) => challenge.challengeId < 5)
    .map((challenge) => ({
      challengeId: challenge.challengeId,
      challengeName: challenge.challengeName,
      numberOfCompletions: challenge.numberOfCompletions,
      treeId: challenge.treeId,
      numberOfLeaf: challenge.numberOfLeaf,
    }));
}

export async function getAllChallenge() {
  return challenge.map((challenge) => ({
    challengeId: challenge.challengeId,
    challengeName: challenge.challengeName,
    treeId: challenge.treeId,
    percent: challenge.percent,
    rewardToken: challenge.rewardToken,
    numberOfChallengers: challenge.numberOfChallengers,
    isCompelete: challenge.isCompelete,
    isParticipating: challenge.isParticipating,
  }));
}

export async function findById(challengeId) {
  return challenge
    .filter((challenge) => challenge.challengeId == challengeId)
    .map((challenge) => ({
      challengeName: challenge.challengeName,
      numberOfChallengers: challenge.numberOfChallengers,
      rewardToken: challenge.rewardToken,
      description: challenge.description,
      hasTag: challenge.hasTag,
      treeId: challenge.treeId,
      challengeImg: challenge.challengeImg,
    }))[0];
}

export async function getChallengingDetailById(challengeId) {
  return challenge
    .filter((challenge) => challenge.challengeId == challengeId)
    .map((challenge) => ({
      current: challenge.current,
      target: challenge.target,
      numberOfLeaf: challenge.numberOfLeaf,
    }))[0];
}

export async function getChallengeTreeGrowthById(challengeId) {
  return challenge
    .filter((challenge) => challenge.challengeId == challengeId)
    .map((challenge) => ({
      treeId: challenge.treeId,
      treeGrouwth: challenge.treeGrouwth,
      numberOfLeaf: challenge.numberOfLeaf,
    }))[0];
}
