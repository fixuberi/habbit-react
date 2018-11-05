class HabbitsController < ApplicationController
  before_action :set_habbit, only: [:show, :update, :destroy]

  def index
    @habbits = Habbit.all
    json_response @habbits
  end

  def show
    json_response(@habbit)
  end

  def create
    @habbit = Habbit.create!(habbit_params)
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
    params.permit(:name)
  end

  def set_habbit
    @habbit = Habbit.find(params[:id])
  end
end
