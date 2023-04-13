import React from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import { updateMember } from 'api/authentication';
import { useEffect, useState } from 'react';
import { getLoginInfo, logout } from 'utils/authHandler';
import { enqueueSnackbar } from 'notistack';
import MainCard from 'components/MainCard';
import { Button, Grid, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import { getAllTeamList } from 'api/team';
import AnimateButton from 'components/@extended/AnimateButton';

const Profile = () => {
	const baseUserInfo = getLoginInfo();

	const [teams, setTeams] = useState([]);

	useEffect(async () => {
		const result = await getAllTeamList();
		setTeams(result);
	}, []);

	const formik = useFormik({
		initialValues: {
			id: baseUserInfo.id,
			teamId: baseUserInfo.teamId,
			name: baseUserInfo.name,
			role: baseUserInfo.role,
			email: baseUserInfo.email
		},
		validationSchema: Yup.object().shape({
			teamId: Yup.string().required('팀을 선택해주세요.'),
			name: Yup.string().required('이름을 입력해주세요.'),
			email: Yup.string().email('Must be a valid email').max(255).required('이메일은 필수입니다.')
		}),
		onSubmit: async (values, { setSubmitting }) => {
			setSubmitting(true);
			try {
				await updateMember(baseUserInfo.id, values);
				enqueueSnackbar('정보가 변경되었습니다. 다시 로그인 해주세요.', { variant: 'success' });
				logout();
			} catch {
				enqueueSnackbar('정보 변경에 실패하였습니다.', { variant: 'error' });
			}
			setSubmitting(false);
		}
	});

	const { errors, touched, handleSubmit, getFieldProps, isSubmitting } = formik;

	return (
		<>
			<MainCard darkTitle={true} title={'회원 정보 변경'}>
				<FormikProvider value={formik}>
					<Form onSubmit={handleSubmit}>
						<Grid container spacing={1}>
							<Grid item xs={24} md={12}>
								<Stack spacing={1}>
									<InputLabel htmlFor="name-signup"> 이름 *</InputLabel>
									<TextField
										name="name"
										label="이름"
										fullWidth
										{...getFieldProps('name')}
										error={Boolean(touched.name && errors.name)}
										helperText={touched.name && errors.name}
									/>
								</Stack>
							</Grid>
							<Grid item xs={24} md={12}>
								<Stack spacing={1}>
									<InputLabel htmlFor="email-signup"> 이메일 *</InputLabel>
									<TextField
										name="email"
										label="이메일"
										fullWidth
										disabled
										{...getFieldProps('email')}
										error={Boolean(touched.email && errors.email)}
										helperText={touched.email && errors.email}
									/>
								</Stack>
							</Grid>
							<Grid item xs={24} md={12}>
								<Stack spacing={1}>
									<InputLabel htmlFor="team-signup"> 팀 *</InputLabel>
									<Select
										fullWidth
										error={Boolean(touched.teamId && errors.teamId)}
										id="teamId-signup"
										// value={values.teamId}
										{...getFieldProps('teamId')}
										name="teamId"
										placeholder="팀을 선택하세요"
										inputProps={{}}
										helperText={touched.teamId && errors.teamId}
									>
										{teams.map((o) => {
											return (
												<MenuItem value={o.id} key={o.id}>
													{o.name}
												</MenuItem>
											);
										})}
									</Select>
								</Stack>
							</Grid>
							<Grid item xs={24} md={12}>
								<Stack spacing={1}>
									<InputLabel htmlFor="role-signup"> 이름 *</InputLabel>
									<TextField
										name="role"
										label="역할"
										fullWidth
										{...getFieldProps('role')}
										error={Boolean(touched.role && errors.role)}
										helperText={touched.role && errors.role}
									/>
								</Stack>
							</Grid>
							<Grid container justifyContent="flex-end" direction="row" spacing={2} style={{ marginTop: '10' }} xs={12}>
								<Grid item>
									<AnimateButton>
										<Button
											disableElevation
											disabled={isSubmitting}
											fullWidth
											size="large"
											type="submit"
											variant="contained"
											color="primary"
										>
											변경
										</Button>
									</AnimateButton>
								</Grid>
							</Grid>
						</Grid>
					</Form>
				</FormikProvider>
			</MainCard>
		</>
	);
};

export default Profile;
