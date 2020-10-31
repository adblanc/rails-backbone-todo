module Api
	module V1

		class TodosController < ApplicationController
			def index
				@todos = Todo.order('updated_at ASC');
			end

			def show
				@todo = Todo.find(params[:id]);
			end

			def create
				@todo = Todo.new(todo_params);

				if @todo.save
					render status: :bad_request
				else
					render
				end
			end

			def destroy
				@todo = Todo.find(params[:id]);

				@todo.destroy
			end

			def update
				@todo = Todo.find(params[:id]);

				if (@todo.update_attributes(todo_params))
					render
				else
					render status: :bad_request
				end
			end

			private

			def todo_params
				params.permit(:title, :completed);
			end
		end

	end
end
