import React from 'react'
import reader from '../reader'

const Home = () => {
    const [res, setRes] = React.useState([])

    const submit = async (e) => {
        e.preventDefault()
        let name = e.target.name.value.toLowerCase()
        let branch = e.target.branch.value

        let out = await reader(name, branch)
        setRes(out)
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" placeholder="name" name="name" />
                <input type="text" placeholder="branch" name="branch" />
                <input type="submit" />
            </form>
            {res.map((v, i) => (
                <p key={i}>{v}</p>
            ))}
        </div>
    )
}
export default Home
