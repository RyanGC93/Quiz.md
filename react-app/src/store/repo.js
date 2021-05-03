
const SET_REPO = "repo/SET_REPO";
const CREATE_REPO = "repo/CREATE_REPO";
const REMOVE_REPO = "repo/REMOVE_REPO";
const UPDATE_REPO = "repo/UPDATE_REPO";

const setRepo = (repo) => {
  return {
    type: SET_REPO,
    repo,
  };
};


const removeRepo = (id) => {
  return {
    type: REMOVE_REPO,
    id
  }
}

export const createRepo = (title) => async dispatch => {

    const options =
    {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({ title })
    }
    const data = await fetch('/api/repo/', options)
    const res = await data.json()
    dispatch(setRepo([res]))
    return res
}
export const editRepo = (repoId, name) =>     async dispatch => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({repoId, name})
  }
  const res = await fetch(`/api/repo/${repoId}`, options)
  if (!res.ok) {
    alert('Editing error')
  }
}

export const deleteRepo = (id) => async dispatch => {
  const options = {
    method: 'DELETE'
  }
  const res =await fetch(`/api/repo/${id}`, options)
  if ( res.ok) {
    dispatch(removeRepo(id))
  }
}

export const getRepos = (userId) => async (dispatch) => {
  const response = await fetch(`/api/repo/${userId}`);
  if (response.ok) {
    let res = await response.json();
      dispatch(setRepo(res.repos))
  }
  return response;
};


const initialState = {}

const repoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REPO:
      const repos = action.repo.reduce((acc, ele) => {

        acc[ele.repo_id] = ele;
        return acc;
      }, {});
      return { ...state, ...repos };
    case CREATE_REPO:
      return { ...state, [action.drink.id]: action.drink };
    case REMOVE_REPO:
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    case UPDATE_REPO:
      const newRepo = { ...state };
      const index = action.repo.id;
      newRepo[index] = action.repo;
      return newRepo;
    default:
      return state;
  }
};

export default repoReducer;
