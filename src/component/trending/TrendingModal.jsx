import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { tableheading, tableData } from './data'

const TrendingModal = ({ open, setOpen }) => {
    const handleModalClose = () => {
        setOpen(false)
    }
    return (
        <div>
            <Dialog open={open} onClose={handleModalClose} sx={{
                '& .MuiDialogContent-root': {
                    width: '500px'
                }
            }}>
                <DialogContent>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                placeholder='Search...'
                                type="text"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TableContainer component={Paper} sx={{ marginBlock: '10px' }}>
                                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                                    <TableHead>
                                        <TableRow>
                                            {tableheading.map((heading, index) => (
                                                <TableCell key={index + 1} sx={{ textTransform: 'capitalize', textAlign: 'center' }}>{heading}</TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {tableData.map((data) => (
                                            <TableRow>
                                                <TableCell align="center">{data?.sno} </TableCell>
                                                <TableCell align="center">{data?.name} </TableCell>
                                                <TableCell align="center">{(data?.data.length >= 20) ? data?.data.slice(0, 20) + '.....' : data?.data} </TableCell>
                                                <TableCell align="center"> <Button variant='contained' sx={{
                                                    backgroundColor: '#f89dac',
                                                    fontSize: '12px',
                                                    border: '1px solid #ffffff',
                                                    '&:hover': {
                                                        backgroundColor: 'transparent',
                                                        color: '#f89dac',
                                                        border: '1px solid #f89dac',
                                                    },
                                                }} size="small">set</Button> </TableCell>
                                            </TableRow>
                                        ))}

                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default TrendingModal