import { useState, useEffect } from 'react'
import RepositoryItem from './RepositoryItem'

import '../styles/repositories.scss'

// https://api.github.com/orgs/rocketseat/repos


interface Repository {
    name: string
    description: string
    html_url: string
}

export default function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    
    useEffect(() => {
        fetch('https://api.github.com/users/nailsonlima/repos')
        .then(res => res.json())
        .then(data => setRepositories(data))
    }, [])


    return (
        <section className='repositoryList'>
            <h1>Lista de Repositórios de Nailson Lima</h1>

            <ul>
                {repositories.map((repository, i) => (
                    <RepositoryItem key={i}
                    repository={repository}
                />
                ))}
            </ul>
        </section>
    )
}