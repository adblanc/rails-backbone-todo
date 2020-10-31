import Backbone from "backbone";

export interface ITodoItem {
    title: string;
    completed?: boolean;
}

export class TodoItem extends Backbone.Model<ITodoItem> {
    constructor(options: ITodoItem) {
        super(options);
    }

    urlRoot = () => "http://localhost:3000/api/v1/todos";

    defaults() {
        return {
            completed: false
        };
    }
    validate(attrs: ITodoItem) {
        if (!attrs.title) return "Title is required";

        return;
    }

    toggle() {
        this.set("completed", !this.get("completed"));
    }
}
