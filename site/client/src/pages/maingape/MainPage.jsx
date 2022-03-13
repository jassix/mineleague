import MyButton from '../../components/UI/button/MyButton';
import BedWarsIMG from '../../static/bedwars.png'
import './MainPage.scss'

const MainPage = () => {
    return (
        <div className="mainpage">
            <div className="content">
                <div className="contentText">
                    <ul>
                        <li>Что такое MineLeague?</li>

                        <li>— Это место, где вы можете повысить свой уровень игры в BedWars, познакомиться с знаменитыми и сильными игроками.</li>

                        <li>Здесь вы можете побороться за призовой фонд, обрести популярность в сфере BedWars или найти команду.</li>

                        <a href="https://vk.com/mineleague_vime?w=product-211326670_6085810" target="_blank"><MyButton>Buy invite</MyButton></a>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default MainPage;