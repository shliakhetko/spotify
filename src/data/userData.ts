import Item from "../models/Item";
import ItemType from "../models/ItemType";
import { ListItemProps } from "../sections/Library/LibraryItem";

export type ApiType = "Track" | "Playlist" | "Artist" | "Folder" | ItemType;

export const getItem = (url: ApiType, id: string|number): Promise<Item> => {
  return fetch(`http://localhost:5168/api/${url}/${id}`)
    .then((res) => {
      return res.json() as Promise<Item>;
    })
    .catch((e) => {
      console.error(e);
      return {} as Item;
    });
};

export const getMultipleItems = async (url: ApiType, ids:(string|number)[]): Promise<Item[]> => {
  let promises: Promise<Item>[] = [];

  ids.forEach((id) => {
    promises.push(
      getItem(url, id)
    );
  })

  let results = Promise.all(promises);
  let items:Item[] = [];

  (await results).forEach((res) => {
    items = [...items, res];
  });

  return items || [];
};

export const getItems = (url: ApiType): Promise<Item[]> => {
  return fetch(`http://localhost:5168/api/${url}`)
    .then((response) => response.json())
    .then((res) => {
      return res as Item[];
    })
    .catch((e) => {
      console.error(e);
      return [];
    });
};

export const getMultipleTypeItems = async (urls: ApiType[]): Promise<Item[]> => {
  let promises: Promise<Item[]>[] = [];

  urls.forEach((url) => {
    promises.push(
      getItems(url)
    );
  })

  let results = Promise.all(promises);
  let items:Item[] = [];

  (await results).forEach((res) => {
    items = [...items, ...res];
  });

  return items || [];
};

export const getRandomItems = async (urls: ApiType[], amount: number): Promise<Item[]> => {
  let items = await getMultipleTypeItems(urls);

  items = shuffle(items);

  return items.slice(0, amount);
};

export const shuffle = (items:Item[]):Item[] => {
  let currentIndex = items.length;

  while (currentIndex != 0) {

    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [items[currentIndex], items[randomIndex]] = [
      items[randomIndex], items[currentIndex]];
  }

  return items || [];
}