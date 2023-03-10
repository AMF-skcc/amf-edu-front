import MainCard from "../../../components/MainCard";
import CourseTable from "./CourseTable";
import {useCallback, useState} from "react";
import SubjectModal from "./SubjectModal";
import RegisterModal from "./RegisterModal";

const CourseRegister = () => {

    const [isSubjectOpen, setIsSubjectOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [selectedCourseId, setSelectedCourseId] = useState(0);

    const openSubject = useCallback(()=>{
        setIsSubjectOpen(true);
    },[]);

    const closeSubject = useCallback(()=>{
        setIsSubjectOpen(false);
    },[]);

    const openRegister = useCallback(()=>{
        setIsRegisterOpen(true);
    },[])

    const closeRegister = useCallback(()=>{
        setIsRegisterOpen(false);
    },[])

    const selectCourse = useCallback((courseId)=>{
        setSelectedCourseId(courseId);
    },[])

    return <>
        <MainCard title="수강신청">
            <CourseTable openSubject={openSubject} openRegister={openRegister} selectCourse={selectCourse}/>
            <SubjectModal isSubjectOpen={isSubjectOpen} closeModal={closeSubject} courseId={selectedCourseId}/>
            <RegisterModal isRegisterOpen={isRegisterOpen} closeModal={closeRegister} courseId={selectedCourseId}/>
        </MainCard>
    </>
};

export default CourseRegister;
