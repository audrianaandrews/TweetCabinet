export var addTodo = (text) => {
  return {
    type: 'ADD_TAG',
    text
  };
};

export var addTodos = (tags) =>{
  return {
    type: 'ADD_TAGS',
    tags
  };
};

export var editTodo = (id, text) => {
  return {
    type: 'EDIT_TAG',
    id,
    text
  };
};

export var deleteTodo = (id) => {
  return {
    type: 'DELETE_TAG',
    id
  };
};
