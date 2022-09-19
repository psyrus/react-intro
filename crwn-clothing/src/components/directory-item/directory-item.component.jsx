import './directory-item.styles.jsx'
import { BackgroundImage, DirectoryItemBody, DirectoryItemBodyText, DirectoryItemBodyTitle, DirectoryItemContainer } from './directory-item.styles.jsx';

const DirectoryItem = (props) => {
    return (
        <DirectoryItemContainer>
            <BackgroundImage imageUrl={props.item.imageUrl} />
            <DirectoryItemBody>
                <DirectoryItemBodyTitle>{props.item.title}</DirectoryItemBodyTitle>
                <DirectoryItemBodyText>Shop Now</DirectoryItemBodyText>
            </DirectoryItemBody>
        </DirectoryItemContainer>
    );
}

export default DirectoryItem;