//https://www.youtube.com/watch?v=LU5SPQqo5Vc
import {Link} from "react-router-dom"
import React from 'react'
import {
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    makeStyles, FormHelperText, FormLabel,
    Button, Menu
} from '@material-ui/core'
import {useState} from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles({
    margen :{
        marginTop: '50px'
    }

})


export default function DropDownNavbar() {

    const classes = useStyles()


    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const [value, setValue] = useState(0)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
      <Button 
        aria-controls="simple-menu" 
        aria-haspopup="true" 
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon/>}
    >
        Cursos
      </Button>
      <Menu
        className={classes.margen}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/curso1"><MenuItem onClick={handleClose}>Curso 1</MenuItem></Link>
        <Link><MenuItem onClick={handleClose}>Curso 2</MenuItem></Link>
        <Link><MenuItem onClick={handleClose}>Curso 3</MenuItem></Link>
        <Link><MenuItem onClick={handleClose}>Curso 4</MenuItem></Link>
        
      </Menu>
    </div>
    )
}
