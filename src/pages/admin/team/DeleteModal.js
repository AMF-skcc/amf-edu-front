import {Box, Button, Grid, Modal} from "@mui/material";
import {enqueueSnackbar} from "notistack";
import {deleteTeam} from "api/team";

const DeleteModal = ({isDeleteOpen= false,
                         setIsDeleteOpen,
                         selectedTeamId,
                         reloadCount,
                         setReloadCount}) =>{

    const onDeleteClick = async () => {
        await DeleteTeam(selectedTeamId);
        setIsDeleteOpen(false);
    }

    const DeleteTeam = async (selectedTeamId) => {

        try{
            await deleteTeam(selectedTeamId);
            enqueueSnackbar("팀 삭제에 성공하였습니다.",{variant: 'success'});
            setReloadCount(reloadCount+1);
        }catch(e){
            enqueueSnackbar("팀 삭제에 실패하였습니다.",{variant: 'error'});

        }
    }

    return <>
        <Modal
            open={isDeleteOpen}
            onClose={()=>setIsDeleteOpen(false)}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style, width: 400 }}>
                <h2 id="parent-modal-title">취소하시겠습니까?</h2>
                <Grid container justifyContent="center" spacing={4}>
                    <Grid item>
                        <Button variant="contained" onClick={onDeleteClick} > 삭제 </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={()=>setIsDeleteOpen(false)} color={"error"}> 닫기 </Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    </>
}

export default DeleteModal


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