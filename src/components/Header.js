import React from 'react';
import { Link } from "react-router-dom";


export const HEADER = () => {

    return (
        <div Style="text-align:center;margin:20px">
            <nav>
                <Link to="/"><h2 >Home </h2>    </Link>
            </nav>
        </div>
    )
}

