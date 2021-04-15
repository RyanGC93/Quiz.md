
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
const removeQuestion = (id) => {
  return {
    type: REMOVE_REPO,
    id
  }
}

export const createQuestion = (repoId,question, answer) => async dispatch => {

    const options =
    {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({ repoId, question,answer })
    }
    const res = await fetch('/api/repo/', options)
    const json = await res.json()
    dispatch(setRepo([json]))
}
export const editQuestion = (questionId, question, answer) => async dispatch => {
  console.log('w', questionId)
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({question, answer})
  }
  const res = await fetch(`/api/repo/${questionId}`, options)
  if (res.ok) {
    const newQuestion = await res.json()
  }
}

export const deleteQuestion = (id) => async dispatch => {
  const options = {
    method: 'DELETE'
  }
  const res =await fetch(`/api/repo/${id}`, options)
  if ( res.ok) {
    dispatch(removeQuestion(id))
  }
}

export const getRepo = (repoId) => async (dispatch) => {
  const response = await fetch(`/api/repo/${repoId}`);
  if (response.ok) {
    let res = await response.json();
      dispatch(setRepo(res.repo))
  }
  return response;
};

const initialState = {};

const repoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REPO:
      const repo = action.repo.reduce((acc, ele) => {

        acc[ele.question_id] = ele;
        return acc;
      }, {});
      return { ...state, ...repo };
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