import { redirect } from "next/navigation";

export default async function({
    params,
    searchParams,
  }: {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }) {

    const response = await fetch(`http://localhost:1323/todos/${searchParams.id}`, {cache: "no-store"});

    const todo = await response.json();

    const updateTodo =async (formData:FormData) => {
        'use server'
        const response = await fetch(`http://localhost:1323/todos/${searchParams.id}`, {
            method: "POST",
            body: formData,
        });
        const todo = await response.json();
        console.log(todo);

        redirect(`/todos`);
    }

    return (
        <div className="todos-edit">
            <form action={updateTodo}>
                <div>
                    <div>title</div>
                    <input type="text" name="title" defaultValue={todo.title}/>
                </div>
                <div>
                    <button type="submit">submit</button>
                </div>
            </form>
        </div>
    )

  }

