package model

import "github.com/google/uuid"

var todos = []*Todo{}

type Todo struct {
	ID    string `json:"id"`
	Title string `json:"title"`
}

func New(title string) *Todo {
	id := uuid.New()
	return &Todo{
		ID:    id.String(),
		Title: title,
	}
}

func All() []*Todo {
	return todos
}

func Find(id string) *Todo {
	for _, t := range todos {
		if t.ID == id {
			return t
		}
	}
	return nil
}

func Save(todo *Todo) {
	for _, t := range todos {
		if t.ID == todo.ID {
			t.Title = todo.Title
			return
		}
	}
	todos = append(todos, todo)
}

func Delete(id string) {
	for i, t := range todos {
		if t.ID == id {
			todos = append(todos[:i], todos[i+1:]...)
			return
		}
	}
}
