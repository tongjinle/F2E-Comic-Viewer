import data from "./data.json";
export async function getComicList() {
  return data.map(n => {
    return {
      logo: n.logo,
      id: n.id
    };
  });
}

export async function getContent(id) {
  let item = data.find(n => n.id === id);
  console.log(data, item, id);
  return item ? item.list || [] : [];
}
