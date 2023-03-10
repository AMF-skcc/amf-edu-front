import {Box, Button, Grid, Modal} from "@mui/material";
import {deleteAttendance} from "../../../api/course";
import {enqueueSnackbar} from "notistack";

const CancelModal = ({isCancelOpen = false,
                       closeModal,
                         attendanceId,
                         reloadCount,
                         setReloadCount}) =>{

    const onCancelClick = async () => {
        await CancelCourse(attendanceId);
        closeModal();
    }

    const CancelCourse = async (attendanceId) => {

        try{
            await deleteAttendance(attendanceId);
            enqueueSnackbar("수강신청 취소에 성공하였습니다.",{variant: 'success'});
            setReloadCount(reloadCount+1);
        }catch(e){
            enqueueSnackbar("수강신청 취소에 실패하였습니다.",{variant: 'error'});

        }
    }

    return <>
        <Modal
            open={isCancelOpen}
            onClose={closeModal}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style, width: 400 }}>
                <h2 id="parent-modal-title">취소하시겠습니까?</h2>
                <Grid container justifyContent="center" spacing={4}>
                    <Grid item>
                        <Button variant="contained" onClick={onCancelClick} > 취소 </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={closeModal} color={"error"}> 닫기 </Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    </>
}

export default CancelModal


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