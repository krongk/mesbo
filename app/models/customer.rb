class Customer < ActiveRecord::Base
  has_many :orders

  validates :name, presence: true
  validates :password, presence: true
  validates :confirm, presence: true
  validates :email, presence: true
  validates :captcha, presence: true
end
