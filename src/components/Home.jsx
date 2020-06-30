import React, { useState, useEffect, useRef } from 'react'
import Card from './Card'

export default function Home(props) {
    const [list, setList] = useState([])
    const [title, setTitle] = useState('t')
    const [description, setDescription] = useState('d')
    const formRef = useRef(null)

    function addCardToList(e){
        e.preventDefault()
        if(title.trim().length === 0 || description.trim().length === 0) return
        const l = []
        const data = {
            title: title,
            description: description,
        }
        l.push(data)
        formRef.current.reset()
        setList(lt => ([...lt, ...l]))
    }

    async function logout(){
        props.history.push("/")
    }

    async function getList() {
        const l = []
        const data = {
            title: "Title ",
            description: "some desc",
        }
        l.push(data)
        
        setList(l)
    }

    useEffect(() => {
        getList()
    }, [])

    return (
        <React.Fragment>
            <div className="container">
                <div>
                    <h2 className="float-right">
                        <button onClick={logout} className="btn btn-warning">Logout</button>
                    </h2>
                    <h2>Home</h2>
                </div>
                
                <form ref={formRef} onSubmit={addCardToList}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Name</label>
                        <input onChange={(e) =>{
                            setTitle(e.target.value)
                        }} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Coder Singh" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Description</label>
                        <textarea onChange={(e) =>{
                            setDescription(e.target.value)
                        }} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-success">Add</button>
                </form>
                {list.length.toString()}
                <div className="row mt-2">
                    {list.map((l, i) => {
                        return (
                            <div key={`${l.title}-${i}`} className="col-md-3 col-sm-12 mt-1">
                                <Card title={l.title} description={l.description} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}