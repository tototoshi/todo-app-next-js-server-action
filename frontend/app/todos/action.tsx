'use server'

import { redirect } from "next/navigation";

export async function fetchTodos() {
    const response = await fetch('http://localhost:1323/todos', { cache: "no-store" });
    const json = await response.json();
    return json;
}

export async function createTodo(formData:FormData) {
    const response = await fetch(`http://localhost:1323/todos`, {
        method: "POST",
        body: formData,
    });
    redirect(`/todos`);
}

export async function deleteTodo(formData: FormData) {
    const id = formData.get("id");
    const response = await fetch(`http://localhost:1323/todos/${id}`, {
        method: "DELETE",
    });
    redirect(`/todos`);
}
