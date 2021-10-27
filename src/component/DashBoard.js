import React, { Component } from 'react'
import '../styles/DashBoard.css'
import ListOfArtists from './ListOfArtists'
import LeftNavigation from './LeftNavigation'
import BottomPlayBar from './BottomPlayBar'
import titles from '../assets/title.jpg'

class Dashboard extends Component {
    constructor(props) {
        super()
        this.state = {
            data: [],
            searchInputValue: ''
        }
    }
    componentDidMount = async () => {
        await fetch('https://api.discogs.com/database/search?q=LataMangeshkar&token=welHuQEEYUEysBYmdjgLTvPGHqasbaiHAhLlMftT').then((response) => response.json()).then((res) => {
            let item = res.results
            let count = 0;
            let arr = []
            item.map((i) => {
                if (i.title !== "Lata Mangeshkar") {
                    arr.push({
                        id: count + 1,
                        image: titles,
                        title: i.title,
                        author: 'Lata Mangeshkar',
                        time: "4.01"
                    })
                    count += 1;
                }
            })
            this.setState({ data: arr })
            console.log('title', this.state.data)
        })
    }
    searching = (data) => {
        this.setState({ searchInputValue: data })
    }
    render() {
        console.log('dashboard', this.state.searchInputValue)
        return <div className="dashBoard">
            <ListOfArtists searchValue={this.state.searchInputValue} song={this.state.data} />
            <LeftNavigation onSearch={this.searching} />
            <BottomPlayBar />
        </div>
    }

}

export default Dashboard