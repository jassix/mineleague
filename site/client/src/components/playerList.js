import axios from 'axios'
import { useEffect, useState } from 'react';

import firstRank from '../static/skill_level_1.png'
import secondRank from '../static/skill_level_2.png'
import thirdRank from '../static/skill_level_3.png'
import fourthRank from '../static/skill_level_4.png'
import fivethRank from '../static/skill_level_5.png'
import sixthRank from '../static/skill_level_6.png'
import seventhRank from '../static/skill_level_7.png'
import eighthRank from '../static/skill_level_8.png'
import ninethRank from '../static/skill_level_9.png'
import maxRank from '../static/skill_level_max.png'

const PlayerList = () => {
    
    const [ratingTable, setRatingTable] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8080/api/player')
        .then(res => {
            setRatingTable(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const byField = (field) => {
        return (a, b) => a[field] > b[field] ? -1 : 1;
    }

    const sortTable = ratingTable.sort(byField('rating'))

    let playerId = 1;

    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Head</th>
                    <th>Username</th>
                    <th>Status</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {
                    sortTable.map(player => <tr key={player.id}><td>{playerId++}</td><td className='playerImg'><img src={'https://skin.vimeworld.ru/helm/3d/' + player.username + '.png'}></img></td><td>{player.username}</td><td className={player.role}>{player.role}</td><td className='ratingImg'>{player.rating}</td></tr>)
                }
            </tbody>
        </table>
    )
}

export default PlayerList;