import './Socials.scss'
import { FaVk, FaDiscord } from "react-icons/fa";

const Socials = () => {
    return(
        <div className="socials">
            <div className="text">
                <h1>Связаться с нами</h1>
                <div className="socialsIcons">
                    <a href="https://vk.com/mineleague_vime" className="socialIcon" target='_blank'><FaVk/></a>
                    <a href="https://discord.gg/drAuFs7jby" className="socialIcon" target='_blank'><FaDiscord/></a>
                </div>
            </div>
        </div>
    )
}

export default Socials;