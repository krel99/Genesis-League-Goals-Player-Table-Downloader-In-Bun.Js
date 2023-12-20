import fs from "fs";
const { mkdirSync } = fs;
const { existsSync } = fs;

const userHive = "greenmask9";

async function fetchData(user) {
  const response = await Bun.fetch(`https://us-central1-gls-api-384314.cloudfunctions.net/PlayerStats?${user}`);
  console.log(response);
  const players = await response.json();
  return players;
}

function formatDateEU() {
  const date = new Date();
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}

async function formatDataToCsv(playersData) {
  //extracting foil information
  const playersDataFixedFoil = playersData.map((subArray) => {
    const str = subArray[0];
    if (str.length >= 5) {
      subArray[0] = str[str.length - 5];
    }
    return subArray;
  });

  //Adding a Header row
  //Efficiency: it would be more efficient to add headerRow in the end?
  const headerRow = [
    "foil",
    "copies",
    "player",
    "position",
    "pass",
    "shoot",
    "dribble",
    "intercept",
    "block",
    "tackle",
    "offensive_sum",
    "defensive_sum",
    "total_sum",
    `price_${formatDateEU().replace(/-/g, "_")}_cest`,
  ];
  const jsonArr = [[headerRow], playersDataFixedFoil].flat();

  //Formatting
  const csvString = jsonArr.map((player) => player.join(",")).join("\n");
  return csvString;
}

function createUserFolder(user) {
  return mkdirSync(`databases/users/${user}/`, { recursive: true });
}

function writeDataToCsv(user, data) {
  if (!existsSync(`databases/users/${user}/`)) {
    createUserFolder(user);
  }
  return Bun.write(`databases/users/${user}/${user}Cards.csv`, data);
}

const playersData = await formatDataToCsv(await fetchData(userHive));

writeDataToCsv(userHive, playersData);
