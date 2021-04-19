
const SET_QUESTIONS = "questions/SET_QUESTIONS";
const CREATE_QUESTIONS = "questions/CREATE_QUESTIONS";
const REMOVE_QUESTION = "questions/REMOVE_QUESTION";
const UPDATE_QUESTION = "questions/UPDATE_QUESTION";

const setQuestions = (questions) => {
  return {
    type: SET_QUESTIONS,
    questions,
  };
};

const updateQuestions = (post) => {
  return {
    type: UPDATE_QUESTION,
    post,
  };
};
const removeQuestion = (id) => {
  return {
    type: REMOVE_QUESTION,
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
    const res = await fetch('/api/questions/', options)
    const json = await res.json()
    dispatch(setQuestions([json]))
}
export const editQuestion = (questionId, question, answer) => async dispatch => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({question, answer})
  }
  const res = await fetch(`/api/questions/${questionId}`, options)
  if (res.ok) {
    const newQuestion = await res.json()
  }
}

export const deleteQuestion = (id) => async dispatch => {
  const options = {
    method: 'DELETE'
  }
  const res =await fetch(`/api/questions/${id}`, options)
  if ( res.ok) {
    dispatch(removeQuestion(id))
  }
}

export const updateQuestionLikes = (like) => async (dispatch) => {
  const { postId } = like;
  const response = await fetch(`/api/questions/${postId}`);
  if (response.ok) {
    const res = await response.json();
    dispatch(updateQuestions(res));
  }
  return response;
};

export const getQuestions = (repoId) => async (dispatch) => {
  const response = await fetch(`/api/questions/${repoId}`);
  if (response.ok) {
    let res = await response.json();
      dispatch(setQuestions(res.questions))
  }
  return response;
};

const initialState = {};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      const questions = action.questions.reduce((acc, ele) => {

        acc[ele.question_id] = ele;
        return acc;
      }, {});
      return { ...state, ...questions };
    case CREATE_QUESTIONS:
      return { ...state, [action.drink.id]: action.drink };
    case REMOVE_QUESTION:
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    case UPDATE_QUESTION:
      const newQuestions = { ...state };
      const index = action.post.id;
      newQuestions[index] = action.post;
      return newQuestions;
    default:
      return state;
  }
};

export default questionsReducer;