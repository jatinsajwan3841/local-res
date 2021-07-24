import React from 'react'
import Worker from '../reader/index.worker'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import Load from '../load'
import { makeStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow'
import { excelfiles, branches } from '../constant'
import Output from '../output'

const useStyles = makeStyles((theme) => ({
    beg: {
        marginTop: theme.spacing(10),
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3),
    },
}))

const Home = () => {
    const [res, setRes] = React.useState([])
    const bufferFiles = React.useRef([])
    const [showOut, setShowOut] = React.useState(false)

    const [branch, setbranch] = React.useState('Choose')
    const [name, setname] = React.useState('')
    const [brer, setbrer] = React.useState(false)
    const [load, setload] = React.useState(false)
    const classes = useStyles()

    const submit = async (e) => {
        e.preventDefault()
        setload(true)
        await setRes([])
        let sName = name.toLowerCase()
        let nfCount = 0
        let resCount = 0
        let total = []
        const worker = new Worker()
        bufferFiles.current.map(async (v, i) => {
            worker.postMessage({
                name: sName,
                branch: branch,
                file: v,
                command: 'run',
                sem: i + 1,
            })
        })

        worker.onmessage = async (e) => {
            //console.log(e.data)
            setload(false)
            if (e.data === 'nf') {
                nfCount++
                if (nfCount === 3) {
                    await setRes('nf')
                    worker.terminate()
                }
            } else {
                await setRes((prevState) => [...prevState, e.data])
                await setShowOut(true)
                resCount++
                total = [e.data.marks]
                if (resCount === excelfiles.length) {
                    worker.terminate()
                }
            }
        }
    }

    const handleBranch = (event) => {
        setbranch(event.target.value)
        if (event.target.value === 'Choose') setbrer(true)
        else setbrer(false)
    }

    const handleNaam = (event) => {
        setname(event.target.value)
    }

    React.useEffect(() => {
        excelfiles.map(async (v, i) => {
            let response = await fetch(v)
            let buffer = await response.arrayBuffer()
            bufferFiles.current = [...bufferFiles.current, buffer]
        })
    }, [])

    return (
        <>
            {!showOut ? (
                <>
                    {load && <Load />}
                    <Container maxWidth="sm">
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            open={res === 'nf' ? true : false}
                        >
                            <SnackbarContent
                                style={{ backgroundColor: 'rgba(255,0,0,0.7)' }}
                                message="The entered data didn't matched, please try again !"
                            />
                        </Snackbar>
                        <h2 className={classes.beg}> Hello {name}</h2>
                        <p>
                            This is a Django - Reactjs based project where
                            anyone from the batch 2018-22 can have a quick
                            reference of their performance in different
                            semesters by a table indicating minimal necessary
                            things and a graph.
                        </p>
                        <form className={classes.form} onSubmit={submit}>
                            <TextField
                                name="branch"
                                id="branch"
                                error={brer}
                                select
                                label="branch"
                                fullWidth
                                helperText={
                                    brer
                                        ? 'please choose correct branch'
                                        : 'please choose your branch'
                                }
                                value={branch}
                                onChange={handleBranch}
                            >
                                {branches.map((option) => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                            {branch !== 'Choose' && (
                                <TextField
                                    style={{ marginTop: '10px' }}
                                    type={branch === 'CE' ? 'number' : 'text'}
                                    required
                                    fullWidth
                                    id="name"
                                    name="name"
                                    label={
                                        branch === 'CE' ? 'College-ID' : 'Name'
                                    }
                                    helperText={
                                        branch === 'CE'
                                            ? 'Please enter your College-ID'
                                            : 'Please enter your full name'
                                    }
                                    onInput={handleNaam}
                                />
                            )}

                            <center>
                                <Button
                                    className={classes.submit}
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    id="smb"
                                    disabled={load}
                                    startIcon={<DoubleArrowIcon />}
                                >
                                    {load ? 'loading...' : 'Submit'}
                                </Button>
                            </center>
                        </form>
                    </Container>
                </>
            ) : (
                <Output name={name} data={res} setShowOut={setShowOut} />
            )}
        </>
    )
}
export default Home
