class UpdatingUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :alias, :string
    add_column :users, :name, :string
    add_column :posts, :image_url, :string
  end
end
