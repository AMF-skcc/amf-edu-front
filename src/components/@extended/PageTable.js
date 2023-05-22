import React from 'react';
import PropTypes from 'prop-types';
import {
	TableHead,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	Table,
	Box,
	CircularProgress,
	Grid,
	Typography,
	Select,
	MenuItem
} from '@mui/material';
import { Pagination } from '@mui/lab';

const PageTable = ({
	columns,
	rows,
	rowsPerPageOptions = [10, 25, 100],
	page = 0,
	setPage,
	rowsPerPage = 10,
	setRowsPerPage,
	isLoading,
	totalPage = 1,
	rowClick,
	sort,
	setSort
}) => {
	// const [page, setPage] = useState(0);
	// const [rowsPerPage, setRowsPerPage] = useState(10);

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage - 1);
	};

	const handleChangeSort = (event) => {
		setSort(event.target.value);
	};

	return (
		<>
			{sort && setSort && (
				<Grid container justifyContent={'flex-end'} alignItems="center">
					<Grid item>
						<Typography style={{ marginRight: 15 }} variant="h6">
							정렬:
						</Typography>
					</Grid>
					<Select value={sort} onChange={handleChangeSort}>
						{columns.map((o) => {
							return (
								<MenuItem key={o.id} value={o.id}>
									{o.label}
								</MenuItem>
							);
						})}
					</Select>
				</Grid>
			)}
			<TableContainer sx={{ maxHeight: 550 }}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell key={column.id} align={column.align ? column.align : 'center'} style={{ width: column.width }}>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{!isLoading ? (
							rows &&
							rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
								return (
									<TableRow
										hover
										tabIndex={-1}
										key={row.id}
										onClick={rowClick ? (e) => rowClick(e, row) : () => {}}
										style={{ cursor: 'pointer' }}
									>
										{columns.map((column) => {
											const value = row[column.id];
											return (
												<TableCell key={column.id} align={column.align ? column.align : 'center'}>
													{column.render ? column.render(row) : value}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})
						) : (
							<TableRow>
								<TableCell align="center" colSpan={6}>
									<Box sx={{ py: 3, minHeight: 560 }}>
										<CircularProgress />
									</Box>
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer>
			{/*<TablePagination*/}
			{/*	rowsPerPageOptions={rowsPerPageOptions}*/}
			{/*	component="div"*/}
			{/*	count={rows ? rows.length : 0}*/}
			{/*	rowsPerPage={rowsPerPage}*/}
			{/*	page={page}*/}
			{/*	onPageChange={handleChangePage}*/}
			{/*	onRowsPerPageChange={handleChangeRowsPerPage}*/}
			{/*/>*/}
			<Grid container marginTop={2}>
				<Grid container xs={6} md={4} spacing={2} alignItems={'center'}>
					<Grid item xs={2} md={3.8}>
						<Typography style={{ marginBottom: 15 }}>Rows per page: </Typography>
					</Grid>
					<Grid item>
						<Select
							labelId="demo-simple-select-standard-label"
							id="demo-simple-select-standard"
							value={rowsPerPage}
							onChange={handleChangeRowsPerPage}
							defaultValue={rowsPerPageOptions[0]}
						>
							{rowsPerPageOptions.map((o) => {
								return (
									<MenuItem key={o} value={o}>
										{o}
									</MenuItem>
								);
							})}
						</Select>
					</Grid>
				</Grid>
				<Grid container xs={6} md={8} justifyContent={'flex-end'} alignItems="center">
					<Pagination count={totalPage} onChange={handleChangePage} showFirstButton showLastButton />
				</Grid>
			</Grid>
		</>
	);
};

export default PageTable;

PageTable.propTypes = {
	columns: PropTypes.array,
	rows: PropTypes.array,
	rowsPerPageOptions: PropTypes.array,
	page: PropTypes.number.isRequired,
	setPage: PropTypes.func.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
	setRowsPerPage: PropTypes.func.isRequired,
	isLoading: PropTypes.bool,
	totalPage: PropTypes.number.isRequired,
	rowClick: PropTypes.func,
	sort: PropTypes.string,
	setSort: PropTypes.func
};
