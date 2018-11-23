require 'rails_helper'

RSpec.describe 'Executions API', type: :request do
  let!(:user) { create(:user) }
  let!(:users_habbit) { create(:habbit, user: user) }
  let(:headers) do
    {
        'Authorization' => token_generator(user.id),
        'Content-Type' => 'application/json'
    }
  end

  describe 'GET /habbits/:habbit_id/executions' do
    let!(:execution) {create(:execution, habbit_id: users_habbit.id)}
    before { get "/habbits/#{users_habbit.id}/executions", headers: headers }

    it 'return executions for habbit' do
      expect(json).not_to be_empty
      expect(json.size).to eq(1)
      expect(json.first['habbit_id']).to eq(users_habbit.id)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'POST /habbits/:habbit_id/executions' do
    let(:valid_attributes) { { date: DateTime.now } }

    context 'when the request is valid' do
      before { post "/habbits/#{users_habbit.id}/executions", params: valid_attributes.to_json, headers: headers }

      it 'creates a habbit' do
        expect(json['date']).to eq(valid_attributes[:date].strftime('%F'))
        expect(json['habbit_id']).to eq(users_habbit.id)
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post "/habbits/#{users_habbit.id}/executions", params: { date: '' }.to_json, headers: headers }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body)
            .to match(/Validation failed: Date can't be blank/)
      end
    end
  end

  describe 'DELETE /habbits/:id' do
    let!(:execution) {create(:execution, habbit_id: users_habbit.id)}
    before { delete "/habbits/#{users_habbit.id}/executions/#{execution.id}", headers: headers }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end


end