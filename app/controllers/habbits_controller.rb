class HabbitsController < ApplicationController
  before_action :set_habbit, only: [:show, :update, :destroy]
  before_action :set_user, only: [:create]

  def index
    @habbits = Habbit.all
    render json: @habbits.as_json(include:
                                      {executions: {only: [:date, :id, :habbit_id]}})
  end

  def show
    render json: @habbit.as_json(include: {executions: {only: [:date, :id]}})
  end

  def create
    @habbit = @user.habbits.create!(habbit_params)
    json_response(@habbit, :created)
  end

  def  update
    @habbit.update(habbit_params)
    head :no_content
  end

  def destroy
    @habbit.destroy
    head :no_content
  end

  private

  def habbit_params
    params.permit(:name, :user_id)
  end

  def set_habbit
    @habbit = Habbit.find(params[:id])
    raise(ExceptionHandler::AuthenticationError, Message.unauthorized) if @habbit.user_id != current_user.id
  end

  def set_user
    @user = User.find(habbit_params[:user_id])
  end
end
