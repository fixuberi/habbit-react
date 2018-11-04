class CreateExecutions < ActiveRecord::Migration[5.2]
  def change
    create_table :executions do |t|
      t.date :date
      t.references :habbit, foreign_key: true

      t.timestamps
    end
  end
end
