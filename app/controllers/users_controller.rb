class UsersController < ApplicationController
  skip_before_action only: [:signup]

  def index
    render json: User.all
  end

  # post request /signup
  def signup
    @user = User.new(user_params)
    if @user.save
      # set the session[:user_id] = user.id
      # create jwt token
      # send user AND jwt token
      @token = encode_token(user_id: 1)
      render json: { user: @user, jwt: @token }, except: [:password_digest]
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
    def user_params
      params.require(:user).permit(:username, :password)
    end
end
