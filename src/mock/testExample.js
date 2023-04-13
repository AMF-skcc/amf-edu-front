export const Admin = {
	id: 1,
	name: 'example',
	email: 'example@sk.com',
	password: 'example'
};

export const Teams = [
	{
		id: 1,
		name: 'example-team-1'
	},
	{
		id: 2,
		name: 'example-team-2'
	}
];

export const Member = {
	id: 1,
	teamId: 1,
	name: 'example',
	role: 'Leader',
	email: 'example@sk.com',
	mobile: '010-0000-0000',
	password: 'example'
};

export const Courses = [
	{
		id: 1,
		adminId: 1,
		name: 'example-course',
		courseId: 1
	}
];

export const Subjects = [
	{
		id: 1,
		courseId: 1,
		instructorId: 1,
		instructorName: '이강사',
		name: 'example-subject',
		building: 'example-building',
		floor: '1',
		roomNo: '101'
	}
];

export const Instructors = [
	{
		id: 1,
		name: 'example-instructor'
	}
];

export const Attendances = [
	{
		id: 1,
		courseId: 1,
		memberId: 1
	}
];
