import TeamTable from "./TeamTable";
import {useState} from "react";
import DeleteModal from "./DeleteModal";
import {Button, Grid} from "@mui/material";

const TeamManagement = () =>{
    const [selectedTeamId, setSelectedTeamId] = useState(0);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [reloadCount, setReloadCount] = useState(0);
    const [isAddOpen, setIsAddOpen] = useState(false);

    const AddButtonOnClick = ()=> {
        setIsAddOpen(true);
    }

    return <>
        <Grid container justifyContent={"flex-end"}>
            <Button variant="contained" onClick={AddButtonOnClick}> 추가 </Button>
        </Grid>
        <TeamTable setSelectedTeamId={setSelectedTeamId} setIsDeleteOpen={setIsDeleteOpen} reloadCount={reloadCount}/>
        <DeleteModal isDeleteOpen={isDeleteOpen} setIsDeleteOpen={setIsDeleteOpen} reloadCount={reloadCount} selectedTeamId={selectedTeamId} setReloadCount={setReloadCount}/>

    </>
}

export default TeamManagement;