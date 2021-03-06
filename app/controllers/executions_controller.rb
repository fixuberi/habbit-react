class ExecutionsController < ApplicationController
  before_action :set_habbit
  before_action :set_execution, only: [:destroy]
  def index
    @executions = @habbit.executions
    json_response @executions
  end

  def create
    @execution = Execution.create!(executions_params)
    json_response(@execution, :created)
  end

  def destroy
    @execution.destroy
    head :no_content
  end

  private

  def executions_params
    params.permit(:date, :habbit_id)
  end

  def set_habbit
    @habbit = Habbit.find(params[:habbit_id])
    raise(ExceptionHandler::AuthenticationError, Message.unauthorized) if @habbit.user_id != current_user.id
  end

  def set_execution
    @execution = Execution.find(params[:id])
    raise(ExceptionHandler::AuthenticationError, Message.unauthorized) if @habbit.user_id != current_user.id
  end
end
