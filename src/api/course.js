import {default as axios} from 'utils/axiosHandler'

const DEFAULT_URL = '/api/v1'
const COURSE_URL = DEFAULT_URL + '/courses'
const COURSE_SUBJECT_LIST = '/subjects'
const ATTENDANCES_URL = DEFAULT_URL + '/attendances'
const MEMBER_ATTENDANCES_URL = ATTENDANCES_URL + '/member'

export const getAllCourseList = async () =>
    axios.get(COURSE_URL);

export const getCourseSubjectList = async (courseId) =>
    axios.get( `${COURSE_URL}/${courseId}${COURSE_SUBJECT_LIST}`);

export const createAttendance = async params =>
    axios.post(ATTENDANCES_URL, params);

export const getAttendanceById = async (memberId) =>
    axios.get( `${MEMBER_ATTENDANCES_URL}/${memberId}`);

export const deleteAttendance = async (attendanceId) =>
    axios.delete(`${ATTENDANCES_URL}/${attendanceId}`);
