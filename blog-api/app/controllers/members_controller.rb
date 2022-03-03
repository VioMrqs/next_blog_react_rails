class MembersController < ApplicationController
before_action :authenticate_user!

def show
user = get_user_from_token
render json: {
message: "If you see this, you're in!",
user: user
}
end

# def update
#   user = get_user_from_token
#   puts(user)
#   puts post_params
#   # if user.update(post_params)
#   #   render json: user
#   # else
#   #   render json: user.errors, status: :unprocessable_entity
#   # end
# end

private
  def get_user_from_token
    jwt_payload = JWT.decode(request.headers['Authorization'].split(' ')[1],
    Rails.application.credentials.devise[:jwt_secret_key]).first
    user_id = jwt_payload['sub']
    User.find(user_id.to_s)
  end

# def post_params
#   params.require(:user).permit(:email, :alias, :name)
# end

end