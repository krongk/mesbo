RailsOnWeb::Application.routes.draw do
  get 'product_cates/page/:page', to: 'product_cates#index'
  get 'product_cates/:id/page/:page', to: 'product_cates#show'
  get 'product_items/page/:page', to: 'product_items#index'
  get 'news_cates/page/:page', to: 'news_cates#index'
  get 'news_cates/:id/page/:page', to: 'news_cates#show'
  get 'news_items/page/:page', to: 'news_items#index'

  resources :note_items

  resources :note_cates

  resources :jiamengs

  resources :orders

  resources :customers

  resources :regions do
    resources :cities do
      resources :districts
    end
  end
  resources :cities do
    resources :districts
  end
  resources :districts
  
  resources :shops

  resources :resource_items

  resources :resource_cates

  resources :product_items

  resources :product_cates

  resources :news_items

  resources :news_cates

  get "home/index"
  get "home/location"
  get "home/site_map"
  get "home/img"
  get "home/slide_nav"
  get "home/nav_img_and_jquery"
  get "home/nav_img_and_jquery2"
  get "home/ad_tv"
  match "ad1" => "home#ad1"
  match "upload" => "resource_items#upload"
  match "customer_login" => "customers#customer_login"
  match "customer_login_create" => "customers#customer_login_create"
  match "customer_logout" => "customers#customer_logout"
  ActiveAdmin.routes(self)

  devise_for :admin_users, ActiveAdmin::Devise.config

  devise_for :users

  #resources :page_parts
  #resources :parts
  #resources :sites
  resources :pages
  match "/en/:id" => "pages#en"

  # match "/a/:model/:state" => "sanctions#index", :constraints => {:model => /(doctor|dentist)/, :state => /(wa|oh)/}
  # scope "/:model/:state/:cate(/:history)", :constraints => {:history => /history/i, :cate => /(date|title)/i, :model => /(doctor|dentist|podiatrist)/i, :state => /(#{StateList::STATE_ABBR.join('|')})/i } do
  #   resources :sanctions
  # end

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  #root :to => 'home#index'
  root :to => 'pages#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id(.:format)))'
end
