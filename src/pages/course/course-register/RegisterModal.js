import {Box, Button, Grid, Modal} from "@mui/material";
import SubjectTable from "./SubjectTable";
import {createAttendance} from "../../../api/course";
import {getLoginInfo} from "../../../utils/authHandler";
import {enqueueSnackbar} from "notistack";

const RegisterModal = ({isRegisterOpen = false,
                       closeModal,
                       courseId}) =>{

    const onRegisterClick = async () => {
        await registerCourse(courseId);
        closeModal();
    }

    const registerCourse = async (courseId) => {
        const attendance = {
            courseId: courseId,
            memberId: getLoginInfo().id
        }
        try{
            await createAttendance(attendance);
            enqueueSnackbar("수강신청에 성공하였습니다.",{variant: 'success'});
        }catch{
            enqueueSnackbar("수강신청에 실패하였습니다.",{variant: 'error'});

        }
    }

    return <>
        <Modal
            open={isRegisterOpen}
            onClose={closeModal}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style, width: 400 }}>
                <h2 id="parent-modal-title">신청하시겠습니까?</h2>
                <Grid container justifyContent="center" spacing={4}>
                    <Grid item>
                        <Button variant="contained" onClick={onRegisterClick} > 신청 </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={closeModal} color={"error"}> 닫기 </Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    </>
}

export default RegisterModal


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};