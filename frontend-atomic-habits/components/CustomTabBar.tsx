import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Feather, Ionicons } from "@expo/vector-icons";

interface TabBarProps {
    state: {
        routes: routes[];
        index: number;
    };
    descriptors: { [key: string]: any };
    navigation: any;
}

interface routes {
    name: string;
    key: string;
}

type FeatherIconsNames = React.ComponentProps<typeof Feather>['name'];

export function CustomTabBar({ state, descriptors, navigation }: TabBarProps) {
    return (
        <View style={styles.tabContainer}>
            {state.routes.map((route: routes, index: number) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel || route.name;
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                let iconName:FeatherIconsNames = 'circle';
                switch (route.name) {
                    case 'Hábitos':
                        iconName = 'check-square';
                        break;
                    case 'Calendario':
                        iconName = 'calendar';
                        break;
                    case 'Perfil':
                        iconName = 'user';
                        break;
                }

                return (
                    <View key={index} style={styles.tabItem}>
                        <Text
                            style={[
                                styles.tabButton,
                                { opacity: isFocused ? 1 : 0.6 }
                            ]}
                            onPress={onPress}
                        >
                            <Feather
                                name={iconName}
                                size={24}
                                color={isFocused ? '#ffffff' : '#9CA3AF'}
                            />
                        </Text>
                        <Text
                            style={[
                                styles.tabLabel,
                                { color: isFocused ? '#ffffff' : '#9CA3AF' }
                            ]}
                        >
                            {label}
                        </Text>
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#1F2937',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderTopWidth: 1,
        borderTopColor: '#374151',
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
    },
    tabLabel: {
        fontSize: 12,
        marginTop: 4,
        fontWeight: '500',
    },
});

