class Habbit < ApplicationRecord
  has_many :executions, dependent: :destroy

  validates :name, presence: true
end
