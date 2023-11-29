import List from "./styles";
import IconDelete from '../../../assets/images/trash-bin.png';
import IconPencil from '../../../assets/images/pencil.png';

interface Props {
    image: string;
    title: string;
    desc: string;
    price: number;
    onDelete: ()=> void;
    onActionEdit: ()=> void;
    justCard?: boolean;
    onClickCard: () => void;
}

const CardList = ({
    image,
    title,
    desc,
    price,
    onDelete,
    onActionEdit,
    justCard,
    onClickCard
}: Props) => {

    return (
        <List.Card onClick={onClickCard}>
            <List.Content>
                <List.Images src={image}/>
                <List.ContentDesc>
                    <List.Title>
                        {title}
                    </List.Title>
                    <List.Desc>
                       {desc}
                    </List.Desc>
                </List.ContentDesc>
                <List.Title>
                    {`$ ${price}`}
                </List.Title>
            </List.Content>
            {!justCard && (
                 <List.Action>
                    <List.ImageDelete src={IconPencil} onClick={onActionEdit}/>
                    <List.ImageDelete src={IconDelete} onClick={onDelete}/>
                </List.Action>
            )}
           
        </List.Card>
    )
}

export default CardList;