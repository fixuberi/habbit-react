class Habbit < ApplicationRecord
  belongs_to :user
  has_many :executions, dependent: :destroy

  validates :name, presence: true
end
