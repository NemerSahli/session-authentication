const initialState = {
  user: {
    email: 'nemer.sahli@gmx.de',
    password: '123'
  },
  users: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'DEMO':
      return {
        ...state
      };

    default:
      return {
        ...state
      };
  }
}
