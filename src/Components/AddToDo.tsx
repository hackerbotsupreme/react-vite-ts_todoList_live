// typeScript is a superset of js that allows you to dafine types for variables , function 
//  parameters  and retuen values , enhancing code quality and catching errors uring develoment 
// this is our form element 
// rafce
import { FormEvent, useState } from 'react'
import { useTodos } from '../Store/todos';

const AddToDo = () => {
    const [todo, seTodo] = useState("");
    const  {handleAddToDo} = useTodos();
    // here we have defined type of e , and now whenever we use e and if we forge t ehat eas the type of the e then  we can just hover and it will appear 
    // so its the beauty  of typescript , it makes creating so easy and convincing by suggesting and stoping us from 
    // making errors 
    const handleFormSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddToDo(todo);
        seTodo('')

    }
    // e is giving error we have to tell outr application what type does e have 
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" value={todo} onChange={(e) => {
                    seTodo(e.target.value)
                }} />
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default AddToDo
