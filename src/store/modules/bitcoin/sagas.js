import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { getBitcoinsSuccess } from './actions';

import api from '../../../services/api';
const api_key = '52659f2d220e8e6b65f8388bc6139088e4186ff850934b2ecc70a3f2cfb541b0';

export function* getBitcoins() {
  try {
    const response = yield call(api.get, `/data/index/histo/day?indexName=MVDA&limit=10&api_key=${api_key}`);

    const data = response.data.map(bitcoin => ({
      ...bitcoin,
    }));

    yield put(getBitcoinsSuccess(data));
  } catch (error) {
    toast.error('Falha: Problemas na listagens dos Bitcoins');
  }
}

export function* createRegistration({ payload }) {
  try {
    const { data } = payload;

    yield call(api.post, 'registrations', data);

    toast.success('Matrícula criada com sucesso');
    // history.push('/registrations');
  } catch (error) {
    toast.error('Falha: Matrícula não foi criada');
  }
}

export function* updateRegistration({ payload }) {
  try {
    const { id, data } = payload;

    yield call(api.put, `registrations/${id}`, data);

    toast.success('Matrícula atualizada com sucesso');
  } catch (error) {
    toast.error('Falha: Matrícula não foi atualizada');
  }
}

export function* deleteRegistration({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `registrations/${id}`);

    toast.success('Matrícula deletada com sucesso');
  } catch (error) {
    toast.error('Falha: Matrícula não foi deletada de nosso banco de dados.');
  }
}

export default all([
  takeLatest('@bitcoin/GET_REQUEST', getBitcoins),
  takeLatest('@registration/DELETE_REQUEST', deleteRegistration),
  takeLatest('@registration/UPDATE_REQUEST', updateRegistration),
  takeLatest('@registration/CREATE_REQUEST', createRegistration),
]);
