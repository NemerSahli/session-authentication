import axios from 'axios';

export const logIn = loginUser => async dispatch => {
  try {
    const result = await axios('http://localhost:8000/login', {
      method: 'post',
      data: loginUser,
      withCredentials: true
    });
    console.log(result);
    if (result.data.error === 0) {
      dispatch({ type: 'LOGIN' });
    } else {
      dispatch({ type: 'LOGIN_FAILD', error: result.data.message });
    }
  } catch (e) {
    console.log('logoin error:' + e);
  }
};

export const logOut = () => async dispatch => {
 try {
   const result = await axios('http://localhost:8000/logout', {
     method: 'post',
  
     withCredentials: true
   });
   console.log(result);
   if (result.data.error === 0) {
    dispatch({ type: 'LOGOUT' });
   } else {
    dispatch({ type: 'LOGOUT_FAILED' });
   }
 } catch (e) {
   console.log('logoin error:' + e);
 }
};

export const loadItems = () => async dispatch => {
  try {
    const result = await axios('http://localhost:8000/items', {
      method: 'get',
      withCredentials: true
    });
    console.log(result);
    if (result.data.error === 0) {
      dispatch({ type: 'LOAD_ITEMS' });
    } else {
      dispatch({ type: 'LOAD_ITEMS_FAILD', error: result.data.message });
    }
  } catch (e) {
    console.log('logoin error:' + e);
  }
};
