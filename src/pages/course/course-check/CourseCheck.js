import MainCard from "../../../components/MainCard";
import SubjectModal from "pages/course/course-register/SubjectModal";
import {useCallback, useState} from "react";
import CourseCheckTable from "./CourseCheckTable";
import CancelModal from "pages/course/course-check/CancelModal";

const CourseCheck = () =>{

    const [isSubjectOpen, setIsSubjectOpen] = useState(false);
    const [isCancelOpen, setIsCancelOpen] = useState(false);
    const [selectedCourseId, setSelectedCourseId] = useState(0);
    const [selectedAttendanceId, setSelectedAttendanceId] = useState(0);
    const [reloadCount, setReloadCount] = useState(0);

    const openSubject = useCallback(()=>{
        setIsSubjectOpen(true);
    },[]);

    const closeSubject = useCallback(()=>{
        setIsSubjectOpen(false);
    },[]);


    const openCancel = useCallback(()=>{
        setIsCancelOpen(true);
    },[])

    const closeCancel = useCallback(()=>{
        setIsCancelOpen(false);
    },[])

    const selectCourse = useCallback((courseId)=>{
        setSelectedCourseId(courseId);
    },[])

    const selectAttendance = useCallback((id)=>{
        setSelectedAttendanceId(id);
    },[])

    return <>
        <MainCard title="수강신청 확인">
            <CourseCheckTable openSubject={openSubject} selectAttendance={selectAttendance} selectCourse={selectCourse} openCancel={openCancel} reloadCount={reloadCount}/>
            <SubjectModal isSubjectOpen={isSubjectOpen} closeModal={closeSubject} courseId={selectedCourseId}/>
            <CancelModal isCancelOpen={isCancelOpen} closeModal={closeCancel} attendanceId={selectedAttendanceId} reloadCount= {reloadCount} setReloadCount={setReloadCount}/>
        </MainCard>
    </>
}

export default CourseCheck;