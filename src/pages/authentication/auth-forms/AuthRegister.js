import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	Grid,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Stack,
	Typography,
	Select,
	MenuItem
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { createMember } from '../../../api/authentication';
import { useSnackbar } from 'notistack';
import { getAllTeamList } from '../../../api/team';

// ============================|| FIREBASE - REGISTER ||============================ //

const AuthRegister = () => {
	const [level, setLevel] = useState();
	const [showPassword, setShowPassword] = useState(false);
	const [teams, setTeams] = useState([]);

	const { enqueueSnackbar } = useSnackbar();
	const navigate = useNavigate();

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const changePassword = (value) => {
		const temp = strengthIndicator(value);
		setLevel(strengthColor(temp));
	};

	useEffect(async () => {
		changePassword('');
		const result = await getAllTeamList();
		setTeams(result);
	}, []);

	return (
		<>
			<Formik
				initialValues={{
					name: '',
					email: '',
					teamId: '1',
					role: '',
					password: '',
					submit: null
				}}
				validationSchema={Yup.object().shape({
					name: Yup.string().max(255).required('이름은 필수입니다.'),
					email: Yup.string().email('Must be a valid email').max(255).required('이메일은 필수입니다.'),
					password: Yup.string().max(255).required('비밀번호는 필수입니다.'),
					teamId: Yup.string().max(255).required('팀은 필수선택입니다.')
				})}
				onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
					try {
						console.log('values:', values);

						await createMember(values);

						setStatus({ success: false });
						setSubmitting(false);

						enqueueSnackbar('회원가입에 성공하였습니다.', { variant: 'success' });
						navigate('/auth/login');
					} catch (err) {
						console.error(err);
						setStatus({ success: false });
						setErrors({ submit: err.message });
						setSubmitting(false);

						enqueueSnackbar('회원가입에 실패하였습니다.', { variant: 'error' });
					}
				}}
			>
				{({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
					<form noValidate onSubmit={handleSubmit}>
						<Grid container spacing={3}>
							<Grid item xs={24} md={12}>
								<Stack spacing={1}>
									<InputLabel htmlFor="name-signup"> 이름 *</InputLabel>
									<OutlinedInput
										fullWidth
										error={Boolean(touched.name && errors.name)}
										id="name-signup"
										type="name"
										value={values.name}
										name="name"
										onBlur={handleBlur}
										onChange={handleChange}
										placeholder="이름을 입력하세요"
										inputProps={{}}
									/>
									{touched.name && errors.name && (
										<FormHelperText error id="helper-text-name-signup">
											{errors.name}
										</FormHelperText>
									)}
								</Stack>
							</Grid>
							<Grid item xs={12}>
								<Stack spacing={1}>
									<InputLabel htmlFor="email-signup">이메일 *</InputLabel>
									<OutlinedInput
										fullWidth
										error={Boolean(touched.email && errors.email)}
										id="email-login"
										type="email"
										value={values.email}
										name="email"
										onBlur={handleBlur}
										onChange={handleChange}
										placeholder="이메일을 입력하세요."
										inputProps={{}}
									/>
									{touched.email && errors.email && (
										<FormHelperText error id="helper-text-email-signup">
											{errors.email}
										</FormHelperText>
									)}
								</Stack>
							</Grid>
							<Grid item xs={12}>
								<Stack spacing={1}>
									<InputLabel htmlFor="password-signup">비밀번호 *</InputLabel>
									<OutlinedInput
										fullWidth
										error={Boolean(touched.password && errors.password)}
										id="password-signup"
										type={showPassword ? 'text' : 'password'}
										value={values.password}
										name="password"
										onBlur={handleBlur}
										onChange={(e) => {
											handleChange(e);
											changePassword(e.target.value);
										}}
										endAdornment={
											<InputAdornment position="end">
												<IconButton
													aria-label="toggle password visibility"
													onClick={handleClickShowPassword}
													onMouseDown={handleMouseDownPassword}
													edge="end"
													size="large"
												>
													{showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
												</IconButton>
											</InputAdornment>
										}
										placeholder="비밀번호를 입력하세요."
										inputProps={{}}
									/>
									{touched.password && errors.password && (
										<FormHelperText error id="helper-text-password-signup">
											{errors.password}
										</FormHelperText>
									)}
								</Stack>
								<FormControl fullWidth sx={{ mt: 2 }}>
									<Grid container spacing={2} alignItems="center">
										<Grid item>
											<Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
										</Grid>
										<Grid item>
											<Typography variant="subtitle1" fontSize="0.75rem">
												{level?.label}
											</Typography>
										</Grid>
									</Grid>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<Stack spacing={1}>
									<InputLabel htmlFor="teamId-signup">팀 *</InputLabel>
									<Select
										fullWidth
										error={Boolean(touched.teamId && errors.teamId)}
										id="teamId-signup"
										value={values.teamId}
										name="teamId"
										onBlur={handleBlur}
										onChange={handleChange}
										placeholder="팀을 선택하세요"
										inputProps={{}}
									>
										{teams.map((o) => {
											return (
												<MenuItem value={o.id} key={o.id}>
													{o.name}
												</MenuItem>
											);
										})}
									</Select>
									{touched.teamId && errors.teamId && (
										<FormHelperText error id="helper-text-teamId-signup">
											{errors.teamId}
										</FormHelperText>
									)}
								</Stack>
							</Grid>
							<Grid item xs={12}>
								<Stack spacing={1}>
									<InputLabel htmlFor="role-signup">역할</InputLabel>
									<OutlinedInput
										fullWidth
										error={Boolean(touched.role && errors.role)}
										id="role-signup"
										value={values.role}
										name="role"
										onBlur={handleBlur}
										onChange={handleChange}
										placeholder="역할을 입력하세요."
										inputProps={{}}
									/>
									{touched.role && errors.role && (
										<FormHelperText error id="helper-text-role-signup">
											{errors.role}
										</FormHelperText>
									)}
								</Stack>
							</Grid>
							{errors.submit && (
								<Grid item xs={12}>
									<FormHelperText error>{errors.submit}</FormHelperText>
								</Grid>
							)}
							<Grid item xs={12}>
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
										가입
									</Button>
								</AnimateButton>
							</Grid>
						</Grid>
					</form>
				)}
			</Formik>
		</>
	);
};

export default AuthRegister;
