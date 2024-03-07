import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Pressable, TextInput, Keyboard, ScrollView } from 'react-native';
import { styles } from './style';

import LottieView from 'lottie-react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Home() {
    const [input, setInput] = useState('');
    const [keyboardControl, setKeyboardControl] = useState(false);
    const [keyboardControlVisible, setKeyboardControlVisible] = useState(true);
    const [recordedText, setRecordedText] = useState('');
    const [isListening, setIsListening] = useState(false);

    const toggleKeyboardControl = () => {
        setKeyboardControl(!keyboardControl);
    };


    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/logo.svg')} />
            </View>

            <View style={styles.recordArea}>
                <Text style={styles.title}>How can I help you?</Text>

                {keyboardControl ? (
                    <View style={{ width: '100%' }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => setInput(text)}
                            value={input}
                            placeholder="Typing here...."
                            placeholderTextColor='#616161'
                            multiline={true}
                        />

                        <ScrollView style={styles.responseContainer} scrollEnabled={true}>
                            <Text style={styles.response}>Prompt de resposta</Text>
                        </ScrollView>
                    </View>
                ) : (
                    <Pressable onPress={() => {}} style={styles.recordButtonContainer}>
                        <LottieView
                            autoPlay
                            style={{ width: 200, height: 200 }}
                            source={require('../../assets/microphone.json')}
                        />
                    </Pressable>
                )}
            </View>

            {keyboardControlVisible && (
                <TouchableOpacity
                    style={styles.iconButtonContainer}
                    onPress={toggleKeyboardControl}
                >
                    {keyboardControl ? (
                        <FontAwesome name="microphone" size={24} color="#181818" />
                    ) : (
                        <MaterialIcons name="keyboard" size={24} color="#181818" />
                    )}
                </TouchableOpacity>
            )}
        </View>
    );
}
