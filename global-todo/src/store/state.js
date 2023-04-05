export const initialState = {
  tasksListData: [
    {
      id: 1,
      todo: "Go eat sushi",
      completed: true,
      image: "https://robohash.org/pluto",
      username: "Pluto",
    },
    {
      id: 2,
      todo: "Have fun",
      completed: false,
      image: "https://robohash.org/pippo.png",
      username: "Pippo",
    },
  ],
  isModalVisibile: false,
  tempTodo: {
    username: "",
    todo: "",
    image: "",
    id: null,
  },
};
