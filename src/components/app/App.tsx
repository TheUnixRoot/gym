import React, { useState, useEffect } from 'react';
import { Box, AppBar, Typography, Toolbar } from '@mui/material';
import './App.css';
import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb'
import NestedList from '../list/List';
import Table from '../table/Table';
import { Mapper } from '../mapper/Mapper';


export function App() {
  const [currentRutina, setCurrentRutina] = useState({
    nombre: "Nothing yet",
    content: {ejercicios: [], repeticiones: {min: "0", max: "0"}, series: "0"},
    index: -1
  });

  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    try {
      const client = new DynamoDBClient({
          region: 'eu-west-1',
          credentials: {
          }
      });
      const command = new ScanCommand({TableName: "rutina"});
      if ( currentItems.length === 0 ) {
        client.send(command).then((response) => {
          const outItems = response.Items.map((object) => Mapper(object));
          setCurrentItems(outItems);
        }).catch(() => {
          console.error("Unable to fetch data");
        })
      };
    } catch {
        console.error("Unable to fetch data")
    }}, []);

  const onRutinaClick = (rutina: { nombre: string, content: {ejercicios: string[], repeticiones: {min: string, max: string}, series: string}, index: number }) => {
    setCurrentRutina(
      {
        nombre: rutina.nombre,
        content: rutina.content,
        index: rutina.index,
    });
  };
  

  return (
      <div className="App" style={{minWidth: '400px'}}>
        <header className="App-header">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                Rutinas completas en tu móvil
              </Typography>
            </Toolbar>
          </AppBar>
        </header>
        <Box component="span" sx={{ display: 'flex' }}>
          <NestedList items={currentItems} onRutinaClick={onRutinaClick} selectedItem={currentRutina.index} />
          <Box component="span" sx={{padding: '15pt 10pt', width: '90%'}}>
            <Table nombre={currentRutina.nombre} content={currentRutina.content} />
          </Box>
        </Box>
      </div>
    );
};