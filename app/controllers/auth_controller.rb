class AuthController < ApplicationController
  
  def get_current_user
    render json: current_user
  end

  # post /login
  def login
    @user = User.find_by_username(params[:username])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id # logs us in
      render json: @user
    else
      render json: { errors: ["Username or Password didn't match"]}, status: :unprocessable_entity
    end
  end

  def logout
    session.clear
  end
end
