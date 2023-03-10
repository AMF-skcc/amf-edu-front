import {Box, Button, Grid, Modal} from "@mui/material";
import SubjectTable from "./SubjectTable";

const SubjectModal = ({isSubjectOpen = false,
                      closeModal,
                      courseId}) =>{

    return <>

        <Modal
            open={isSubjectOpen}
            onClose={closeModal}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style, width: 800 }}>
                <SubjectTable courseId={courseId}/>
                <Grid container justifyContent="flex-end">
                    <Button onClick={closeModal} color={"error"}> 닫기 </Button>
                </Grid>
            </Box>
        </Modal>
    </>

}

export default SubjectModal;


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