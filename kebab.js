const kebabize = (kebab, data) => {
  const returnData = {};
  for (let key of Object.keys(data)) {
    returnData[kebab(key)] = data[key];
  }
  return returnData;
};

const kebab = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
