class UsersController < ApplicationController
  skip_before_action :authorize_request, only: :create

  def create
    User.create!(user_params)
    token = AuthenticateUser.new(user_params[:email], user_params[:password])
    response = { message: Message.account_created, auth_token: token }
    json_response(response, :created)
  end

  private

  def user_params
    params.permit(:name, :email, :password, :password_confirmation)
  end
end
