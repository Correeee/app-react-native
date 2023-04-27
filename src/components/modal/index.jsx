import React from "react";
import { Modal, View, Text, Button } from "react-native";
import { styles } from "./style";

const CustomModal = ({ isVisible, animationType, selectedEvent, onCancel, onDelete }) => {
    return (
        <Modal visible={isVisible} animationType={animationType}>
            <View style={styles.container}>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailMessage}>¿Estás seguro que quieres borrar este Evento?</Text>
                    <Text style={styles.selectedEvent}>{selectedEvent?.value}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title='Cancelar'
                        color='#457b9d'
                        onPress={onCancel}
                    />
                    <Button
                        title='Borrar'
                        color='#e63946'
                        onPress={() => onDelete(selectedEvent.id)}
                    />
                </View>
            </View>
        </Modal>
    )
};

export default CustomModal;