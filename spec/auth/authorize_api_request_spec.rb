require 'rails_helper'

RSpec.describe AuthorizeApiRequest do
  let(:user) { create(:user) }
  let(:header) { {'Authorization' => token_generator(user.id)} }
  let(:valid_request_obj) { described_class.new(header) }
  let(:invalid_request_obj) { described_class.new({}) }

  describe '#call' do
    context 'with valid request' do
      it 'returns user object' do
        result = valid_request_obj.call
        expect(result[:user]).to eq(user)
      end
    end
    context 'with invalid request' do
      context 'when missing token' do
        it 'raises ExceptionHandler::MissingToken error' do
          expect {invalid_request_obj.call}
              .to raise_error(ExceptionHandler::MissingToken, /Missing token/)
        end
      end
      context 'when invalid token' do
        let(:invalid_request_obj) { described_class.new({ 'Authorization' => token_generator(0) }) }
        it 'raises ExceptionHandler::InvalidToken error' do
          expect {invalid_request_obj.call}
              .to raise_error(ExceptionHandler::InvalidToken, /Invalid token/)
        end
      end
      context 'when token is expired' do
        let(:header_with_expired_token) { { 'Authorization' => expired_token_generator(user.id) } }
        let(:expired_request_obj) { described_class.new(header_with_expired_token) }
        it 'raises ExceptionHandler::ExpiredSignature error' do
          expect {expired_request_obj.call}
              .to raise_error(ExceptionHandler::InvalidToken, /Signature has expired/)
        end
      end
    end
  end
end