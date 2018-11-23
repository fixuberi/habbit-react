require 'rails_helper'

RSpec.describe 'Users API', type: :request do
  let(:user) { build(:user) }
  let(:headers) { { 'Content-Type': 'application/json' } }
  let(:valid_attributes) do
    attributes_for(:user, password_confirmation: user.password).to_json
  end
  describe 'POST /signup' do
    context 'with valid request' do
      before { post '/signup', params: valid_attributes, headers: headers }
      it 'creates a new user' do
        expect(response).to have_http_status(201)
      end
      it 'returns success message' do
         expect(json['message']).to match(/Account created/)
      end
      it 'returns an authentication token' do
        expect(json['auth_token']).not_to be_nil
      end
    end
    context 'when invalid request' do
      before { post '/signup', params: {}, headers: headers }
      it 'does not create a new user' do
        expect(response).to have_http_status(422)
      end
      it 'returns a failure message' do
        expect(json['message']).to match(/Validation failed/)
      end
    end
  end
end