class User < ApplicationRecord
    has_secure_password
    
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true
    validates :password_digest, presence: true
    validates :session_token, presence: true, uniqueness: true

    attr_reader :password

    has_many :comments,
        foreign_key: :author_id,
        class_name: :Comment,
        dependent: :destroy

    has_many :likes,
        foreign_key: :user_id,
        class_name: :Like,
        dependent: :destroy

    after_initialize :ensure_session_token
    # skip_before_action :verify_authenticity_token

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil
    end
    
    def is_password?(password) 
         BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64(64)
        self.save!
        self.session_token
    end

    private
    def ensure_session_token
        self.session_token ||= SecureRandom.base64(64)
    end

end