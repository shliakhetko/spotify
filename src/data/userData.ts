import Item from "../models/Item";
import ItemType from "../models/ItemType";
import { ListItemProps } from "../sections/Library/LibraryItem";

type ApiType = "Track" | "Playlist" | "Artist" | "Folder" | ItemType;

export const getItem = (url: ApiType, id: string): Promise<Item> => {
  return fetch(`http://localhost:5168/api/${url}/${id}`)
    .then((res) => {
      return res.json() as Promise<Item>;
    })
    .catch((e) => {
      console.error(e);
      return {} as Item;
    });
};

export const getItems = (url: ApiType): Promise<Item[]> => {
  return fetch(`http://localhost:5168/api/${url}`)
    .then((res) => {
      return res.json() as Promise<Item[]>;
    })
    .catch((e) => {
      console.error(e);
      return new Array(10) as Item[];
    });
};

export const library: ListItemProps[] = [
  {
    title: "PLAYLIST OOOH YEAH",
    type: ItemType.PLAYLIST,
    id: "1",
    owner: [
      {
        title: "Greg",
        type: ItemType.ARTIST,
        id: "2",
        date: new Date(),
      },
    ],
    date: new Date(),
    image:
      "https://media.istockphoto.com/id/1272809601/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D1%82%D0%B0%D0%BB%D1%96%D1%81%D0%BC%D0%B0%D0%BD-%D1%87%D0%B5%D1%80%D0%B2%D0%BE%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B3%D0%BE-%D0%B1%D0%B8%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=dBaWeqUiEJw1GZ34XkBIjQr7McwVFqMJae0w0iIjxVg=",
    contents: [],
  },
  {
    title: "Greg",
    type: ItemType.ARTIST,
    id: "2",
    date: new Date(),
    image:
      "https://media.istockphoto.com/id/1272809601/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D1%82%D0%B0%D0%BB%D1%96%D1%81%D0%BC%D0%B0%D0%BD-%D1%87%D0%B5%D1%80%D0%B2%D0%BE%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B3%D0%BE-%D0%B1%D0%B8%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=dBaWeqUiEJw1GZ34XkBIjQr7McwVFqMJae0w0iIjxVg=",
    tracks: [],
    albums: [],
    playlists: [],
    folders: [],
  },
  {
    title: "PLAYLIST OOOH YEAH",
    type: ItemType.PLAYLIST,
    id: "1",
    owner: [
      {
        title: "Greg",
        type: ItemType.ARTIST,
        id: "2",
        date: new Date(),
      },
    ],
    date: new Date(),
    image:
      "https://static.vecteezy.com/system/resources/previews/000/226/339/large_2x/85324-vector.jpg",
    contents: [],
  },
  {
    title: "PLAYLIST OOOH YEAH",
    type: ItemType.PLAYLIST,
    id: "1",
    owner: [
      {
        title: "Greg",
        type: ItemType.ARTIST,
        id: "2",
        date: new Date(),
      },
    ],
    date: new Date(),
    image:
      "https://media.istockphoto.com/id/1166608662/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B8%D0%B9-%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD-%D1%96%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D1%96%D1%97-wolf-designs.jpg?s=612x612&w=0&k=20&c=yts_svpARjtum1RoNS1AAjUv4BfIfxtfD4fM3qAvrOs=",
    contents: [],
  },
  {
    title: "PLAYLIST OOOH YEAH",
    type: ItemType.PLAYLIST,
    id: "1",
    owner: [
      {
        title: "Greg",
        type: ItemType.ARTIST,
        id: "2",
        date: new Date(),
      },
    ],
    date: new Date(),
    image:
      "https://media.istockphoto.com/id/1166608662/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B8%D0%B9-%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD-%D1%96%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D1%96%D1%97-wolf-designs.jpg?s=612x612&w=0&k=20&c=yts_svpARjtum1RoNS1AAjUv4BfIfxtfD4fM3qAvrOs=",
    contents: [],
  },
  {
    title: "PLAYLIST OOOH YEAH",
    type: ItemType.PLAYLIST,
    id: "1",
    owner: [
      {
        title: "Greg",
        type: ItemType.ARTIST,
        id: "2",
        date: new Date(),
      },
    ],
    date: new Date(),
    image:
      "https://media.istockphoto.com/id/1166608662/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B8%D0%B9-%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD-%D1%96%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D1%96%D1%97-wolf-designs.jpg?s=612x612&w=0&k=20&c=yts_svpARjtum1RoNS1AAjUv4BfIfxtfD4fM3qAvrOs=",
    contents: [],
  },
  {
    title: "PLAYLIST OOOH YEAH",
    type: ItemType.PLAYLIST,
    id: "1",
    owner: [
      {
        title: "Greg",
        type: ItemType.ARTIST,
        id: "2",
        date: new Date(),
      },
    ],
    date: new Date(),
    image:
      "https://media.istockphoto.com/id/1272809601/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D1%82%D0%B0%D0%BB%D1%96%D1%81%D0%BC%D0%B0%D0%BD-%D1%87%D0%B5%D1%80%D0%B2%D0%BE%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B3%D0%BE-%D0%B1%D0%B8%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=dBaWeqUiEJw1GZ34XkBIjQr7McwVFqMJae0w0iIjxVg=",
    contents: [],
  },
  {
    title: "Greg",
    type: ItemType.ARTIST,
    id: "2",
    date: new Date(),
    image:
      "https://media.istockphoto.com/id/1272809601/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D1%82%D0%B0%D0%BB%D1%96%D1%81%D0%BC%D0%B0%D0%BD-%D1%87%D0%B5%D1%80%D0%B2%D0%BE%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B3%D0%BE-%D0%B1%D0%B8%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=dBaWeqUiEJw1GZ34XkBIjQr7McwVFqMJae0w0iIjxVg=",
    tracks: [],
    albums: [],
    playlists: [],
    folders: [],
  },
  {
    title: "Greg",
    type: ItemType.ARTIST,
    id: "2",
    date: new Date(),
    image:
      "https://media.istockphoto.com/id/1272809601/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D1%82%D0%B0%D0%BB%D1%96%D1%81%D0%BC%D0%B0%D0%BD-%D1%87%D0%B5%D1%80%D0%B2%D0%BE%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B3%D0%BE-%D0%B1%D0%B8%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=dBaWeqUiEJw1GZ34XkBIjQr7McwVFqMJae0w0iIjxVg=",
    tracks: [],
    albums: [],
    playlists: [],
    folders: [],
  },
  {
    title: "PLAYLIST OOOH YEAH",
    type: ItemType.PLAYLIST,
    id: "1",
    owner: [
      {
        title: "Greg",
        type: ItemType.ARTIST,
        id: "2",
        date: new Date(),
      },
    ],
    date: new Date(),
    image:
      "https://media.istockphoto.com/id/1166608662/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B8%D0%B9-%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD-%D1%96%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D1%96%D1%97-wolf-designs.jpg?s=612x612&w=0&k=20&c=yts_svpARjtum1RoNS1AAjUv4BfIfxtfD4fM3qAvrOs=",
    contents: [],
  },
  {
    title: "Greg",
    type: ItemType.ARTIST,
    id: "2",
    date: new Date(),
    image:
      "https://media.istockphoto.com/id/1272809601/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D1%82%D0%B0%D0%BB%D1%96%D1%81%D0%BC%D0%B0%D0%BD-%D1%87%D0%B5%D1%80%D0%B2%D0%BE%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B3%D0%BE-%D0%B1%D0%B8%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=dBaWeqUiEJw1GZ34XkBIjQr7McwVFqMJae0w0iIjxVg=",
    tracks: [],
    albums: [],
    playlists: [],
    folders: [],
  },
  {
    title: "PLAYLIST OOOH YEAH",
    type: ItemType.PLAYLIST,
    id: "1",
    owner: [
      {
        title: "Greg",
        type: ItemType.ARTIST,
        id: "2",
        date: new Date(),
      },
    ],
    date: new Date(),
    image:
      "https://media.istockphoto.com/id/1166608662/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B8%D0%B9-%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD-%D1%96%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D1%96%D1%97-wolf-designs.jpg?s=612x612&w=0&k=20&c=yts_svpARjtum1RoNS1AAjUv4BfIfxtfD4fM3qAvrOs=",
    contents: [],
  },
  {
    title: "Greg",
    type: ItemType.ARTIST,
    id: "2",
    date: new Date(),
    image:
      "https://media.istockphoto.com/id/1272809601/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D1%82%D0%B0%D0%BB%D1%96%D1%81%D0%BC%D0%B0%D0%BD-%D1%87%D0%B5%D1%80%D0%B2%D0%BE%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B3%D0%BE-%D0%B1%D0%B8%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=dBaWeqUiEJw1GZ34XkBIjQr7McwVFqMJae0w0iIjxVg=",
    tracks: [],
    albums: [],
    playlists: [],
    folders: [],
  },
  {
    title: "Folder",
    type: ItemType.FOLDER,
    id: "3",
    date: new Date(),
    owner: [],
    contents: [
      {
        title: "PLAYLIST OOOH YEAH",
        type: ItemType.PLAYLIST,
        id: "4",
        owner: [
          {
            title: "Greg",
            type: ItemType.ARTIST,
            id: "2",
            date: new Date(),
          },
        ],
        date: new Date(),
        image:
          "https://media.istockphoto.com/id/1166608662/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B8%D0%B9-%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD-%D1%96%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D1%96%D1%97-wolf-designs.jpg?s=612x612&w=0&k=20&c=yts_svpARjtum1RoNS1AAjUv4BfIfxtfD4fM3qAvrOs=",
        contents: [],
      },
      {
        title: "Greg",
        type: ItemType.PLAYLIST,
        id: "5",
        owner: [],
        date: new Date(),
        image:
          "https://media.istockphoto.com/id/1272809601/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D1%82%D0%B0%D0%BB%D1%96%D1%81%D0%BC%D0%B0%D0%BD-%D1%87%D0%B5%D1%80%D0%B2%D0%BE%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B3%D0%BE-%D0%B1%D0%B8%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=dBaWeqUiEJw1GZ34XkBIjQr7McwVFqMJae0w0iIjxVg=",
        contents: [],
      },
    ],
  },
];
