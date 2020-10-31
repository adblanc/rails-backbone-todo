import Backbone from "backbone"
import Mustache from "mustache";
import $ from "jquery"
import { TodoItem } from "../models/TodoItem";

export class TodoItemView extends Backbone.View<TodoItem> {

    constructor(options?: Backbone.ViewOptions<TodoItem>) {
        super({...options, tagName: "li", className: "p-2 border-r border-b border-gray-400 flex flex-row items-center justify-between bg-white"});

        if (!options?.model)
            throw new Error("model is not specified.");
        
        this.model.on("change", this.render, this);
    }

    events() {
        return {
            "click #toggle": "onClickToggle",
            "click #delete": "onClickDelete"
        }
    }

    onClickToggle() {
        this.model.toggle();
        this.model.save();
    }

    onClickDelete() {
        this.model.destroy();
    }

    render() {
        const isCompleted = this.model.get("completed");
        this.$el.attr("id", this.model.id);
        this.$el.toggleClass("line-through italic", isCompleted);

        const template = $("#todoItemTemplate").html();
        const html = Mustache.render(template, this.model.toJSON());

        this.$el.html(html);

        return this;
    }
}