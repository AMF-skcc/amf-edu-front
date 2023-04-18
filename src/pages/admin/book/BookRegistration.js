import React, { useState } from 'react';
import BookSearchContainerWithISBN from './component/BookSearchContainerWithISBN';
import BookInfo from './component/BookInfo';
import { Stack } from '@mui/material';

const defaultBookInfo = {
	isbn: '',
	title: '',
	volume: '',
	isEBook: false,
	author: '',
	translator: '',
	publisher: '',
	price: '',
	page: '',
	publicationDate: '',
	coverImageUrl: '',
	category: '',
	detailCategory: '',
	subject: '',
	callNumber: '',
	bookIntro: '',
	bookIndex: '',
	bookSummary: '',
	isDonate: false,
	donorEmail: ''
};

const BookRegistration = () => {
	const [bookInfo, setBookInfo] = useState(defaultBookInfo);

	return (
		<>
			<Stack spacing={3}>
				<BookSearchContainerWithISBN setBookInfo={setBookInfo} />
				<BookInfo bookInfo={bookInfo} />
			</Stack>
		</>
	);
};

export default BookRegistration;
