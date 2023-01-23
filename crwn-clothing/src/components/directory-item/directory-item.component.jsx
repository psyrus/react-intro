import './directory-item.styles.jsx'
import { useNavigate } from 'react-router-dom';
import { BackgroundImage, DirectoryItemBody, DirectoryItemBodyText, DirectoryItemBodyTitle, DirectoryItemContainer } from './directory-item.styles.jsx';

const DirectoryItem = ({item, name}) => {
    const navigate = useNavigate();
    const path = `shop/${name}`

    return (
        <DirectoryItemContainer onClick={() => navigate(path)}>
            <BackgroundImage imageUrl={item.imageUrl} />
            <DirectoryItemBody>
                <DirectoryItemBodyTitle>{name}</DirectoryItemBodyTitle>
                <DirectoryItemBodyText>Shop Now</DirectoryItemBodyText>
            </DirectoryItemBody>
        </DirectoryItemContainer>
    );
}

export default DirectoryItem;