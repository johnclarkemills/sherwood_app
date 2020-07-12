import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import MuiPaper from '@material-ui/core/Paper';
import { capitalize } from '@material-ui/core/utils';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backgroundLight: {
        backgroundColor: theme.palette.secondary.light
    },
    backgroundMain: {
        backgroundColor: theme.palette.secondary.main
    },
    backgroundDark: {
        backgroundColor: theme.palette.secondary.dark
    },
    padding: {
        padding: theme.spacing(1)
    }
}));

function Paper(props) {
    const classes = useStyles();
    const { background = 'light', className, padding = false, ...other } = props;
    return (
        <MuiPaper
            elevation={0}
            square
            className={clsx(
                classes[`background${capitalize(background)}`],
                {
                    [classes.padding]: padding
                },
                className
            )}
            {...other}
        />
    );
}

Paper.propTypes = {
    background: PropTypes.oneOf(['light', 'main', 'dark']),
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    padding: PropTypes.bool
};

export default Paper;
