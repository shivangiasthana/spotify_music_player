import React from 'react'
import "../styles/ListOfSongs.css"
import song from "../assets/song.jpg"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import title from '../assets/title.jpg'

const ListOfSongs = (props) => {
    // console.log('props', props.song)
    const renderSongs = () => {
        return (
            (props.song).map((item) => {
                return (
                    <>
                        <div className="songslist">
                            <div className="maincon">
                                <div className="title">
                                    <text className="value">{item.id}</text>
                                    <img src={item.image} height={50} width={50} className="addedpadding" />
                                    <text className="value" style={{ paddingLeft: 15 }}>{item.title}</text>
                                </div>
                                <div className="title albumName">
                                    <text className="value">{item.author}</text>
                                    <text className="value time">{item.time}</text>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })
        )
    }
    return (
        <>
            <div className="listsongs">
                <img src={song} className="songimg" />
                <div className="songDes">
                    <text className="playlist">PLAYLIST</text>
                    <text className="dailymix">Daily Mix 1</text>
                    <text className="author">Otis Redding, Al Green, Sam Cooke and more</text>
                    <div>
                        <text className="author spotify">Spotify . </text>
                        <text className="author">50 songs, 2hrs 32 mins</text>
                    </div>
                </div>
            </div>
            <div className="listOfSOngs">
                <div className="icons">
                    <div className="play">
                        <PlayArrowIcon style={{ color: 'rgb(243, 243, 243' }} />
                    </div>
                    <FavoriteBorderOutlinedIcon style={{ color: 'rgb(243, 243, 243', marginLeft: 16 }} />
                    <MoreHorizOutlinedIcon style={{ color: 'rgb(243, 243, 243', marginLeft: 16 }} />
                </div>
                <div className="songslist">
                    <div className="maincon">
                        <div className="title">
                            <text className="value">#</text>
                            <text className="value addedpadding">TITLE</text>
                        </div>
                        <div className="title album">
                            <text className="value">ALBUM</text>
                            <AccessTimeOutlinedIcon style={{ color: 'rgb(194, 201, 194)', height: 18 }} className="time" />
                        </div>
                    </div>
                </div>
                <hr style={{ paddingHorizontal: 20, opacity: 0.2 }} />
                {renderSongs()}
            </div>
        </>
    )
}
export default ListOfSongs

const songs = [
    {
        id: 1,
        image: title,
        title: 'Lay It Down',
        author: 'Al Green',
        time: "4.01"
    },
    {
        id: 2,
        image: title,
        title: 'Lay It Down',
        author: 'Al Green',
        time: "4.01"
    },
    {
        id: 3,
        image: title,
        title: 'Lay It Down',
        author: 'Al Green',
        time: "4.01"
    },
    {
        id: 4,
        image: title,
        title: 'Lay It Down',
        author: 'Al Green',
        time: "4.01"
    }
]

