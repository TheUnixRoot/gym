import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function Rutina(props: {items: any, nombre: string, index: number, selectedItem: number, icon: any, onClick: any}) {
    function localClick() {
        let localContent = props.items[props.index][props.nombre];
        props.onClick({nombre: props.nombre, content: localContent, index: props.index});
    }
    return (
    <ListItemButton 
    sx={{ pl: 4 }}
    onClick={() => localClick()}
    selected={props.selectedItem == props.index}
    >
        <ListItemIcon>
            {props.icon}
        </ListItemIcon>
        <ListItemText primary={props.nombre} />
    </ListItemButton>
    );
}
