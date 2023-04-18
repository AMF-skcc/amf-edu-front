import React from 'react';
import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BookManagement = () => {
	const navigate = useNavigate();
	const onAddClick = () => {
		navigate('/book-admin/book/registration');
	};

	return (
		<>
			<Grid container direction="row" justifyContent="flex-end">
				<Button variant="contained" onClick={onAddClick}>
					등록
				</Button>
			</Grid>
		</>
	);
};

export default BookManagement;
