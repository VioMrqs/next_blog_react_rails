Rails.application.routes.draw do
  devise_for :users,
    controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  get '/member-data', to: 'members#show'
  put '/member-data', to: 'members#update'
  resources :posts
end
