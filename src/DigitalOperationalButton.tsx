import styled from "@emotion/styled";
import {Button, Grid } from "@mui/material";

interface DigitalOperationalButtonProps {
    operational: string;
    selectOperation: (operational: string) => void;
    selectedOperation: string;
}

const StyledButton = styled(Button)<{selected: boolean} > ((props) => ({
    backgroundColor: "rgb(254, 241, 73,.1)", 
    borderColor: props.selected ? "rgb(254, 241, 73)" : "rgb(254, 241, 73,.1)",
}))

export const DigitalOperationalButton: React.FC<DigitalOperationalButtonProps> = ({
    operational, 
    selectedOperation, 
    selectOperation
}) => {
    return (
        <Grid item xs={3}>
            <StyledButton fullWidth variant="outlined" onClick={() => selectOperation(operational)}
            selected={selectedOperation === operational} 
            >
         {operational}
        
        </StyledButton>
        </Grid>
    )
}