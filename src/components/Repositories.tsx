// components/Repositories.jsx
 
import * as React  from "react";
import { getAllRestaurants } from "../services/RestaurantService";
import { useQuery, useMutation, useQueryClient } from "react-query"
import { useState } from 'react'

const TodoList = () => {
    const [newTodo, setNewTodo] = useState('')
    const queryClient = useQueryClient()

    const {
        isLoading,
        isError,
        error,
        data: todos
    } = useQuery('todos', getAllRestaurants)

   
    let content
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isError) {
        content = <p>{"error"}</p>
    } else {
        content = todos.map((res:any) => {
            return (
                <article key={res.id}>
                    <h1>{res.name}</h1>
                </article>
            )
        })
    }

    return (
        <main>
            <h1>VEGANDOR</h1>
         
            {content}
        </main>
    )
}
export default TodoList