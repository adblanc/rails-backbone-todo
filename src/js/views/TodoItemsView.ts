import Backbone from "backbone"
import Mustache from "mustache"
import $ from "jquery"
import { TodoItem } from './../models/TodoItem';
import { TodoItemView } from './TodoItemView';

export class TodoItemsView extends Backbone.View<TodoItem> {

    constructor(options?: Backbone.ViewOptions<TodoItem>) {
        super({...options, className: "max-w-2xl mx-auto"});

        if (!options?.collection)
            throw new Error("please pass a collection");
        
        this.collection.on("add", this.onAddTodoItem, this);
        this.collection.on("remove", this.onRemoveTodoItem, this);
    }

    onAddTodoItem(todoItem: TodoItem) {
        const view = new TodoItemView({model: todoItem});

        this.$("#todoItems").append(view.render().$el);
    }

    onRemoveTodoItem(todoItem: TodoItem) {
        
        this.$("li#" + todoItem.id).remove();
    }

    events() {
         return {
           "keypress #newTodoItem": "onKeyPress"
         }
    }

    onKeyPress(e: any) {
        if (e.keyCode == 13) {
            const $input = this.$("#newTodoItem");

            if ($input.val()) {
                const todoItem = new TodoItem({
                    title: $input.val() as string,
                });

                this.collection.create(todoItem);
                $input.val("");
        
            }
        }
    }

    render() {
        const template = $("#todoItemsTemplate").html();
        const html = Mustache.render(template, {});
        this.$el.html(html);

        return this;
    }
}