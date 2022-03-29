import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import TodoForm from '../../components/TodoForm'
import { GlobalContext } from '../../context/GlobalState'

const EditTodo = () => {
  const router = useRouter()
  const { id } = router.query
  const { todos  } = useContext(GlobalContext)
  const todo = todos.find((todo) => todo.id === Number(id))
  const {editTodo} = useContext(GlobalContext)
  const onSubmit = (todo, id) => {
    editTodo({ ...todo, id })
    router.push('/')
  }

  return (
    <div className="p-4">
      <Head>
        <title>Edit Todo</title>
      </Head>

      <TodoForm {...todo} onSubmit={onSubmit} />
    </div>
  )
}

export default EditTodo
