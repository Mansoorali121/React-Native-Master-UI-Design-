// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import UserAvatar from '../components/UserAvatar';
// import BackButton from '../components/BackButton';
// import { s, vs } from 'react-native-size-matters';
// import SendButton from '../components/SendButton';
// import SocialCircle from '../components/SocialCircle';
// import SocialSection from '../components/SocialSection';
// import FontAwesome from 'react-native-vector-icons/FontAwesome'
// const ContactUsScreen = () => {
//   return (
//     <View style={{ marginTop: vs(20), paddingHorizontal: s(17) }}>
//       <View style={styles.header}>
//         <BackButton />

//         <UserAvatar />
//       </View>
//       <Text style={styles.screentitle}>Contact Us </Text>
//       <View style={styles.socialcontainer}>
//         <Text style={styles.socialtitle}>Social Media Platforms </Text>
//         <SocialSection
//           title="WhatsApp"
//           icon={<FontAwesome name="whatsapp" size={24} color="black" />}
//         />
//         <SocialSection title="X" />
//         <SocialSection title="Instagram" />
//         <SocialSection title="Snap chat" />
//         <SocialSection title="Tik Tok" />
//       </View>
//     </View>
//   );
// };

// export default ContactUsScreen;

// const styles = StyleSheet.create({
//   header: { flexDirection: 'row', justifyContent: 'space-between' },
//   socialcontainer: {
//     backgroundColor: '#F5F5FA',
//     borderRadius: s(14),
//     paddingHorizontal: s(18),
//     paddingVertical: vs(10),
//     marginTop: vs(22),
//   },
//   socialtitle: { fontSize: s(16), fontWeight: 'semibold' },
//   screentitle: {
//     fontSize: s(30),
//     fontWeight: 'semibold',
//     marginTop: vs(20),
//     marginStart: s(19),
//   },
// });


import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import UserAvatar from '../components/UserAvatar';
import BackButton from '../components/BackButton';
import { s, vs } from 'react-native-size-matters';
import SocialSection from '../components/SocialSection';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const ContactUsScreen = () => {
  return (
    <View style={{ marginTop: vs(20), paddingHorizontal: s(17) }}>
      <View style={styles.header}>
        <BackButton />
        <UserAvatar />
      </View>
      <Text style={styles.screentitle}>Contact Us</Text>
      <View style={styles.socialcontainer}>
        <Text style={styles.socialtitle}>Social Media Platforms</Text>

        <SocialSection
          title="WhatsApp"
          icon={<FontAwesome name="whatsapp" size={24} color="#178AD9" />}
        />
        <SocialSection
          title="X"
          icon={<FontAwesome name="twitter" size={24} color="#178AD9" />}
        />
        <SocialSection
          title="Instagram"
          icon={<Entypo name="instagram" size={24} color="#178AD9" />}
        />
        <SocialSection
          title="Snapchat"
          icon={<FontAwesome name="snapchat-ghost" size={24} color="#178AD9" />}
        />
        <SocialSection
          title="TikTok"
          icon ={<MaterialCommunityIcons name="tiktok" size={24} color="#178AD9" />}
        />
      </View>
    </View>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between' },
  socialcontainer: {
    backgroundColor: '#F5F5FA',
    borderRadius: s(14),
    paddingHorizontal: s(18),
    paddingVertical: vs(10),
    marginTop: vs(22),
  },
  socialtitle: { fontSize: s(16), fontWeight: '600' },
  screentitle: {
    fontSize: s(30),
    fontWeight: '600',
    marginTop: vs(20),
    marginStart: s(19),
  },
});

