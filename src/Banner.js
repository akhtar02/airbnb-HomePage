import React from 'react'
import './Banner.css'
import {Button} from '@material-ui/core'

function Banner() {
    return (
        <div className = "banner">
            <div className = "banner_search">
                <Button variant ="outline" className = "banner_searchButton"> Search Dates</Button>
            </div>
            <div className= "banner_info">
                <h1>Get out and Stretch your imagination</h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>

                <Button variant = "outlined"> Explore Nearby</Button>
            </div>
            
        </div>
    )
}

export default Banner
