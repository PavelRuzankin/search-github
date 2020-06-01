import React, { useContext, useEffect } from "react"
import { GithubContext } from "../context/github/GithubContext"
import { Link } from "react-router-dom";
import Repos from "../components/Repos"

export default ({match}) => {
 const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)
 const urlName = match.params.name

 useEffect(() => {
    getUser(urlName) 
    getRepos(urlName)
 }, [])

    if(loading){
        return <h3 className="text-center">Загрузка...</h3>
    }
    

    const {name, company, avatar_url, location, blog, login, followers, following, public_repos,} = user

    return (
       <>
        <Link to="/" className={"btn btn-link"}>Вернуться</Link>
        <div className={"card bm-4"}>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-3 text-center">
                        <img src={avatar_url} style={{width: "150px"}} alt="name"/>
                        <h1>{name}</h1>
                        {location && <h3>Местоположение: {location}</h3>}
                    </div>
                    <div className="col">
                        <ul>
                            {login && <li><strong>UresName:</strong> {login}</li>}
                            {company && <li><strong>Компания:</strong> {company}</li>}
                            {blog && <li><strong>Блог:</strong> {blog}</li>}
                        </ul>
                        <div className="badge badge-primary">Подписчики: {followers}</div>
                        <div className="badge badge-success">Подписки: {following}</div>
                        <div className="badge badge-info">Репозитории: {public_repos}</div>

                    </div>
                </div>
            </div>
        </div>
        <Repos repos={repos}/>
       </>
    )
}