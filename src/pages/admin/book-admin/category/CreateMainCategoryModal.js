import React from 'react';
import { Box, Button, FormHelperText, Grid, InputLabel, Modal, OutlinedInput, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import * as Yup from 'yup';
import { Formik } from 'formik';

const CreateMainCategoryModal = ({ isCreateMainCategoryModalOpen = false, setIsCreateMainCategoryModalOpen }) => {
	// const [createLoading, isCreateLoading] = useState(false);

	const handleClose = () => {
		setIsCreateMainCategoryModalOpen(false);
	};

	const createMainCategory = () => {
		// isCreateLoading(true);
		// isCreateLoading(false);
	};

	return (
		<Modal
			open={isCreateMainCategoryModalOpen}
			onClose={handleClose}
			aria-labelledby="parent-modal-title"
			aria-describedby="parent-modal-description"
		>
			<Box sx={{ ...style, width: 400 }}>
				<h2 id="parent-modal-title">카테고리 추가</h2>
				<Formik
					initialValues={{
						mainCategoryName: '',
						mainCategoryCode: '',
						submit: null
					}}
					validationSchema={Yup.object().shape({
						mainCategoryName: Yup.string().max(30).required('카테고리명은 필수입니다.'),
						mainCategoryCode: Yup.string().max(255).required('분류기호는 필수입니다.')
					})}
					onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
						try {
							setStatus({ success: false });
							setSubmitting(true);
						} catch (err) {
							setStatus({ success: false });
							setErrors({ submit: err.message });
							setSubmitting(false);
						}
					}}
				>
					{({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
						<form noValidate onSubmit={handleSubmit}>
							<Grid container spacing={3}>
								<Grid item xs={12}>
									<Stack spacing={1}>
										<InputLabel htmlFor="main-category-name">카테고리명</InputLabel>
										<OutlinedInput
											id="main-category-name"
											type="String"
											value={values.mainCategoryName}
											name="mainCategoryName"
											onBlur={handleBlur}
											onChange={handleChange}
											placeholder="카테고리 명을 입력하세요."
											fullWidth
											error={Boolean(touched.mainCategoryName && errors.mainCategoryName)}
										/>
										{touched.mainCategoryName && errors.mainCategoryName && (
											<FormHelperText error id="standard-weight-helper-text-mainCategoryName-login">
												{errors.mainCategoryName}
											</FormHelperText>
										)}
									</Stack>
								</Grid>
								<Grid item xs={12}>
									<Stack spacing={1}>
										<InputLabel htmlFor="main-category-code">븐류기호</InputLabel>
										<OutlinedInput
											id="main-category-code"
											type="mainCategoryCode"
											value={values.mainCategoryCode}
											name="mainCategoryCode"
											onBlur={handleBlur}
											onChange={handleChange}
											placeholder="분류기호를 입력하세요"
											fullWidth
											error={Boolean(touched.mainCategoryCode && errors.mainCategoryCode)}
										/>
										{touched.mainCategoryCode && errors.mainCategoryCode && (
											<FormHelperText error id="standard-weight-helper-text-mainCategoryCode-login">
												{errors.mainCategoryCode}
											</FormHelperText>
										)}
									</Stack>
								</Grid>
								{errors.submit && (
									<Grid item xs={12}>
										<FormHelperText error>{errors.submit}</FormHelperText>
									</Grid>
								)}
								<Grid container direction="row" justifyContent="center" spacing={2} marginTop={1}>
									<Grid item>
										<LoadingButton
											variant="contained"
											onClick={createMainCategory}
											loading={isSubmitting}
											type="submit"
										>
											추가
										</LoadingButton>
									</Grid>
									<Grid item>
										<Button variant={'outlined'} onClick={handleClose}>
											취소
										</Button>
									</Grid>
								</Grid>
							</Grid>
						</form>
					)}
				</Formik>
			</Box>
		</Modal>
	);
};

export default CreateMainCategoryModal;

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	pt: 2,
	px: 4,
	pb: 3
};
