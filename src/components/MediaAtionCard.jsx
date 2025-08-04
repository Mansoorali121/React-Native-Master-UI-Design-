import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import { VideoIcon } from '../assets/Icons';


const phoneWidth = Dimensions.get("window").width

const cardwidth = (phoneWidth-s(16)*3)/2
const MediaAtionCard = ({imageURl,title,date}) => {

    return (
        <ImageBackground
            source={{
                uri: imageURl,
            }}
            style={styles.imagecontainer}
            imageStyle={styles.image}
        >
            <View style={styles.overlay} />
            {/* Live button View */}
            <View style={styles.livebedge}>
                <Text style={styles.livetext}>Live</Text>
            </View>
            {/* Meditations text  */}
            <View style={styles.cardcontainer}>
                <Text style={styles.title}>{title}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <VideoIcon />
                    <Text style={styles.dateText}>{date}</Text>
                </View>
            </View>
        </ImageBackground>
    );
};

export default MediaAtionCard;

const styles = StyleSheet.create({
    imagecontainer: {
        height: vs(141),
        width: cardwidth ,
        borderRadius: s(12),
        overflow: 'hidden',
    },
    image: { height: '100%', width: '100%', resizeMode: 'cover', opacity: 0.7 },
    cardcontainer: {
        position: 'absolute',
        left: s(10),
        bottom: s(10),
    },
    title: { color: '#fff', fontSize: s(12), fontWeight: 'semibold' },
    overlay: {
        ...StyleSheet.absoluteFillObject,

        backgroundColor: 'rgba(0,0,0,0.45)',
    },
    dateText: { fontSize: s(12), color: '#fff', marginStart: s(7) },
    livebedge: { backgroundColor:"#E41111",
        height:vs(22),
        width:s(39),
        borderRadius:s(90),
        position:"absolute",
        top:vs(7),
        right:s(10),
        justifyContent:"center",
        alignItems:"center"
    },
    livetext:{fontSize:s(11),
        fontWeight:"semibold",
        color:"#fff",
        
    }
});
