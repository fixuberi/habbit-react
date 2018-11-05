require 'rails_helper'

RSpec.describe 'Habbits API', type: :request do
  let!(:habbits) { create_list(:habbit, 5) }
  let(:habbit_id) { habbits.first.id }

  describe 'GET /habbits' do
    before { get '/habbits' }

    it 'return habbits' do
      expect(json).not_to be_empty
      expect(json.size).to eq(5)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /habbits/:id' do
    before { get "/habbits/#{habbit_id}" }

    context 'when the record exists' do
      it 'returns the habbit' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(habbit_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:habbit_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Habbit/)
      end
    end
  end

  describe 'POST /habbits' do
    let(:valid_attributes) { { name: 'wake up early' } }

    context 'when the request is valid' do
      before { post '/habbits', params: valid_attributes }

      it 'creates a habbit' do
        expect(json['name']).to eq(valid_attributes[:name])
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post '/habbits', params: { name: '' } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body)
            .to match(/Validation failed: Name can't be blank/)
      end
    end
  end

  describe 'PUT /habbits/:id' do
    let(:valid_attributes) { { name: 'Shopping' } }

    context 'when the record exists' do
      before { put "/habbits/#{habbit_id}", params: valid_attributes }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

  describe 'DELETE /habbits/:id' do
    before { delete "/habbits/#{habbit_id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end