export const generateId = (todos) => {
  if (todos.length) {
    return todos[todos.length - 1].id + 1
  }
  return 1
}
