const SET_USER = `second-lab/app/SET_USER`;
const SET_USERS = `second-lab/app/SET_USERS`;
const ADD_FRIEND = `second-lab/app/ADD_FRIEND`;
const REMOVE_FRIEND = `second-lab/app/REMOVE_FRIEND`;

const initialState = {
  user: null,
  users: [],
  friends: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER:
      return { ...state, user: payload };
    case SET_USERS:
      return { ...state, users: payload };
    case ADD_FRIEND: {
      const isUserInFriends = state.friends.find(
        ({ email }) => email === payload.email
      );
      if (!isUserInFriends) {
        return { ...state, friends: [...state.friends, payload] };
      }

      return state;
    }
    case REMOVE_FRIEND: {
      const friends = state.friends.filter(
        ({ email }) => payload.email !== email
      );
      return { ...state, friends };
    }
    default:
      if (localStorage.getItem('userId')) {
        const [email, password] = localStorage.getItem('userId').split(':')
        if (email && password) {
          return { ...state, user: {email, password}};
        }
      }

      return state;

export const setUser = user => ({
  type: SET_USER,
  payload: user
});

export const setUsers = users => ({
  type: SET_USERS,
  payload: users
});

export const addFriend = user => ({
  type: ADD_FRIEND,
  payload: user
});

export const removeFriend = user => ({
  type: REMOVE_FRIEND,
  payload: user
});
