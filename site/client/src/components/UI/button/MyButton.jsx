import './MyButton.css'

const MyButton = ({children, ...props}) => {
    return (
        <button className='myBtn'>
            {children}
        </button>
    )
}

export default MyButton;