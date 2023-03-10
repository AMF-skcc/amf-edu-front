import {default as axios} from 'utils/axiosHandler'

const DEFAULT_URL = '/api/v1'
const TEAM_URL = DEFAULT_URL + '/teams'


export const getAllTeamList = async () =>
    axios.get(TEAM_URL);

export const deleteTeam = async (teamId) =>
    axios.delete(`${TEAM_URL}/${teamId}`);
