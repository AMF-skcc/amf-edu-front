import {Button} from "@mui/material";
import DataTable from "components/@extended/DataTable";
import {useEffect, useState} from "react";
import {Courses} from "../../../mock/testExample";
import {getAttendanceById} from "../../../api/course";
import {getLoginInfo} from "../../../utils/authHandler";

const initData = [
    {
        id: 0,
        adminId: 0,
        courseName: '',
        courseId: 0
    }
]
const CourseCheckTable = ({openSubject, openCancel, selectAttendance, selectCourse, reloadCount}) =>{

    const [courses, setCourses] = useState(initData);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(async () =>{
        setIsLoading(true);

        const result = await search();
        setCourses(result);

        setIsLoading(false);
    },[reloadCount])

    const search = async () =>{
        const attendance = await getAttendanceById(getLoginInfo().id);
        console.log("attendance:", attendance);

        return attendance;
    }

    const subjectSearchButtonClick = (courseId) => {
        selectCourse(courseId);
        openSubject();
    }

    const courseCancelButtonClick = (id) => {
        selectAttendance(id);
        openCancel();
    }

    const columns = [
        {
            id : 'courseName',
            label: '코스명',
            width: 250,
            align: 'left',
        },
        // {
        //     id : 'adminId',
        //     label: '담당자',
        //     width: 60,
        //     align: 'left',
        // },
        {
            id : 'subject',
            label: '과목 확인',
            width: 80,
            align: 'center',
            render: (row)=>{
                return <>
                    <Button variant="contained" onClick={()=>subjectSearchButtonClick(row.courseId)}>과목 확인</Button>
                </>
            }
        },
        {
            id : 'cancel',
            label: '수강 취소',
            width: 80,
            align: 'center',
            render: (row)=>{
                return <>
                    <Button variant="contained" onClick={()=>courseCancelButtonClick(row.id)}>수강 취소</Button>
                </>
            }
        },
    ];

    return <>
        <DataTable columns={columns} rows={courses} rowsPerPageOptions={[10,20,30]} isLoading={isLoading}/>
    </>

}

export default CourseCheckTable;
