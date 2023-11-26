let usersData = [
  {
    id: "0",
    username: "ecssen",
    password: "school",
    posts: [
      { id: "0", title: "Hello World", content: "This is my first post!" },
      { id: "1", title: "Hello World 2", content: "This is my second post!" },
      { id: "2", title: "Hello World 3", content: "This is my third post!" },
    ],
  },
  {
    id: "1",
    username: "geb",
    password: "asdf",
  },
  {
    id: "2",
    username: "test",
    password: "asdf",
  },
];

export default function handler(req, res) {
  res.status(200).json({ test: "data" });
}
