import Backbone from "backbone"

export interface ITodoItem {
    title: string;
    completed?: boolean;
}

export class TodoItem extends Backbone.Model<ITodoItem> {

    constructor(options: ITodoItem) {
        super(options);
    }

    urlRoot = () => "http://jsonplaceholder.typicode.com/todos";

    defaults() {
        return {
           completed: false,
        }
    }
    validate(attrs: ITodoItem) {
        if (!attrs.title)
            return "Title is required";
    }

    toggle() {
        this.set("completed", !this.get("completed"));
    }
}