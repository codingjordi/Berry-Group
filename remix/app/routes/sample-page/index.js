// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
    <MainCard title="Sample Card">
        <Typography variant="body2">
            Trabajo en grupo con el template Berry <br></br>
            Olga, Michelle, Laia y Jordi
        </Typography>
    </MainCard>
);

export default SamplePage;
