
import $ from "jquery";
import { TodoItem } from './models/TodoItem';
import { TodoItems } from './collections/TodoItems';
import { TodoItemsView } from './views/TodoItemsView';
$(document).ready(() => {
    const todoItems = new TodoItems();

    todoItems.fetch();

    const todoItemsView = new TodoItemsView({
        collection: todoItems
    });

    $("body").append(todoItemsView.render().$el);
});