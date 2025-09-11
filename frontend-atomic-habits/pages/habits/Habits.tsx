import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { HabitsCarts } from '../../components/habits/HabitsCarts';
import { HabitsType } from '../../components/habits/HabitsType';

export default function Habits() {

    const [isHabitsSection, setIsHabitsSection] = useState(true);

    return (
        <>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Hábitos</Text>
                    <TouchableOpacity style={styles.addButton}>
                        <Feather name="plus" size={35} color="white" />
                    </TouchableOpacity>
                </View>

                {/* Tabs */}
                <View style={styles.tabs}>
                    <TouchableOpacity style={[styles.tab, isHabitsSection && styles.tabActive]} onPress={() => setIsHabitsSection(true)}>
                        <Text style={[styles.tabText, isHabitsSection && styles.tabTextActive]}>
                            Mis hábitos
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tab, !isHabitsSection && styles.tabActive]} onPress={() => setIsHabitsSection(false)}>
                        <Text style={[styles.tabText, !isHabitsSection && styles.tabTextActive]}>Tipos</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={styles.bodyContainer}>
                    {isHabitsSection ? (
                        <HabitsCarts />
                    ) : (
                        <HabitsType />
                    )}
                </ScrollView>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#111518" },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 25,
        paddingVertical: 15,
        justifyContent: "space-between",
    },
    headerTitle: { color: "white", fontSize: 18, fontWeight: "bold" },
    addButton: { padding: 8, borderRadius: 1 },
    tabs: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#3b4a54",
        paddingHorizontal: 16,
    },
    tab: {
        flex: 1,
        paddingVertical: 12,
        alignItems: "center",
    },
    tabActive: { borderBottomWidth: 3, borderBottomColor: "white" },
    tabText: { color: "#9caeba", fontWeight: "bold", fontSize: 14 },
    tabTextActive: { color: "white" },
    sectionTitle: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        marginHorizontal: 16,
        marginVertical: 8,
    },
    habitCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#111518",
        padding: 12,
        marginHorizontal: 16,
        borderRadius: 8,
        marginBottom: 8,
    },
    iconContainer: {
        backgroundColor: "#283239",
        padding: 12,
        borderRadius: 8,
        marginRight: 12,
    },
    habitTitle: { color: "white", fontSize: 16, fontWeight: "500" },
    habitSubtitle: { color: "#9caeba", fontSize: 14 },
    text: { color: "white" },
    bodyContainer: { paddingHorizontal: 16, paddingBottom: 16 },
});



// PENDIENTE, CREAR EL BUSCARDOR DE HABNITOS Y LAS CARTAS DE HABITOS QUE VAN A ESTAR EN UN MISMO ARCHIVO PERO INDIVIDUALMENTE ESTARAN EN SUS PROPIOS ARCHIVOS