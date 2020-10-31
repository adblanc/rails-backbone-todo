import Backbone from "backbone";
import { TodoItem } from "../models/TodoItem";

export class TodoItems extends Backbone.Collection {
    constructor() {
        super();

        this.model = TodoItem;
        this.url = "http://localhost:3000/api/v1/todos";
    }
}
