import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Paper from './Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundImage: 'url(/static/onepirate/appCurvyLines.png)',
        backgroundRepeat: 'no-repeat'
    },
    paper: {
        padding: theme.spacing(4, 3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(8, 6)
        }
    }
}));

function AppForm(props) {
    const classes = useStyles();
    const { children } = props;

    return (
        <div className={classes.root}>
            <Container maxWidth="sm">
                <Box mt={7} mb={12}>
                    <Paper className={classes.paper}>{children}</Paper>
                </Box>
            </Container>
        </div>
    );
}

AppForm.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired
};

export default AppForm;
