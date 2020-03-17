import React from 'react'

const AnecdoteForm = ({store}) => {

    const createAnecdote = (content) => {
        return {
            type: 'NEWANECDOTE',
            content: content
        }
    }

    const createAnecdot = (event) => {
        event.preventDefault()
        const content = event.target.anec.value
        store.dispatch(createAnecdote(content))
        event.target.anec.value = ''
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={createAnecdot}>
                <div><input name='anec' /></div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}
export default AnecdoteForm