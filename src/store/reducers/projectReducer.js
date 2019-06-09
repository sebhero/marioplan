/**
 * A project
 * @typedef {object} Project
 * @property {string} id - the id
 * @property {string} title - the title
 * @property {string} content - the content
 */

/**
 * projectReducer State
 * @typedef {object} ProjectReducerState
 * @property {Project[]} projects
 */

/**
 * @type {ProjectReducerState}
 */
const initState = {
  projects: [
    { id: "1", title: "help me find peach", content: "blah blah blah" },
    { id: "2", title: "collect all the stars", content: "blah blah blah" },
    { id: "3", title: "egg hunt with yoshi", content: "blah blah blah" }
  ]
};

/**
 * project reducer
 *
 * @param {ProjectReducerState} state
 * @param {*} action
 */
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("cretated project", action.project);
      break;
    default:
      console.log("unkown action type: ", action.type);
      console.log("project data: ", action.project);
  }

  return state;
};

export default projectReducer;
