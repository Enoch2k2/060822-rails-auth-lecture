class UsersController < ApplicationController
  def index
    render json: { session: session }
  end

  # post request /signup
  def signup
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      render json: @user, except: [:password_digest]
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
    def user_params
      params.require(:user).permit(:username, :password)
    end
end
