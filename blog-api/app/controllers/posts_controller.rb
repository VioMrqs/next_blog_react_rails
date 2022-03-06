class PostsController < ApplicationController
  before_action :set_post, only: %i[ show update destroy ]
  before_action :authenticate_user!, only: [:show, :create, :update, :new, :destroy, :edit]
  before_action :is_author?, only: [:edit, :update, :destroy]

  # GET /posts
  def index
    @posts = Post.all.sort_by(&:created_at).reverse

    render json: @posts, include: [:user, :comments => {:include => :user}]  
  end

  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
    @post = Post.new(post_params)
    @post.user = current_user

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
    render json: {message: 'Ton post a bien été supprimé'}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:title, :content, :image_url)
    end

    # Check if same user (for updating + deleting)
    def is_author?
      (render json: {error: 'access denied'}, status: 401) unless @post.user == current_user
    end

end
