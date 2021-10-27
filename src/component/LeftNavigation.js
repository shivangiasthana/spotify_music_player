import React, { useState } from 'react'
import "../styles/LeftNavigation.css"
import spotify from '../assets/spotify.png'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ListOfArtists from './ListOfArtists'

const LeftNavigation = (props) => {
    const [search, setSearch] = useState(false)
    const leftNav = () => {
        return (
            <>
                <div className="logo">
                    <img src={spotify} height={50} width={50} />
                    <text className="spotify">Spotify</text>
                </div>
                <div className="navList">
                    <div className="list">
                        <HomeIcon style={{ color: 'white' }} />
                        <text className="name">Home</text>
                    </div>
                    <div className="list" onClick={() => { setSearch(true) }}>
                        <SearchIcon style={{ color: 'rgb(179, 178, 178)' }} />
                        <text className="name inactive">Search</text>
                    </div>
                    <div className="list">
                        <LocalLibraryIcon style={{ color: 'rgb(179, 178, 178)' }} />
                        <text className="name inactive">Your Library</text>
                    </div>
                    <div className="list add-like">
                        <AddBoxIcon style={{ color: 'rgb(179, 178, 178)' }} />
                        <text className="name inactive">Create PlayList</text>
                    </div>
                    <div className="list">
                        <FavoriteIcon style={{ color: 'rgb(179, 178, 178)' }} />
                        <text className="name inactive">Liked Songs</text>
                    </div>
                    <hr className="line" />
                    <text className="name inactive extra">Discovery Weekly</text>
                    <text className="name inactive extra">Good Vibes</text>
                    <text className="name inactive extra">RapCaviar</text>
                    <div className="list install">
                        <DownloadForOfflineOutlinedIcon style={{ color: 'rgb(179, 178, 178)' }} />
                        <text className="name inactive">Install App</text>
                    </div>
                </div>
            </>
        )
    }
    const searching = () => {
        return (
            <>
                <ArrowBackOutlinedIcon style={{ color: 'rgb(179, 178, 178)', paddingTop: 8 }} onClick={() => { setSearch(false) }} />
                <input className="searching"
                    aria-label='Search'
                    onKeyUp={(e) => { props.onSearch(e.target.value) }}
                />
                <SearchOutlinedIcon style={{ color: 'rgb(179, 178, 178)' }} className="searchIcon" />
            </>
        )
    }
    return (
        <>
            <div className="leftNav">
                {search ? searching() : leftNav()}
            </div>
        </>
    )
}
export default LeftNavigation