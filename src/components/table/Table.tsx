import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


export default function Table(props: {nombre: string, content: {ejercicios: string[], repeticiones: {min: string, max: string}, series: string}}) {
    let rowCount = 0
    const rows = props.content.ejercicios.map(
        (ejercicio) => {
            return ({ id: rowCount++, ejercicios: ejercicio, repeticiones: "" + props.content.repeticiones.min + "-" + props.content.repeticiones.max , series: props.content.series });
        }
    );

    
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 15 },        
        { field: 'ejercicios', headerName: 'Ejercicios', width: 300 },
        { field: 'repeticiones', headerName: 'Repeticiones', width: 150 },
        { field: 'series', headerName: 'Series', width: 100 },
    ];

    return (
        <DataGrid
          sx={{width: 'auto', height: 700}}
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
    );
  }