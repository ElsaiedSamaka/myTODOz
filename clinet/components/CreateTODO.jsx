import { useContext } from "react";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../context/GlobalState";

const CreateTODO = (props) => {
  const { addTodo } = useContext(GlobalContext);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => { 
    console.log(data)
    addTodo(data)
  };



  return (
    <div className='row m-1 p-3'>
      <div className='col col-11 mx-auto'>
        <div className='row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center'>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className='col'>
            <input
              className='form-control form-control-lg border-0 add-todo-input bg-transparent rounded'
              type='text'
              name='todoInput'
              id='todoInput'
              placeholder='اضافة جديد ..'
              autoFocus
              defaultValue="" {...register("todoInput")}
            />
          </div>
          <div className='col-auto m-0 px-2 d-flex align-items-center'>
            <label
              className='text-secondary my-2 p-0 px-1 view-opt-label due-date-label d-none'
              htmlFor='Set a Due date'
            >
              ميعاد التنفيذ لم يحدد
            </label>
            <i
              className='fa fa-calendar my-2 px-1 text-primary btn due-date-button'
              data-toggle='tooltip'
              data-placement='bottom'
              title='Set a Due date'
              id='Set a Due date'
              name='Set a Due date'
            ></i>
            <i
              className='fa fa-calendar-times-o my-2 px-1 text-danger btn clear-due-date-button d-none'
              data-toggle='tooltip'
              data-placement='bottom'
              title='Clear Due date'
              id='Clear Due date'
              name='Clear Due date'
            ></i>
          </div>
          <div className='col-auto px-0 mx-0 mr-2'>
            <button
              type='submit'
              className='btn btn-primary'
            >
              اضافة
            </button>
            </div>
            </form>
        </div>
        
      </div>
      
    </div>
  );
};
export default CreateTODO;
