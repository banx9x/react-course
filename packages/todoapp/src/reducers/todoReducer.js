export const todoReducer = (currentState, action) => {
  // Trong hàm reducer thường sử dụng switch case để kiểm tra loại hành động của action.type
  switch (action.type) {
    case 'ADD_TODO': {
      // Tạo công việc mới
      const newTodo = {
        id: Date.now(),
        content: action.payload.content,
        color: null,
        status: false,
      };

      // Tạo giá trị trạng thái mới, và thêm công việc vào danh sách
      const newState = {
        ...currentState,
        todos: [...currentState.todos, newTodo],
      };

      // Trả về giá trị trạng thái mới
      return newState;
    }

    case 'SET_FILTER': {
      const newState = {
        ...currentState,
        filter: {
          ...currentState.filter,
          [action.payload.name]: action.payload.value,
        },
      };

      return newState;
    }

    case 'MARK_ALL_COMPLETED': {
      const newState = {
        ...currentState,
        todos: currentState.todos.map((todo) => ({ ...todo, status: true })),
      };

      return newState;
    }

    case 'DELETE_ALL_COMPLETED': {
      const newState = {
        ...currentState,
        todos: currentState.todos.filter((todo) => !todo.status),
      };

      return newState;
    }

    case 'REMOVE_TODO': {
      const newState = {
        ...currentState,
        todos: currentState.todos.filter(
          (todo) => todo.id !== action.payload.id,
        ),
      };

      return newState;
    }

    case 'UPDATE_STATUS': {
      const newState = {
        ...currentState,
        todos: currentState.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, status: !todo.status }
            : todo,
        ),
      };

      return newState;
    }

    // Thêm các trường hợp khác

    default: {
      throw new Error('Hành động không hợp lệ!');
    }
  }
};
