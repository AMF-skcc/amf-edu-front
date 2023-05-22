import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Box, Button, Checkbox, FormHelperText, Grid, OutlinedInput, Stack, Typography } from '@mui/material';
import { Formik } from 'formik';
import AnimateButton from 'components/@extended/AnimateButton';

const BookInfo = ({ bookInfo }) => {
	// const [isloading, setIsLoading] = useState(false);

	return (
		<>
			<Formik
				initialValues={{ ...bookInfo }}
				validationSchema={Yup.object().shape({
					title: Yup.string().max(255).required('제목은 필수입니다.')
					// volume: Yup.string().max(10),
					// author: Yup.string().max(255).required('저자명은 필수입니다.'),
					// translator: Yup.string().max(255),
					// publisher: Yup.string().max(100).required('출판사는 필수입니다.'),
					// price: Yup.number().required('가격은 필수입니다.'),
					// page: Yup.number().required('페이지는 필수입니다.'),
					// publicationDate: Yup.date().required('출판일자는 필수입니다.'),
					// coverImageUrl: Yup.string(),
					// category: Yup.string().required('카테고리는 필수입니다.'),
					// detailCategory: Yup.string().required('세부 카테고리는 필수입니다.'),
					// subject: Yup.string(),
					// callNumber: Yup.string().required('청구기호는 필수입니다.'),
					// bookIntro: Yup.string(),
					// bookIndex: Yup.string(),
					// bookSummary: Yup.string(),
					// donorEmail: Yup.string().email('이메일 형식으로 입력해주세요.').max(255)
				})}
				// onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
				onSubmit={async (values, { setStatus, setSubmitting }) => {
					console.log('value: ', values);
					setStatus({ success: false });
					setSubmitting(false);
					// setIsLoading(false);
					try {
						// setIsLoading(true);
						//Todo 등록 api 호출
						// await createMember(values);
						//
						// setStatus({ success: false });
						// setSubmitting(false);
						//
						// enqueueSnackbar('회원가입에 성공하였습니다.', { variant: 'success' });
						// navigate('/auth/login');
						// setIsLoading(false);
					} catch (err) {
						// console.error(err);
						// setStatus({ success: false });
						// setErrors({ submit: err.message });
						// setSubmitting(false);
						//
						// enqueueSnackbar('회원가입에 실패하였습니다.', { variant: 'error' });
					}
				}}
			>
				{({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
					<form noValidate onSubmit={handleSubmit}>
						<Stack spacing={2}>
							<Grid container>
								<Grid container xs={12} md={6} spacing={2} alignItems="center">
									<Grid item xs={1} md={1.4} justifyContent={'flex-end'} justifyItems={'end'}>
										<Typography textAlign={'end'}>제목 *</Typography>
									</Grid>
									<Grid item xs={23} md={10.6}>
										<OutlinedInput
											fullWidth
											error={Boolean(touched.title && errors.title)}
											id="title"
											type="text"
											value={values.title}
											name="title"
											onBlur={handleBlur}
											onChange={handleChange}
											placeholder="제목을 입력하세요"
											inputProps={{}}
										/>
										{touched.title && errors.title && (
											<FormHelperText error id="helper-text-title">
												{errors.title}
											</FormHelperText>
										)}
									</Grid>
								</Grid>
								<Grid container xs={6} md={3} spacing={2} alignItems="center">
									<Grid item xs={1} md={4} justifyContent={'flex-end'} justifyItems={'end'}>
										<Typography textAlign={'end'}>권차</Typography>
									</Grid>
									<Grid item xs={23} md={8}>
										<OutlinedInput
											fullWidth
											error={Boolean(touched.volume && errors.volume)}
											id="volume"
											type="text"
											value={values.volume}
											name="volume"
											onBlur={handleBlur}
											onChange={handleChange}
											placeholder="권차를 입력하세요"
											inputProps={{}}
										/>
										{touched.volume && errors.volume && (
											<FormHelperText error id="helper-text-volume">
												{errors.volume}
											</FormHelperText>
										)}
									</Grid>
								</Grid>
								<Grid container xs={6} md={3} spacing={2} alignItems="center">
									<Grid item xs={1} md={4} justifyContent={'flex-end'} justifyItems={'end'}>
										<Typography textAlign={'end'}>전자책 여부</Typography>
									</Grid>
									<Grid item xs={23} md={8}>
										<Checkbox
											error={Boolean(touched.isEBook && errors.isEBook)}
											id="isEBook"
											type="Boolean"
											value={values.isEBook}
											name="isEBook"
											onChange={handleChange}
										/>
									</Grid>
								</Grid>
							</Grid>
							<Grid container>
								<Grid container xs={12} md={6} spacing={2} alignItems="center">
									<Grid item xs={1} md={1.4} justifyContent={'flex-end'} justifyItems={'end'}>
										<Typography textAlign={'end'}>저자명 *</Typography>
									</Grid>
									<Grid item xs={23} md={10.6}>
										<OutlinedInput
											fullWidth
											error={Boolean(touched.author && errors.author)}
											id="author"
											type="text"
											value={values.author}
											name="author"
											onBlur={handleBlur}
											onChange={handleChange}
											placeholder="저자명을 입력하세요"
											inputProps={{}}
										/>
										{touched.author && errors.author && (
											<FormHelperText error id="helper-text-author">
												{errors.author}
											</FormHelperText>
										)}
									</Grid>
								</Grid>
								<Grid container xs={12} md={6} spacing={2} alignItems="center">
									<Grid item xs={1} md={2} justifyContent={'flex-end'} justifyItems={'end'}>
										<Typography textAlign={'end'}>역자명</Typography>
									</Grid>
									<Grid item xs={23} md={10}>
										<OutlinedInput
											fullWidth
											error={Boolean(touched.translator && errors.translator)}
											id="translator"
											ㅁ
											type="text"
											value={values.translator}
											name="translator"
											onBlur={handleBlur}
											onChange={handleChange}
											placeholder="역자명을 입력하세요"
											inputProps={{}}
										/>
										{touched.translator && errors.translator && (
											<FormHelperText error id="helper-text-translator">
												{errors.translator}
											</FormHelperText>
										)}
									</Grid>
								</Grid>
							</Grid>
							<Grid container>
								<Grid container xs={12} md={6} spacing={2} alignItems="center">
									<Grid item xs={1} md={1.4} justifyContent={'flex-end'} justifyItems={'end'}>
										<Typography textAlign={'end'}>출판사 *</Typography>
									</Grid>
									<Grid item xs={23} md={10.6}>
										<OutlinedInput
											fullWidth
											error={Boolean(touched.publisher && errors.publisher)}
											id="publisher"
											type="text"
											value={values.publisher}
											name="publisher"
											onBlur={handleBlur}
											onChange={handleChange}
											placeholder="출판사를 입력하세요"
											inputProps={{}}
										/>
										{touched.publisher && errors.publisher && (
											<FormHelperText error id="helper-text-publisher">
												{errors.publisher}
											</FormHelperText>
										)}
									</Grid>
								</Grid>
								<Grid container xs={6} md={3} spacing={2} alignItems="center">
									<Grid item xs={1} md={4} justifyContent={'flex-end'} justifyItems={'end'}>
										<Typography textAlign={'end'}>가격 *</Typography>
									</Grid>
									<Grid item xs={23} md={8}>
										<OutlinedInput
											fullWidth
											error={Boolean(touched.price && errors.price)}
											id="price"
											type="number"
											value={values.price}
											name="price"
											onBlur={handleBlur}
											onChange={handleChange}
											placeholder="가격을 입력하세요"
											inputProps={{}}
											endAdornment={'원'}
										/>
										{touched.price && errors.price && (
											<FormHelperText error id="helper-text-price">
												{errors.price}
											</FormHelperText>
										)}
									</Grid>
								</Grid>
								<Grid container xs={6} md={3} spacing={2} alignItems="center">
									<Grid item xs={1} md={4} justifyContent={'flex-end'} justifyItems={'end'}>
										<Typography textAlign={'end'}>페이지 *</Typography>
									</Grid>
									<Grid item xs={23} md={8}>
										<OutlinedInput
											fullWidth
											error={Boolean(touched.page && errors.page)}
											id="page"
											type="number"
											value={values.page}
											name="page"
											onBlur={handleBlur}
											onChange={handleChange}
											placeholder="페이지를 입력하세요"
											inputProps={{}}
											endAdornment={'page'}
										/>
										{touched.page && errors.page && (
											<FormHelperText error id="helper-text-page">
												{errors.page}
											</FormHelperText>
										)}
									</Grid>
								</Grid>
							</Grid>
							{/*Todo */}
							{/*카테고리 콤보박스 추가*/}
							<Grid container>
								<Grid container xs={12} md={6} spacing={2} alignItems="center">
									<Grid item xs={1} md={1.4} justifyContent={'flex-end'} justifyItems={'end'}>
										<Typography textAlign={'end'}>출판일자 *</Typography>
									</Grid>
									<Grid item xs={23} md={10.6}>
										<OutlinedInput
											fullWidth
											error={Boolean(touched.publicationDate && errors.publicationDate)}
											id="publicationDate"
											type="date"
											value={values.publicationDate}
											name="publicationDate"
											onBlur={handleBlur}
											onChange={handleChange}
											placeholder="출판일자를 입력하세요"
											inputProps={{}}
										/>
										{touched.publicationDate && errors.publicationDate && (
											<FormHelperText error id="helper-text-publicationDate">
												{errors.publicationDate}
											</FormHelperText>
										)}
									</Grid>
								</Grid>
								<Grid container xs={12} md={6} spacing={2} alignItems="center">
									<Grid item xs={1} md={2} justifyContent={'flex-end'} justifyItems={'end'}>
										<Typography textAlign={'end'}>표지 이미지</Typography>
									</Grid>
									<Grid item xs={23} md={10}>
										<OutlinedInput
											fullWidth
											error={Boolean(touched.coverImageUrl && errors.coverImageUrl)}
											id="coverImageUrl"
											type="text"
											value={values.coverImageUrl}
											name="coverImageUrl"
											onBlur={handleBlur}
											onChange={handleChange}
											placeholder="표지 이미지 URL을 입력하세요"
											inputProps={{}}
										/>
										{touched.coverImageUrl && errors.coverImageUrl && (
											<FormHelperText error id="helper-text-coverImageUrl">
												{errors.coverImageUrl}
											</FormHelperText>
										)}
									</Grid>
								</Grid>
							</Grid>
							<Grid container>
								<Grid container xs={12} md={6} spacing={2} alignItems="center">
									<Grid item xs={1} md={1.4} justifyContent={'flex-end'} justifyItems={'end'}>
										<Typography textAlign={'end'}>주제</Typography>
									</Grid>
									<Grid item xs={23} md={10.6}>
										<OutlinedInput
											fullWidth
											error={Boolean(touched.subject && errors.subject)}
											id="subject"
											type="text"
											value={values.subject}
											name="subject"
											onBlur={handleBlur}
											onChange={handleChange}
											placeholder="주제를 입력하세요"
											inputProps={{}}
										/>
										{touched.subject && errors.subject && (
											<FormHelperText error id="helper-text-subject">
												{errors.subject}
											</FormHelperText>
										)}
									</Grid>
								</Grid>
								<Grid container xs={12} md={6} spacing={2} alignItems="center">
									<Grid item xs={1} md={2} justifyContent={'flex-end'} justifyItems={'end'}>
										<Typography textAlign={'end'}>청구기호 *</Typography>
									</Grid>
									<Grid item xs={23} md={10}>
										<OutlinedInput
											fullWidth
											error={Boolean(touched.callNumber && errors.callNumber)}
											id="callNumber"
											type="text"
											value={values.callNumber}
											name="callNumber"
											onBlur={handleBlur}
											onChange={handleChange}
											placeholder="청구기호를 입력하세요"
											inputProps={{}}
										/>
										{touched.callNumber && errors.callNumber && (
											<FormHelperText error id="helper-text-callNumber">
												{errors.callNumber}
											</FormHelperText>
										)}
									</Grid>
								</Grid>
							</Grid>
							<Grid container>
								<Grid container xs={24} md={12} spacing={2} alignItems="center">
									<Grid item xs={1} md={0.7} justifyContent={'flex-end'} justifyItems={'end'}>
										<Typography textAlign={'end'}>책 소개</Typography>
									</Grid>
									<Grid item xs={23} md={11.3}>
										<OutlinedInput
											fullWidth
											error={Boolean(touched.bookIntro && errors.bookIntro)}
											id="bookIntro"
											type="text"
											value={values.bookIntro}
											name="bookIntro"
											onBlur={handleBlur}
											onChange={handleChange}
											placeholder="책 소개를 입력하세요"
											inputProps={{}}
										/>
										{touched.bookIntro && errors.bookIntro && (
											<FormHelperText error id="helper-text-bookIntro">
												{errors.bookIntro}
											</FormHelperText>
										)}
									</Grid>
								</Grid>
							</Grid>
							<Grid container>
								<Grid container xs={24} md={12} spacing={2} alignItems="center">
									<Grid item xs={1} md={0.7} justifyContent={'flex-end'} justifyItems={'end'}>
										<Typography textAlign={'end'}>목차</Typography>
									</Grid>
								</Grid>
								<Grid container xs={24} md={12} spacing={2} alignItems="center">
									<Grid item xs={1} md={0.4}>
										<Box />
									</Grid>
									<Grid item xs={23} md={11.6} justifyContent={'flex-end'} justifyItems={'end'}>
										<OutlinedInput
											fullWidth
											error={Boolean(touched.bookIndex && errors.bookIndex)}
											id="bookIndex"
											type="text"
											value={values.bookIndex}
											name="bookIndex"
											onBlur={handleBlur}
											onChange={handleChange}
											placeholder="목차를 입력하세요"
											inputProps={{}}
											multiline
											minRows={3}
										/>
										{touched.bookIndex && errors.bookIndex && (
											<FormHelperText error id="helper-text-bookIndex">
												{errors.bookIndex}
											</FormHelperText>
										)}
									</Grid>
								</Grid>
							</Grid>
							<Grid container>
								<Grid container xs={24} md={12} spacing={2} alignItems="center">
									<Grid item xs={1} md={0.7} justifyContent={'flex-end'} justifyItems={'end'}>
										<Typography textAlign={'end'}>책 요약</Typography>
									</Grid>
								</Grid>
								<Grid container xs={24} md={12} spacing={2} alignItems="center">
									<Grid item xs={1} md={0.4}>
										<Box />
									</Grid>
									<Grid item xs={23} md={11.6} justifyContent={'flex-end'} justifyItems={'end'}>
										<OutlinedInput
											fullWidth
											error={Boolean(touched.bookSummary && errors.bookSummary)}
											id="bookSummary"
											type="text"
											value={values.bookSummary}
											name="bookSummary"
											onBlur={handleBlur}
											onChange={handleChange}
											placeholder="책 요약을 입력하세요"
											inputProps={{}}
											multiline
											minRows={3}
										/>
										{touched.bookSummary && errors.bookSummary && (
											<FormHelperText error id="helper-text-bookSummary">
												{errors.bookSummary}
											</FormHelperText>
										)}
									</Grid>
								</Grid>
							</Grid>
							<Grid container>
								<Grid container xs={6} md={2} spacing={2} alignItems="center">
									<Grid item xs={1} md={4} justifyContent={'flex-end'} justifyItems={'end'}>
										<Typography textAlign={'end'}>기증 여부</Typography>
									</Grid>
									<Grid item xs={23} md={2}>
										<Checkbox
											error={Boolean(touched.isDonate && errors.isDonate)}
											id="isDonate"
											type="Boolean"
											value={values.isDonate}
											name="isDonate"
											onChange={handleChange}
										/>
									</Grid>
								</Grid>
								<Grid container xs={18} md={10} spacing={2} alignItems="center">
									<Grid item xs={1} md={1} justifyContent={'flex-end'} justifyItems={'end'}>
										<Typography textAlign={'end'}>기증자 이메일</Typography>
									</Grid>
									<Grid item xs={23} md={11}>
										<OutlinedInput
											fullWidth
											error={Boolean(touched.donorEmail && errors.donorEmail)}
											id="donorEmail"
											type="text"
											value={values.donorEmail}
											name="donorEmail"
											onBlur={handleBlur}
											onChange={handleChange}
											placeholder="기증자 이메일을 입력하세요"
											inputProps={{}}
										/>
										{touched.donorEmail && errors.donorEmail && (
											<FormHelperText error id="helper-text-donorEmail">
												{errors.donorEmail}
											</FormHelperText>
										)}
									</Grid>
								</Grid>
							</Grid>
							{errors.submit && (
								<Grid item xs={12}>
									<FormHelperText error>{errors.submit}</FormHelperText>
								</Grid>
							)}
							<Grid container xs={12} justifyContent={'flex-end'} justifyItems={'end'}>
								{/*<LoadingButton*/}
								{/*	loading={isloading}*/}
								{/*	disabled={isSubmitting}*/}
								{/*	size="large"*/}
								{/*	type="submit"*/}
								{/*	variant="contained"*/}
								{/*	color="primary"*/}
								{/*>*/}
								{/*	등록*/}
								{/*</LoadingButton>*/}
								<AnimateButton>
									<Button
										disableElevation
										disabled={isSubmitting}
										size="large"
										type="submit"
										variant="contained"
										color="primary"
									>
										등록
									</Button>
								</AnimateButton>
							</Grid>
						</Stack>
					</form>
				)}
			</Formik>
		</>
	);
};

export default BookInfo;

BookInfo.prototype = {
	bookInfo: PropTypes.string.isRequired
};
