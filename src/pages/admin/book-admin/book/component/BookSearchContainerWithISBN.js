import React, { useState } from 'react';
import { Grid, OutlinedInput, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import PropTypes from 'prop-types';

const BookSearchContainerWithISBN = ({ setBookInfo }) => {
	const [isbn, setIsbn] = useState();
	const [loading, isLoading] = useState(false);

	const onISBNChange = (e) => {
		const regex = /^[0-9\b -]{0,17}$/;

		if (regex.test(e.target.value)) {
			setIsbn(e.target.value);
		}
	};

	const onClickSearch = () => {
		isLoading(true);

		//Todo 조회 api 연결
		const result = {};
		setBookInfo(result);
		console.log('isbn: ', isbn);
		isLoading(false);
	};
	return (
		<>
			<Grid container spacing={2} alignItems="center">
				<Grid item md={0.7} justifyContent={'flex-end'} justifyItems={'end'}>
					<Typography textAlign={'end'}>ISBN</Typography>
				</Grid>
				<Grid item md={5.12}>
					<OutlinedInput
						fullWidth
						id="isbn-registration"
						value={isbn}
						name="isbn"
						onChange={onISBNChange}
						placeholder="ISBN을 입력하세요"
						inputProps={{}}
					/>
				</Grid>
				<Grid item md={2} justifyContent={'flex-end'} justifyItems={'end'}>
					<LoadingButton fullwidth variant={'contained'} onClick={onClickSearch} loading={loading}>
						조회
					</LoadingButton>
				</Grid>
			</Grid>
		</>
	);
};

export default BookSearchContainerWithISBN;

BookSearchContainerWithISBN.prototype = {
	setBookInfo: PropTypes.func.isRequired
};
