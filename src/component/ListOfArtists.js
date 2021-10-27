import "../styles/LeftNavigation.css"
import "../styles/ListOfArtists.css"
import React, { useEffect, useState } from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'
import img10 from '../assets/img10.jpg'
import ListOfSongs from "./ListOfSongs";

const ListOfArtists = (props) => {
    // console.log('props', props.searchValue)
    const [showSong, setShowSong] = useState(false)
    const listOfArtists = (artist) => {
        return (
            <>
                <div className="artists">
                    <div className="seeAll">
                        <text className="headertext">Inspired by your recent activity </text>
                        <text className="headertext see">SEE ALL</text>
                    </div>
                    <div className="listOfArtists">
                        {renderArtists(artist)}
                    </div>
                    <div className="listen">
                        <div className="recentListening">
                            <text className="recent">Based on your recent listening</text>
                            <text className="headertext">Inspired by your recent activity </text>
                        </div>
                        <text className="headertext see">SEE ALL</text>
                    </div>
                    <div className="listOfArtists">
                        {renderRecent()}
                    </div>
                </div>
            </>
        )
    }
    const renderArtists = (artist) => {
        console.log('render artist', artist)
        return (
            artist.map((item) => {
                console.log('render artist item', item)
                return (
                    <>
                        <div className="artist" onClick={() => { setShowSong(true) }}>
                            <img src={item.image} className="picture" />
                            <div className="atitle">
                                <text className="itemname">{item.name}</text>
                                <text className="headertext aname">Artist</text>
                            </div>
                        </div>
                    </>
                )
            })
        )
    }

    const renderRecent = () => {
        return (
            recent.map((recent) => {
                return (
                    <>
                        <div className="artist">
                            <img src={recent.image} className="recentList" />
                        </div>
                    </>
                )
            })
        )
    }
    console.log('props', props)

    const searchByArtistName = (val) => {
        let searchSTring = val.toLowerCase()
        let artistCheck = artist
        let filteredItem = artist.filter((art) => {
            return art.name.toLowerCase().includes(searchSTring)
        })
        console.log('filter', filteredItem, artistCheck)
        { val ? artist = filteredItem : artist = artistCheck }
        listOfArtists(filteredItem)
    }

    return (
        <>
            {searchByArtistName(props.searchValue)}
            <div className="mainContainer">
                <div className={!showSong ? "topNavSongs" : "topNav"}>
                    <div className="prevNext">
                        <div className="round" onClick={() => { setShowSong(false) }}>
                            <NavigateBeforeIcon style={{ color: 'white' }} />
                        </div>
                        <div className="">
                            <NavigateNextIcon style={{ color: 'white' }} />
                        </div>

                    </div>
                    <div className="userName">
                        <button className="btn">UPGRADE</button>
                        <div className="user">
                            <PersonOutlineIcon style={{ color: 'white', marginRight: 6, backgroundColor: 'grey', borderRadius: 15 }} />
                            <text style={{ color: 'whitesmoke', fontSize: 12 }}>shivangi</text>
                            <ArrowDropDownIcon style={{ color: 'white' }} />
                        </div>
                    </div>
                </div>
                {showSong ? <ListOfSongs song={props.song} /> : listOfArtists(artist)}
            </div>
        </>
    )
}

export default ListOfArtists

let artist = [
    {
        image: img1,
        name: 'Aerosmith'
    },
    {
        image: img2,
        name: 'Guns N Roses'
    },
    {
        image: img3,
        name: 'Bon Jovi'
    },
    {
        image: img4,
        name: 'U2'
    },
    {
        image: img5,
        name: 'Scorpions'
    },
]

const recent = [
    {
        image: img6
    },
    {
        image: img7
    },
    {
        image: img8
    },
    {
        image: img9
    },
    {
        image: img10
    },
    {
        image: img6
    },
    {
        image: img7
    },
    {
        image: img8
    },
    {
        image: img9
    },
    {
        image: img10
    }
]