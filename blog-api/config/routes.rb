Rails.application.routes.draw do
  resources :posts do
    resources :comments
  end
  devise_for :users,
    controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  get '/member-data', to: 'members#show'

end