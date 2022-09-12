import './directory-item.styles.scss'

const DirectoryItem = (props) => {
    return (
        <div className='directory-item-container'>
            <div className='background-image' style={{
                backgroundImage: `url(${props.item.imageUrl})`
            }}></div>
            <div className='body'>
                <h2>{props.item.title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
}

export default DirectoryItem;