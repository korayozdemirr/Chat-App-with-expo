import { TouchableOpacity, Text, StyleSheet } from "react-native"

const Button = ({ children, ...props }) => {
    const { type } = props;
    if (type === "contain") {
        return (
            <TouchableOpacity style={styles.typeContains}>
                <Text style={styles.textContains}>{children}</Text>
            </TouchableOpacity>
        )
    } else if (type === "outline") {
        return (
            <TouchableOpacity style={styles.typeOutline}>
                <Text style={styles.textOutline}>{children}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <TouchableOpacity style={styles.typeContains}>
            <Text style={styles.textContains}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    typeContains: {
        height: 50,
        width: 200,
        backgroundColor: "#405cf5",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    textContains: {
        color: "#fff",
        fontSize: 16
    },
    typeOutline: {
        height: 50,
        width: 300,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#405cf5",
        justifyContent: "center",
        alignItems: "center"
    },
    textOutline: {
        color: "#405cf5",
        fontSize: 16
    }

})

export default Button