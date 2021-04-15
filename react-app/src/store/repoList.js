
const SET_QUIZLIST = "repo/SET_QUIZLIST";
const CREATE_QUIZLIST = "repo/CREATE_QUIZLIST";
const REMOVE_QUIZLIST = "repo/REMOVE_QUIZLIST";
const UPDATE_QUIZLIST = "repo/UPDATE_QUIZLIST";

const setRepo = (repo) => {
  return {
    type: SET_QUIZLIST,
    repo,
  };
};

const updateRepo = (repo) => {
  return {
    type: UPDATE_QUIZLIST,
    repo,
  };
};
const removeRepo = (id) => {
  return {
    type: REMOVE_QUIZLIST,
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
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({repoId, name})
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

// Gets all Repos of a particular user
export const getRepoList = (userId) => async (dispatch) => {
  console.log('session', userId)
  const response = await fetch(`/api/repoRepoList/${userId}`);
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
    case SET_QUIZLIST:
      return { ...state,repo: action.repo };
    case CREATE_QUIZLIST:
      return { ...state, [action.drink.id]: action.drink };
    case REMOVE_QUIZLIST:
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    case UPDATE_QUIZLIST:
      const newRepo = { ...state };
      const index = action.repo.id;
      newRepo[index] = action.repo;
      return newRepo;
    default:
      return state;
  }
};

export default repoReducer;