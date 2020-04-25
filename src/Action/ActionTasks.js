export const AddTask = (id, completed, title) => ({
    type: 'ADD_TASK',
    id,
    completed,
    title
});

export const DeleteTask = (id) => ({
    type: 'DELETE_TASK',
    id
});

export const CompleteTask = id => ({
    type: 'COMPLETE_TASK',
    id
})