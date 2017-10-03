export var tagsReducer = (state=[], action) => {
  switch(action.type){
    case 'ADD_TAG':
      return [
        ...state,
        {
          id: uuid(),
          text:action.text,
          completed:false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];
    case 'TOGGLE_TAG':
      return state.map((tag) => {
        if(tag.id === action.id){
          var nextCompleted = !tag.completed;

          return {
            id: tag.id,
            text: tag.text,
            createdAt: tag.createdAt,
            completed: nextCompleted,
            completedAt: nextCompleted ? moment().unix(): undefined
          };
        }
      });
      case 'ADD_TAGS':
        return [
          ...state,
          ...action.tags
        ];
        case 'EDIT_TAG':
          return state.map((tag) => {
            if(tag.id === action.id){
              var newText = action.text;

              return {
                id: tag.id,
                text: newText,
                createdAt: tag.createdAt,
                completed: tag.completed,
                completedAt: tag.completedAt
              };
            }
          });
      case 'DELETE_TAG':
        var tagToDelete = 0;

        state.map((tag) => {
          if(tag.id === action.id){
            tagToDelete = tag.id;
          }
        });
    		state.splice(tagToDelete, 1);

    		return [
          ...state
        ];

    default:
      return state;
  }
}
