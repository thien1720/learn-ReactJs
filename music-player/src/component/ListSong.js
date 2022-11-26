import { useContext , useState , useEffect} from "react";
import { Songs } from "../Context";
import { BsFillCloudArrowDownFill } from "react-icons/bs";

function ListSong() {
    const { Datasong, handleSetSong , song } = useContext(Songs)
    const [idSong, setIdSong] = useState(0)

    const handleClickSong = (idSong) =>{
        setIdSong(idSong)
        handleSetSong(idSong)
    }

    useEffect(()=>{
        setIdSong(song.id)
    },[song])
    
    return <div className="col-8 list-songs">
        <table className="table">
            <thead>
                <tr >
                    <th >STT</th>
                    <th colSpan="2">Songs</th>
                    <th >Author</th>
                    <th >
                        <BsFillCloudArrowDownFill />
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    Datasong.map((song) => {
                        return <tr key = {song.id} 
                            className={idSong === song.id ? "style-song" : ""}
                            onClick={() => handleClickSong((song.id))}>
                            <th >{song.id}</th>
                            <td colSpan="">{song.name}</td>
                            <td colSpan="2">{song.author}</td>
                            <td colSpan="1">
                                <a href={song.url}><BsFillCloudArrowDownFill /> </a>
                            </td>
                        </tr>
                    })
                }


            </tbody>
        </table>
    </div>
}

export default ListSong 