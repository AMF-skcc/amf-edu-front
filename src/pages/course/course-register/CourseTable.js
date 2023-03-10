import {Button} from "@mui/material";
import MainCard from "components/MainCard";
import DataTable from "components/@extended/DataTable";
import {useEffect, useState} from "react";
import {Courses} from "../../../mock/testExample";
import {getAllCourseList} from "../../../api/course";

const initData = [
    {
        id: 0,
        adminName: '',
        name: ''
    }
]
const CourseTable = ({openSubject, openRegister, selectCourse}) =>{

    const [courses, setCourses] = useState(initData);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(async () =>{
        setIsLoading(true);

        const result = await search();
        setCourses(result);

        setIsLoading(false);
    },[])

    const search = async () =>{
        const courses = await getAllCourseList();
        return courses;
    }

    const subjectSearchButtonClick = (courseId) => {
         selectCourse(courseId);
         openSubject();
    }

    const courseRegisterButtonClick = (courseId) => {
        selectCourse(courseId);
        openRegister();
    }

    const columns = [
        {
            id : 'name',
            label: '코스명',
            width: 250,
            align: 'left',
        },
        {
            id : 'adminName',
            label: '담당자',
            width: 60,
            align: 'left',
        },
        {
            id : 'subject',
            label: '과목 확인',
            width: 80,
            align: 'center',
            render: (row)=>{
                return <>
                    <Button variant="contained" onClick={()=>subjectSearchButtonClick(row.id)}>과목 확인</Button>
                </>
            }
        },
        {
            id : 'register',
            label: '코스 등록',
            width: 80,
            align: 'center',
            render: (row)=>{
                return <>
                    <Button variant="contained" onClick={()=>courseRegisterButtonClick(row.id)}>코스 등록</Button>
                </>
            }
        },
    ];

    return <>
            <DataTable columns={columns} rows={courses} rowsPerPageOptions={[10,20,30]} isLoading={isLoading}/>
    </>

}

export default CourseTable;
