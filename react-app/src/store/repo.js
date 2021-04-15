
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

const updateRepo = (repo) => {
  return {
    type: UPDATE_REPO,
    repo,
  };
};
const removeRepo = (id) => {
  return {
    type: REMOVE_REPO,
    id
  }
}

export const createRepo = (repoId,repo, answer) => async dispatch => {

    const options =
    {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({ repoId, repo,answer })
    }
    const res = await fetch('/api/repo/', options)
    const json = await res.json()
    dispatch(setRepo([json]))
}
export const editRepo = (repoId, name) =>     async dispatch => {
  console.log('w', repoId)
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({repo, name})
  }
  const res = await fetch(`/api/repo/${repoId}`, options)
  if (res.ok) {
    const newRepo = await res.json()
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

export const getRepo = (repoId) => async (dispatch) => {
  const response = await fetch(`/api/repo/${repoId}`);
  if (response.ok) {
    let res = await response.json();
    console.log(res,'repo')
      dispatch(setRepo(res))
  }
  return response;
};

const initialState = {

};

const repoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REPO:
      return { ...state,repo: action.repo };
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