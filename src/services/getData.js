import axios from 'axios';

export const getData = async (URL) => {
  try {
    const res = await axios.get(`${URL}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
