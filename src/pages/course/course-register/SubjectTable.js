import {useEffect, useState} from "react";
import {Courses, Subjects} from "../../../mock/testExample";
import {Button} from "@mui/material";
import DataTable from "../../../components/@extended/DataTable";
import {getAllCourseList, getCourseSubjectList} from "../../../api/course";

const initData = [
    {
        id: 0,
        courseId: 0,
        instructorId: 0,
        instructorName:'',
        name: '',
        building: '',
        floor: '',
        roomNo: ''
    }
]
const SubjectTable = ({courseId}) => {

    const [subjects, setSubjects] = useState(initData);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(async () =>{
        setIsLoading(true);

        const result = await search(courseId);
        setSubjects(result);

        setIsLoading(false);
    },[courseId])


    const search = async (courseId) =>{
        const subject = await getCourseSubjectList(courseId);

        return subject;
    }


    const columns = [
        {
            id : 'name',
            label: '과목명',
            width: 290,
            align: 'left',
        },
        {
            id : 'building',
            label: '빌딩명',
            width: 140,
            align: 'left',
        },
        {
            id : 'floor',
            label: '층수',
            width: 60,
            align: 'left',
        },
        {
            id : 'roomNo',
            label: '호수',
            width: 60,
            align: 'left',
        },
        {
            id : 'instructorName',
            label: '강사',
            width: 60,
            align: 'left',
        },
    ];

    return <>
        <DataTable columns={columns} rows={subjects} rowsPerPageOptions={[10,20,30]} isLoading={isLoading}/>
    </>
}

export default SubjectTable