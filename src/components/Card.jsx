import React from 'react'

export default function Card({ title, description, onDelete }) {

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <button  className="btn btn-danger">Delete</button>
            </div>
        </div>
    )
}