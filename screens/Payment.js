import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { openBrowserAsync } from "expo-web-browser";
import { ACCESS_TOKEN } from "../config.json";

export default function PagamentoScreen() {

    const handleFree = ({ navigation }) => {
        navigation.navigate("Profile");
    };

    const handleIntegracaoMensal = async () => {

        let preferencia = {
            reason: "Plano Mensal",
            auto_recurring: {
                frequency: 1,
                frequency_type: "months",
                billing_day: 10,
                billing_day_proportional: true,
                transaction_amount: 24.99,
                currency_id: "BRL"
            },
            payment_methods_allowed: {
                payment_types: [
                    { id: "account_money" },
                    { id: "credit_card" }
                ],
                payment_methods: [{}]
            },
            back_url: "https://www.yoursite.com"
        }

        try {
            const response = await fetch('https://api.mercadopago.com/preapproval_plan', {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${ACCESS_TOKEN}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(preferencia)
            });
            const data = await response.json();
            if (data.init_point) {
                openBrowserAsync(data.init_point);
            }
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }

    const handleIntegracaoAnual = async () => {
        let preferencia = {
            reason: "Plano Anual",
            auto_recurring: {
                frequency: 12,
                frequency_type: "months",
                transaction_amount: 199.99,
                currency_id: "BRL"
            },
            payment_methods_allowed: {
                payment_types: [
                    { id: "account_money" },
                    { id: "credit_card" }
                ],
                payment_methods: [{}]
            },
            back_url: "https://www.yoursite.com"
        }

        try {
            const response = await fetch('https://api.mercadopago.com/preapproval_plan', {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${ACCESS_TOKEN}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(preferencia)
            });

            const data = await response.json();
            if (data.init_point) {
                openBrowserAsync(data.init_point);
            }
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.statusBarBackground} />
            <StatusBar barStyle='dark-content' backgroundColor='#FBBA25' translucent />
            <View style={styles.header}>
                <Image
                    source={{
                        uri: "https://ps.w.org/woocommerce-mercadopago/assets/icon-256x256.png",
                    }}
                />
                <Text style={styles.headerText}>Escolha um dos planos de assinatura abaixo:</Text>
            </View>

            <View style={styles.optionsContainer}>
                <TouchableOpacity onPress={handleFree} style={styles.optionButton}>
                    <View style={styles.optionContent}>
                        <Text style={styles.optionText}>Plano Grátis</Text>
                        <Text style={styles.optionValue}>Sem cobranças</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleIntegracaoMensal} style={styles.optionButton}>
                    <View style={styles.optionContent}>
                        <Text style={styles.optionText}>Plano Mensal</Text>
                        <Text style={styles.optionValue}>R$ 24,99/mês</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleIntegracaoAnual} style={styles.optionButton}>
                    <View style={styles.optionContent}>
                        <Text style={styles.optionText}>Plano Anual</Text>
                        <Text style={styles.optionValue}>R$ 199,99/ano</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    statusBarBackground: {
        backgroundColor: '#fff',
        height: Constants.statusBarHeight,
    },
    header: {
        alignItems: 'center',
    },
    headerText: {
        color: '#1656AD',
        marginTop: 13,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 32,
    },
    optionsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        gap: 15,
    },
    optionButton: {
        backgroundColor: '#f1f1f1',
        borderColor: '#1656AD',
        borderWidth: 2,
        width: 350,
        height: 100,
        borderRadius: 20,
    },
    optionContent: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
    optionText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    optionValue: {
        fontSize: 15,
        marginTop: 5,
        fontWeight: "600",
    },
});
