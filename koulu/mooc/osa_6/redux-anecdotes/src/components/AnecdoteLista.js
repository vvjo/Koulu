import React from 'react'

const AnecdoteList = ({ store }) => {

    const anecdotes = store.getState()

    const voteAnecdote = (id) => {
        return {
            type: 'VOTE',
            id: id
        }
    }

    const vote = (id) => {
        console.log('vote', id)
        store.dispatch(voteAnecdote(id))
    }

    return (
        anecdotes.map(anecdote =>
            <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                </div>
            </div>
        )
    )
}
export default AnecdoteList