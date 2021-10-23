import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import BackspaceIcon from '@material-ui/icons/Backspace'
import LineChart from '../chart'

const Output = ({
    name,
    data,
    load,
    reset,
    darkMode,
    savedLoad,
    handleFav,
    favDel,
    back,
}) => {
    return (
        <Container maxWidth="md">
            <Button
                variant="contained"
                color="primary"
                style={{ marginTop: 6 }}
                startIcon={<HomeIcon />}
                onClick={() => {
                    back()
                    reset()
                }}
                size="small"
            >
                Home
            </Button>
            {savedLoad === 'No' ? (
                <Button
                    variant="contained"
                    color="secondary"
                    style={{ marginTop: 6, marginLeft: 6 }}
                    startIcon={<BookmarkBorderIcon />}
                    onClick={handleFav}
                    disabled={load}
                    size="small"
                >
                    Save
                </Button>
            ) : (
                <Button
                    variant="contained"
                    color="secondary"
                    style={{ marginTop: 6, marginLeft: 6 }}
                    startIcon={<BackspaceIcon />}
                    onClick={() => favDel(savedLoad)}
                    disabled={load}
                    size="small"
                >
                    Del
                </Button>
            )}
            <h2 style={{ marginTop: 6 }}> Hello {name}</h2>
            <TableContainer component={Container}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">
                                <b>Sem</b>
                            </TableCell>
                            <TableCell align="center">
                                <b>Marks</b>
                            </TableCell>
                            <TableCell align="center">
                                <b>Percentage</b>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    align="center"
                                >
                                    {row.sem}
                                </TableCell>
                                <TableCell align="center">
                                    {row.marks}
                                </TableCell>
                                <TableCell align="center">
                                    {row.percentage}%
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <LineChart data={data} darkMode={darkMode} />
        </Container>
    )
}

export default Output
