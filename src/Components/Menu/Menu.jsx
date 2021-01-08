import Styles from './Menu.module.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import cx from 'classnames';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Menu(props) {
    const classes = useStyles();
    const functionUpdate = props.handleChange;
    return(
        
    <div className ={Styles.container} >
            <Button
                variant="contained"
                size="large"
                className={cx(Styles.card, classes.button)}
                onClick = { () => functionUpdate('Chart') }
            >
                Chart
            </Button>
    </div>
    );
}




