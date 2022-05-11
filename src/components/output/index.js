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
    year,
    meritList,
    yearTotal,
}) => {
    let n = ++year
    n += [, 'st', 'nd', 'rd'][(n % 100 >> 3) ^ 1 && n % 10] || 'th'
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
            {!meritList &&
                (savedLoad === 'No' ? (
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
                ))}
            {meritList ? (
                <h2 style={{ marginTop: 6 }}>
                    {' '}
                    Hello, {n} year Merit List is shown below
                </h2>
            ) : (
                <h2 style={{ marginTop: 6 }}> Hello {name}</h2>
            )}
            <TableContainer component={Container}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">
                                {meritList ? <b>Pos.</b> : <b>Sem</b>}
                            </TableCell>
                            <TableCell align="center">
                                {meritList ? <b>Name</b> : <b>Marks</b>}
                            </TableCell>
                            <TableCell align="center">
                                {meritList ? (
                                    <b>Marks(/{yearTotal})</b>
                                ) : (
                                    <b>Percentage</b>
                                )}
                            </TableCell>
                            {meritList && (
                                <TableCell align="center">
                                    <b>Percentage</b>
                                </TableCell>
                            )}
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
                                    {meritList ? index + 1 : row.sem}
                                </TableCell>
                                <TableCell align="center">
                                    {meritList ? row[0] : row.marks}
                                </TableCell>
                                <TableCell align="center">
                                    {meritList ? row[1] : `${row.percentage}%`}
                                </TableCell>
                                {meritList && (
                                    <TableCell align="center">
                                        {((row[1] / yearTotal) * 100).toFixed(
                                            4,
                                        )}
                                        %
                                    </TableCell>
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {!meritList && <LineChart data={data} darkMode={darkMode} />}
        </Container>
    )
}

export default Output
