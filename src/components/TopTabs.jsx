// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import React, { useState } from 'react';
// import { s, vs } from 'react-native-size-matters';

// const TopTabs = () => {
//   const tabArr = ['Live', 'Recorded'];

//   const ACTIVE_BG = '#75563B';

//   const ACTIVE_TEXT = '#FFFFFF';

//   const INACTIVE_TEXT = '#2C2016';

//   const [activetab, setactivetab] = useState('Live');

//   return (
//     <View style={styles.container}>
//       {tabArr.map(tabname => {
//         return (
//           <TouchableOpacity
//             style={[
//               styles.tabbtn,
//               activetab === tabname && { backgroundColor: ACTIVE_BG },
//             ]}
//                       onPress={()=>setactivetab(tabname)}

//           >
//             {' '}
//             <Text
//               style={
//                 activetab === tabname
//                   ? styles.activetextcolor
//                   : styles.inactivetext
//               }
//             >
//               {tabname}
//             </Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// };

// export default TopTabs;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#F5F5F4',
//     borderRadius: s(12),
//     flexDirection: 'row',
//     height: vs(48),
//     alignItems: 'center',
//     padding: s(4),
//   },
//   tabbtn: {
//     height: vs(32),
//     borderRadius: s(8),
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//   },
//   activetextcolor: { color: ACTIVE_TEXT, fontWeight: 'semibold', fontSize: s(14) },
//   inactivetext: { color: INACTIVE_TEXT,  fontSize: s(14) },
// });


import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { s, vs } from 'react-native-size-matters';

const TopTabs = () => {
  const tabArr = ['Live', 'Recorded'];

  const ACTIVE_BG = '#75563B';
  const ACTIVE_TEXT = '#FFFFFF';
  const INACTIVE_TEXT = '#2C2016';

  const [activetab, setactivetab] = useState('Live');

  return (
    <View style={styles.container}>
      {tabArr.map(tabname => {
        const isActive = activetab === tabname;
        return (
          <TouchableOpacity
            key={tabname}
            style={[
              styles.tabbtn,
              isActive && { backgroundColor: ACTIVE_BG },
            ]}
            onPress={() => setactivetab(tabname)}
            key={tabname}
          >
            <Text
              style={{
                color: isActive ? ACTIVE_TEXT : INACTIVE_TEXT,
                fontWeight: '600',
                fontSize: s(14),
              }}
            >
              {tabname}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TopTabs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F4',
    borderRadius: s(12),
    flexDirection: 'row',
    height: vs(48),
    alignItems: 'center',
    padding: s(4),
  },
  tabbtn: {
    height: vs(32),
    borderRadius: s(8),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

