import axios from "axios";
import fileDownload from "js-file-download";
import MyButton from '../../../components/UI/button/MyButton'
import stylles from './Software.module.css'

const Software = () => {

    const download = (e) => {
        e.preventDefault()
        axios({
            url:'http://localhost:8080/software/get',
            method: 'GET',
            responseType: 'blob'
        }).then((res) => {
            fileDownload(res.data, 'MineLeague-Software.zip')
        })
    }

    return (
        <div className="software">
            <div className={stylles.softbox}>
                <div className={stylles.softboxText}>
                <p>Для нашей лиги разработан специальный софт, благодаря которому вы сможете быстро проходить СС, в нем собраны такие программы как: ProcessHacker, USBDeview, Everything, ShellBag, LastActivityView, AnyDesk.</p>
                    <div className={stylles.softboxButton} onClick={(e) => download (e)}><MyButton>Download</MyButton></div>
                </div>
            </div>
            
        </div>
    )
}

export default Software;