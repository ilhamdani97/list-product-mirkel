import React, {useState} from 'react';
import Modal from './styles';
import CloseIcon from '../../../../assets/images/close-icon.png'
import { Button, CardList, Input } from '../../../../components';
import { ListData } from '../../../../services/types/todo';

interface Props {
    showModal: boolean;
    data: ListData | null;
    onClose: () => void;
}
const ModalAssesment = ({
    showModal,
    data,
    onClose
}: Props) => {
   


    return (
        <Modal.Container show={showModal}>
            <Modal.Card>
                <Modal.Header>
                    <Modal.TitleHeader>
                        {`Detail ${data?.title}`}
                    </Modal.TitleHeader>
                    <Modal.IconClose src={CloseIcon} onClick={onClose}/>
                </Modal.Header>
                <Modal.Content>
                    {data && (
                        <CardList
                            title={data.title}
                            desc={data.description}
                            price={data.price}
                            image={data.image}
                            onActionEdit={()=> {}}
                            onDelete={()=> {}}
                            justCard
                            onClickCard={() => {}}
                        />
                    )}
                    
                </Modal.Content>
            </Modal.Card>
        </Modal.Container>
    )
}

export default ModalAssesment;