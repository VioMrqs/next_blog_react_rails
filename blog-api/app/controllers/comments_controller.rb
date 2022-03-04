class CommentsController < ApplicationController
  before_action :get_post
  before_action :set_comment, only: %i[ show update destroy ]
  before_action :authenticate_user!, only: [:create, :update, :new, :destroy, :edit]
  before_action :is_author?, only: [:edit, :update, :destroy]

  # GET /comments
  def index
    @comments = @post.comments
    render json: @comments, include: [:user]
  end

  # GET /comments/1
  def show
    render json: @comment
  end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)
    @comment.post = @post
    @comment.user = current_user

    if @comment.save
      render json: @comment, status: :created, location: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:content)
    end

    def get_post
    @post = Post.find(params[:post_id])
  end

      # Check if same user (for updating + deleting)
    def is_author?
      (render json: {error: 'access denied'}, status: 401) unless @comment.user == current_user
    end

end
