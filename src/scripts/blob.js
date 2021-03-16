const isObject = (obj) => {
  var type = typeof obj;
  return (
    type === "object" &&
    !!obj &&
    Object.prototype.toString.call(obj) !== "[object Array]"
  );
};

const arrayToBlobLinks = async (array) => {
  let blobUrl = [];
  for (let i = 0; i < array.length; ++i) {
    const response = await fetch(array[i]);
    const blob_data = await response.blob();
    blobUrl[i] = URL.createObjectURL(blob_data);
  }
  return blobUrl;
};

const linkToBlobLink = async (link) => {
  const response = await fetch(link);
  const blob_data = await response.blob();
  return URL.createObjectURL(blob_data);
};

const setLink = async (data, prop) => {
  const blobFunction = { images: arrayToBlobLinks, image: linkToBlobLink }[
    prop
  ];
  data[prop] = blobFunction ? await blobFunction(data[prop]) : data[prop];
};

const dataToBlob = (data) => {
  for (const prop in data) {
    if (isObject(data[prop])) dataToBlob(data[prop]);
    else setLink(data, prop);
  }
};

export default dataToBlob;
