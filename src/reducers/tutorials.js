import {
  CREATE_TUTORIAL,
  RETRIEVE_TUTORIALS,
  UPDATE_TUTORIAL,
  DELETE_TUTORIAL,
  DELETE_ALL_TUTORIALS,
  // REPLACE_BEARER_TOKEN
} from "../actions/types";

const initialState = [];

const tutorialReducer = (tutorials = initialState, action) => {
  const { type, payload } = action;

  // console.log("reducer initialState:" + initialState);
  // console.log(payload);

  switch (type) {
    case CREATE_TUTORIAL:
      return [...tutorials.data, payload];

    case RETRIEVE_TUTORIALS:
      return payload;

    case UPDATE_TUTORIAL:
      return tutorials.data.map((tutorial) => {
        if (tutorial.id === payload.id) {
          return {
            ...tutorial,
            ...payload,
          };
        } else {
          return tutorial;
        }
      });

    case DELETE_TUTORIAL:
      return tutorials.data.filter(({ id }) => id !== payload.id);

    case DELETE_ALL_TUTORIALS:
      return [];

    // case REPLACE_BEARER_TOKEN:
    //   const token = tutorials.data.find(val => val.BearerToken);
    //   if (!token) {
    //     // token.BearerToken = payload.BearerToken;
    //     tutorials.data.push({
    //       BearerToken: payload.BearerToken
    //     })
    //   }
    //   else {
    //     token.BearerToken = "";
    //   }
    //   return [...tutorials.data, payload];

    default:
      return tutorials;
  }
};

export default tutorialReducer;