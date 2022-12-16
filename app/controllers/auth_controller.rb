class AuthController < ApplicationController
  skip_before_action only: [:login, :get_current_user]
  
  def get_current_user
    if current_user
      render json: {user: current_user, jwt: get_token }
    else
      render json: { message: "You are not logged in" }
    end
  end

  # post /login
  def login
    @user = User.find_by_username(params[:username])
    if @user && @user.authenticate(params[:password])
      # session[:user_id] = @user.id # logs us in
      @token = encode_token(user_id: @user.id)
      render json: {user: @user, jwt: @token}
    else
      render json: { errors: ["Username or Password didn't match"]}, status: :unprocessable_entity
    end
  end
end
