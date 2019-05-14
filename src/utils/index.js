import data from './data.json';
import axios from 'axios';
// const env = 'dev';
// const env = 'dev-local';
const env = 'prod';

let request;
if (env === 'dev-local') {
  request = axios.create({
    baseURL: 'http://localhost:3000',
  });
} else {
  request = axios.create({
    baseURL: 'https://api.puman.xyz/tea/comic',
  });
}

export async function getComicList() {
  if (env === 'dev') {
    return data.map(n => ({
      logo: n.logo,
      id: n.id,
    }));
  }

  // prod
  const { data } = await request.get('/comicList');
  console.log(data);
  return data.code === 0 ? data.list : [];
}

export async function getContent(id) {
  if (env === 'dev') {
    const item = data.find(n => n.id === id);
    console.log(data, item, id);
    return item ? item.list || [] : [];
  }
  // prod
  const { data } = await request.get(`/content?title=${id}`);
  return data.code === 0 ? data.list : [];
}

const FAV = 'fav_key';
// 获取书签列表
export async function getFavList() {
  let list;
  const sourceData = localStorage.getItem(FAV);
  try {
    list = sourceData ? JSON.parse(sourceData) : [];
  } catch (e) {
    list = [];
  }
  return list;
}

// 设置书签
export async function setFav(id, index) {
  const list = await getFavList();

  const item = list.find(n => n.id === id);
  if (item) {
    item.index = index;
  } else {
    list.push({ id, index });
  }

  localStorage.setItem(FAV, JSON.stringify(list));
}

// 删除书签
export async function removeFav(id) {
  let list = await getFavList();
  list = list.filter(n => n.id !== id);
  localStorage.setItem(FAV, JSON.stringify(list));
}
