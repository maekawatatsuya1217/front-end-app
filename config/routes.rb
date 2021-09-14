Rails.application.routes.draw do
  root to: "tops#index"
  resources :tops, only: :index do
    collection do
      get 'first_content'
      get 'second_content'
    end
  end
end
