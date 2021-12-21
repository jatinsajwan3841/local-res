import React from 'react'
import Worker from '../reader/index.worker'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import Load from '../load'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import { makeStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow'
import HelpIcon from '@material-ui/icons/Help'
import { EXCELFILES, BRANCHES } from '../constant'
import Output from '../output'
import Favourite from '../favourite'
import useStickyState from '../localState'
import { useHistory, useLocation } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    beg: {
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(2),
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3),
    },
}))

const Home = ({ darkMode, setDarkMode, update }) => {
    const [res, setRes] = React.useState([])
    const [found, setFound] = React.useState(true)
    const [showOut, setShowOut] = React.useState(false)
    const [branch, setbranch] = React.useState('Choose')
    const [name, setname] = React.useState('')
    const [brer, setbrer] = React.useState(false)
    const [load, setload] = React.useState(false)
    const [saved, setSaved] = useStickyState([], 'favourite')
    const [savedLoad, setSavedLoad] = React.useState('No')

    const bufferFiles = React.useRef([])
    const promiseResolve = React.useRef(null)
    const bufferLoaded = React.useRef(
        new Promise((resolve) => (promiseResolve.current = resolve)),
    )
    const details = React.useRef(['', 'Choose'])

    let history = useHistory()
    let location = useLocation()
    const classes = useStyles()

    const theme = createTheme({
        palette: {
            type: darkMode ? 'dark' : 'light',
        },
    })

    const submit = async (e) => {
        try {
            e.preventDefault()
            setSavedLoad('No')
        } catch {
            var updateLoc = e
            setSavedLoad(updateLoc)
        } finally {
            if (details.current[1] === 'Choose') return
            setload(true)
            setRes([])
            setFound(true)
            let sName = details.current[0].toLowerCase()
            let nfCount = 0
            let resCount = 0
            await bufferLoaded.current
            const worker = new Worker()
            bufferFiles.current.map(async (v, i) => {
                worker.postMessage({
                    name: sName,
                    branch: details.current[1],
                    file: v,
                    command: 'run',
                    sem: i + 1,
                })
            })

            worker.onmessage = async (e) => {
                if (e.data === 'nf') {
                    nfCount++
                    resCount++
                    if (nfCount === 3) {
                        setload(false)
                        await setFound(false)
                        worker.terminate()
                        setTimeout(() => {
                            setFound(true)
                        }, 4000)
                    }
                } else {
                    await setRes((prevState) => [...prevState, e.data[0]])
                    await setShowOut(true)
                    resCount++
                    if (resCount === EXCELFILES.length) {
                        let tmp_total = {
                            sem: 'Total :',
                            marks: `${e.data[1][0]} / ${e.data[1][1]}`,
                            percentage: (
                                (e.data[1][0] / e.data[1][1]) *
                                100
                            ).toFixed(4),
                        }
                        setload(false)
                        setRes((prevState) => {
                            try {
                                let temp = [...saved]
                                temp[updateLoc].data = [...prevState, tmp_total]
                                setSaved(temp)
                            } catch {}

                            return [...prevState, tmp_total]
                        })
                        worker.terminate()
                    }
                }
            }
        }
    }

    const handleBranch = (event) => {
        setbranch(event.target.value)
        details.current[1] = event.target.value
        if (event.target.value === 'Choose') setbrer(true)
        else setbrer(false)
    }

    const handleNaam = (event) => {
        setname(event.target.value)
        details.current[0] = event.target.value
    }

    const reset = () => {
        setname('')
        setbranch('Choose')
        setShowOut(false)
        details.current = ['', 'Choose']
    }

    const handleFav = () => {
        let temp = {
            name: details.current[0],
            branch: details.current[1],
            data: res,
        }
        setSaved((prev) => [...prev, temp])
        setSavedLoad(saved.length)
    }

    const favDel = (i) => {
        let temp = [...saved]
        temp.splice(i, 1)
        setSaved(temp)
        setSavedLoad('No')
    }

    const favShow = async (i) => {
        if (saved[i].data === 'update') {
            details.current = [saved[i].name, saved[i].branch]
            submit(i)
        } else {
            setSavedLoad(i)
            setRes(saved[i].data)
            details.current = [saved[i].name, saved[i].branch]
            setname(saved[i].name)
            setShowOut(true)
        }
    }

    React.useEffect(() => {
        if (showOut && history.location.hash === '') {
            history.push({ hash: 'res' })
        }
    }, [showOut])

    React.useEffect(() => {
        if (location.pathname === '/local-res/' && location.hash !== '#res') {
            reset()
        }
    }, [location])

    React.useEffect(() => {
        if (update === 'update' && saved.length !== 0) {
            let temp = []
            saved.map((v) => {
                let t1 = {
                    ...v,
                    data: 'update',
                }
                temp.push(t1)
            })
            setSaved(temp)
        }
    }, [update])

    React.useEffect(() => {
        const makeBuffer = async (resolveP) => {
            const responses = await Promise.all(
                EXCELFILES.map(async (v) => {
                    let response = await fetch(v)
                    return response
                }),
            )
            bufferFiles.current = await Promise.all(
                responses.map(async (response) => {
                    let buffer = response.arrayBuffer()
                    return buffer
                }),
            )
            resolveP()
        }
        makeBuffer(promiseResolve.current)
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <FormControlLabel
                control={
                    <Switch
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                    />
                }
                label="Dark Mode"
                color="primary"
                style={{ position: 'absolute', right: 0 }}
            />
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={update !== ''}
            >
                <SnackbarContent
                    message={`${
                        update === 'fInstall'
                            ? 'Now available for offline usage, can install/add to home screen from browser drawer.'
                            : 'Update available, refresh page for updated content, can install/add to home screen from browser drawer.'
                    }`}
                />
            </Snackbar>

            {load && <Load />}
            {!showOut ? (
                <>
                    <Container maxWidth="sm">
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            open={!found}
                        >
                            <SnackbarContent message="The entered data didn't matched, please try again !" />
                        </Snackbar>
                        <h2 className={classes.beg}> Hello {name}</h2>
                        <p>
                            This is a Web worker - Reactjs based PWA where
                            anyone from the batch 2018-22 can have a quick
                            reference of their academic performance.
                            <br />
                            It will work offline too and is installable.
                        </p>
                        <form className={classes.form} onSubmit={submit}>
                            <TextField
                                name="branch"
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
                                {BRANCHES.map((option) => (
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
                                    name="name"
                                    inputProps={
                                        branch === 'CE'
                                            ? { min: '180500' }
                                            : { minLength: '2' }
                                    }
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
                                    disabled={load}
                                    startIcon={<DoubleArrowIcon />}
                                >
                                    {load ? 'loading...' : 'Submit'}
                                </Button>
                            </center>
                        </form>
                        <Favourite
                            saved={saved}
                            favShow={favShow}
                            favDel={favDel}
                        />
                    </Container>
                </>
            ) : (
                <Output
                    name={details.current[0]}
                    data={res}
                    load={load}
                    reset={reset}
                    darkMode={darkMode}
                    savedLoad={savedLoad}
                    handleFav={handleFav}
                    favDel={favDel}
                    back={history.goBack}
                />
            )}
            <a
                href="https://forms.gle/ZRHk4sxci4nagY8w7"
                className="anomaly"
                target="_blank"
            >
                <HelpIcon />
            </a>
        </ThemeProvider>
    )
}
export default Home
