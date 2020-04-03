export function getBitcoinsRequest() {
  return {
    type: '@bitcoin/GET_REQUEST',
  };
}
export function getBitcoinsSuccess(data) {
  return {
    type: '@bitcoin/GET_SUCCESS',
    payload: { data },
  };
}

export function createBitcoinRequest(data) {
  return {
    type: '@bitcoin/CREATE_REQUEST',
    payload: { data },
  };
}
export function updateBitcoinRequest(id, data) {
  return {
    type: '@bitcoin/UPDATE_REQUEST',
    payload: { id, data },
  };
}

export function deleteBitcoinRequest(id) {
  return {
    type: '@bitcoin/DELETE_REQUEST',
    payload: { id },
  };
}
