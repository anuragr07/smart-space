const { getDataFromDB } = require('./getDataFromDB');

async function main() {
  const data = await getDataFromDB();
  console.log(data);
}

main();
