const initialState = {
  items: [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: '#805AD5' },
  ],
  filters: {
    status: 'All',
    colors: [],
  },
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/added': {
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: Date.now(), // Tạo giá trị ID ngẫu nhiên
            text: action.payload.text,
            completed: false,
          },
        ],
      };
    }

    case 'todos/toggled': {
      return {
        ...state,
        items: state.items.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo,
        ),
      };
    }

    case 'todos/colored': {
      return {
        ...state,
        items: state.items.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                color: action.payload.color,
              }
            : todo,
        ),
      };
    }

    default: {
      return state;
    }
  }
}
