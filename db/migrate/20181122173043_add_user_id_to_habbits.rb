class AddUserIdToHabbits < ActiveRecord::Migration[5.2]
  def change
    add_reference :habbits, :user, foreign_key: true
  end
end
