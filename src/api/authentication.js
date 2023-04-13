import { default as axios } from 'utils/axiosHandler';

const DEFAULT_URL = '/api/v1';
const MEMBER_LOGIN = DEFAULT_URL + '/member-login';
const ADMIN_LOGIN = DEFAULT_URL + '/admin-login';
const MEMBER = DEFAULT_URL + '/member';

export const loginForMember = async (params) => axios.post(MEMBER_LOGIN, params);
export const loginForAdmin = async (params) => axios.post(ADMIN_LOGIN, params);

export const createMember = async (params) => axios.post(MEMBER, params);

export const updateMember = async (memberId, params) => axios.put(`${MEMBER}/${memberId}`, params);
