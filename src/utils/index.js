import Axios from 'axios';

export const fetchItemsData = async (urls, cb) => {
  try {
    const itemsWithInfo = [];

    await Promise.all(
      urls.map((url) =>
        Axios.get(url).then((res) => {
          itemsWithInfo.push(res.data);
        })
      )
    );

    cb(itemsWithInfo);
  } catch (error) {
    console.log('there was an error downloading items', error);
  }
};
export const randomElement = (array) =>
  array[Math.floor(Math.random() * array.length)];
