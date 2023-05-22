import React, { useState } from 'react';
import PageTable from 'components/@extended/PageTable';
import CreateMainCategoryModal from './CreateMainCategoryModal';
import { Button, Grid } from '@mui/material';

const CategoryManagement = () => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	// eslint-disable-next-line no-unused-vars
	const [isLoading, setIsLoading] = useState(false);
	const [sort, setSort] = useState(columns[0].id);

	const [isCreateMainCategoryModalOpen, setIsCreateMainCategoryModalOpen] = useState(false);

	const openCreateMainCategoryModal = () => {
		setIsCreateMainCategoryModalOpen(true);
	};

	return (
		<>
			<Grid container justifyContent={'flex-end'} marginBottom={1} spacing={2}>
				<Grid item>
					<Button variant={'contained'} onClick={openCreateMainCategoryModal}>
						카테고리 추가
					</Button>
				</Grid>
				<Grid item>
					<Button variant={'contained'} onClick={openCreateMainCategoryModal}>
						세부 카테고리 추가
					</Button>
				</Grid>
			</Grid>
			<CreateMainCategoryModal
				isCreateMainCategoryModalOpen={isCreateMainCategoryModalOpen}
				setIsCreateMainCategoryModalOpen={setIsCreateMainCategoryModalOpen}
			/>
			<PageTable
				columns={columns}
				rows={data}
				rowsPerPageOptions={[10, 20, 30]}
				page={page}
				setPage={setPage}
				rowsPerPage={rowsPerPage}
				setRowsPerPage={setRowsPerPage}
				isLoading={isLoading}
				sort={sort}
				setSort={setSort}
			/>
		</>
	);
};

export default CategoryManagement;

const columns = [
	{
		id: 'mainCategoryName',
		label: '카테고리',
		width: 290,
		align: 'left'
	},
	{
		id: 'mainCategoryCode',
		label: '분류기호',
		width: 60,
		align: 'left'
	},
	{
		id: 'subCategoryName',
		label: '세부 카테고리',
		width: 50,
		align: 'left'
	},
	{
		id: 'subCategoryCode',
		label: '세부 분류기호',
		width: 50,
		align: 'left'
	}
];
const data = [
	{
		mainCategoryName: 'test',
		mainCategoryCode: '1',
		subCategoryName: 'test',
		subCategoryCode: '1'
	},
	{
		mainCategoryName: 'test',
		mainCategoryCode: '12',
		subCategoryName: 'test',
		subCategoryCode: '1'
	},
	{
		mainCategoryName: 'test',
		mainCategoryCode: '13',
		subCategoryName: 'test',
		subCategoryCode: '1'
	},
	{
		mainCategoryName: 'test',
		mainCategoryCode: '14',
		subCategoryName: 'test',
		subCategoryCode: '1'
	},
	{
		mainCategoryName: 'test',
		mainCategoryCode: '15',
		subCategoryName: 'test',
		subCategoryCode: '1'
	},
	{
		mainCategoryName: 'test',
		mainCategoryCode: '16',
		subCategoryName: 'test',
		subCategoryCode: '1'
	},
	{
		mainCategoryName: 'test',
		mainCategoryCode: '17',
		subCategoryName: 'test',
		subCategoryCode: '1'
	},
	{
		mainCategoryName: 'test',
		mainCategoryCode: '18',
		subCategoryName: 'test',
		subCategoryCode: '1'
	},
	{
		mainCategoryName: 'test',
		mainCategoryCode: '19',
		subCategoryName: 'test',
		subCategoryCode: '1'
	},
	{
		mainCategoryName: 'test',
		mainCategoryCode: '20',
		subCategoryName: 'test',
		subCategoryCode: '1'
	},
	{
		mainCategoryName: 'test',
		mainCategoryCode: '21',
		subCategoryName: 'test',
		subCategoryCode: '1'
	},
	{
		mainCategoryName: 'test',
		mainCategoryCode: '22',
		subCategoryName: 'test',
		subCategoryCode: '1'
	}
];
