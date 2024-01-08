'use client'

import React, { useState } from "react";
import { createTodo, deleteTodo, fetchTodos } from "./action";

export default function () {

    const ref = React.useRef<HTMLFormElement>(null);
    const refTextBox = React.useRef<HTMLInputElement>(null);

    const [todos, setTodos] = useState([]);

    React.useEffect(() => {
        fetchTodos()
            .then((todos) => setTodos(todos))
            .then(() => {
                refTextBox.current!.focus()
            });
    }, []);

    return (
        <div>
            <h1>Todo App</h1>
            <div className="todos">
                <ul>
                    {todos.map((todo: any) => (
                        <li key={todo.id} className="todos__todo">
                            <span className="todos__title"><a href={`/todos/edit?id=${todo.id}`}>{todo.title}</a></span>
                            <span className="todos__delete">
                                <form action={async (d) => {
                                    await deleteTodo(d)
                                    window.location.reload()
                                }} className="todos__delete-form">
                                    <input type="hidden" name="id" value={todo.id} />
                                    <input type="submit" value="Done" />
                                </form>
                            </span>
                        </li>
                    ))}
                    <li className="todos__todo" >
                        <form ref={ref} action={
                            async (d) => {
                                await createTodo(d)
                                ref.current!.reset()
                                window.location.reload()
                            }
                        }>
                            <span className="todos__title"><input ref={refTextBox} type="text" name="title" className="todos__title-new" defaultValue="" /></span>
                            <span className="todos__delete"><input type="submit" value="Add" /></span>
                        </form>
                    </li>
                </ul>
            </div>
        </div>
    )
}

