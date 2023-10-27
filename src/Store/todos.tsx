// we are gonna use context api 
import {ReactNode, createContext, useContext, useState} from 'react';
export type TodosProviderProps = {
    children: ReactNode
}
// note that ract node is a generic type that coveres a wide range of possible children types 
// including jsx elements , strings and other react componets 
export type  Todo = {
    id: string ;
    task : string;
    completed : boolean;
    createAt : Date ;
}

export type TodosContext = {
    todos : Todo[];
    handleAddToDo : (task:string) => void; // call signature 
    toggleTodoAsCompleted: (id:string) => void;
    handleDeleteTodo:(id:string)=>void ;
}


export  const todosContext = createContext<TodosContext | null>(null)

export const TodosProvider = ({children}:TodosProviderProps)=>{
    const [todos , setTodos] = useState<Todo[]>(()=>{
        try{
            const newTodos = localStorage.getItem('todos') || "[]";
            return JSON.parse(newTodos) as Todo[]
        }catch(error){
            return []
        }
    })


    const handleAddToDo = (task:string) =>{
        setTodos((prev)=>{
            const newTodos:Todo[] = [
                {
                    id: Math.random().toString(),
                    task: task ,
                    completed: false,
                    createAt : new Date()
                },
                ...prev
            ] 
            // console.log('my previous data '+prev)
            // console.log(newTodos)
            localStorage.setItem('todos',JSON.stringify(newTodos))
            // GO INSIDE INSPECT THEN STORAGE TO SEE ITS EFFECT 
            return newTodos
        })
    }

    // mark completed  
    const toggleTodoAsCompleted = (id:string) => {
        setTodos((prev)=>{
            let newTodos = prev.map((todo)=>{
                if(todo.id === id){
                    return {...todo,completed:!todo.completed}
                }
                return todo;
            })
            return newTodos
        })
    }
    //  delete the individual data 
    const handleDeleteTodo = (id:string)=>{
        setTodos((prev)=>{
            let newTodos = prev.filter((filterTodo)=>filterTodo.id !== id );
            return newTodos;
        })
    }

    return <todosContext.Provider value={{todos,handleAddToDo,toggleTodoAsCompleted,handleDeleteTodo}}>
        {children}
    </todosContext.Provider>
}

// consumer 
export const useTodos = () => {
    const todosConsumer = useContext(todosContext);
    if(!todosConsumer){
        throw new Error('useTools use outside of provider')
    }return todosConsumer;
} 