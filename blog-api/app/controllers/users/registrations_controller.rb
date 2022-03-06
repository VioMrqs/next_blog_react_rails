class Users::RegistrationsController < Devise::RegistrationsController

respond_to :json

def update
  user = get_user_from_token
  if user.update(user_params)
    render json: user
  else
    render json: user.errors, status: :unprocessable_entity
  end
end

  def destroy
    user = get_user_from_token
    user.destroy
    render json: {message: 'Adios'}
  end

private

def respond_with(resource, _opts = {})
register_success && return if resource.persisted?
register_failed
end

def register_success
render json: {
message: 'Signed up sucessfully.',
user: current_user
}, status: :ok
end

def register_failed
render json: { message: 'Something went wrong.' }, status: :unprocessable_entity
end

def get_user_from_token
  jwt_payload = JWT.decode(request.headers['Authorization'].split(' ')[1],
  Rails.application.credentials.devise[:jwt_secret_key]).first
  user_id = jwt_payload['sub']
  User.find(user_id.to_s)
end

def user_params
  params.require(:user).permit(:email, :alias, :name)
end

end