import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const LogsPage = () => {
    const [modalopen, setModalOpen] = useState()
    function createData(sno, time, status, detail, action) {
        return { sno, time, status, detail, action };
    }

    const handlerModalOpen = () => {
        setModalOpen(true)
    }

    const handleClose = () => {
        setModalOpen(false)
    }

    const rows = [
        createData('1', '21/07/23 - 09:23 am', 'active', 'blocked', <Button onClick={handlerModalOpen} size='sm' sx={{ fontSize: '12px' }} variant="outlined">view detail</Button>),
        createData('2', '21/07/23 - 09:23 am', 'in progress', 'changes', <Button onClick={handlerModalOpen} size='sm' sx={{ fontSize: '12px' }} variant="outlined">view detail</Button>),
        createData('3', '21/07/23 - 09:23 am', 'successful', 'blocked', <Button onClick={handlerModalOpen} size='sm' sx={{ fontSize: '12px' }} variant="outlined">view detail</Button>),
        createData('4', '21/07/23 - 09:23 am', 'active', 'changes', <Button onClick={handlerModalOpen} size='sm' sx={{ fontSize: '12px' }} variant="outlined">view detail</Button>),
        createData('5', '21/07/23 - 09:23 am', 'rejected', 'blocked', <Button onClick={handlerModalOpen} size='sm' sx={{ fontSize: '12px' }} variant="outlined">view detail</Button>),
    ];
    return (



        <TableContainer component={Paper} sx={{ margin: '10px' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>S.no</TableCell>
                        <TableCell align="center">Date / Time</TableCell>
                        <TableCell align="center">Status</TableCell>
                        <TableCell align="center">Detail</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.sno}
                            </TableCell>
                            <TableCell align="center">{row.time}</TableCell>
                            <TableCell align="center">{row.status}</TableCell>
                            <TableCell align="center">{row.detail}</TableCell>
                            <TableCell align="center">{row.action}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Dialog
                open={modalopen}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose}>Agree</Button>
                </DialogActions>
            </Dialog>
        </TableContainer>
    )
}

export default LogsPage