import React from "react"
import { useContext } from "react";
import Search from "../components/Search"
import Card from "../components/Card"
import { GithubContext } from "../context/github/GithubContext";


export default props => {
const {users, loading} = useContext(GithubContext)

    if(loading){
        return <h3 className={"text-center"}>Загрузка...</h3>
    }

    return (
        <>
            <Search/>
            <div className="row">
                {users.map(user => {
                    return (
                        <div key={user.id} className={"col-sm-4 mb-4"}>
                            <Card user={user}/>
                        </div>
                    )
                })}
            </div>
        </>
    )

}