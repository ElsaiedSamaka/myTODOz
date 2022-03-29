import React from 'react'
import { useForm } from 'react-hook-form'

const TodoForm = ({ id, title, content, onSubmit }) => {
  const { register, handleSubmit } = useForm()
  const submit = (todo) => onSubmit(todo, id)

  return (
    <div className='container m-5 p-2 rounded mx-auto bg-light shadow'>
      <h1>ايديت تودوز</h1>
    <form onSubmit={handleSubmit(submit)}>
      <label htmlFor="title">Title</label>
      <input
        defaultValue={title}
        type="text"
        name="title"
        id="title"
         {...register("title", { required: true })}
        className="mb-4"
        autoFocus
      />
      <label htmlFor="content">Content</label>
      <textarea
        defaultValue={content}
        id="content"
        name="content"
        rows="8"
        {...register("content", { required: true })}
        className="mb-4"
      ></textarea>
      <button type="submit" className="bg-green-600 text-white">
        Save
      </button>
      </form>
      </div>
  )
}
export default TodoForm
