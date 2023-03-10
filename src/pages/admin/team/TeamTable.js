import {useEffect, useState} from "react";
import {getAllTeamList} from "api/team";
import DataTable from "../../../components/@extended/DataTable";
import {Button} from "@mui/material";

const TeamTable = ({setSelectedTeamId,
                       setIsDeleteOpen,
                       reloadCount}) => {

    const [teams, setTeams] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(async ()=>{
        setIsLoading(true);

        const result = await getAllTeamList();
        setTeams(result);

        setIsLoading(false);
    },[reloadCount])

    const deleteButtonClick = (id) =>{
        setSelectedTeamId(id);
        setIsDeleteOpen(true);
    }


    const columns = [
        {
            id : 'id',
            label: 'id',
            width: 50,
            align: 'left',
        },
        {
            id : 'name',
            label: '팀 명',
            width: 240,
            align: 'left',
        },
        {
            id : 'delete',
            label: '삭제',
            width: 80,
            align: 'center',
            render: (row)=>{
                return <>
                    <Button variant="contained" onClick={()=>deleteButtonClick(row.id)} color={"error"}>삭제</Button>
                </>
            }
        },
    ];

    return <>
        <DataTable columns={columns} rows={teams} rowsPerPageOptions={[10,20,30]} isLoading={isLoading}/>
    </>
}

export default TeamTable;
