import { StyleSheet } from "react-native"
import normalize from 'react-native-normalize'
import { COLOR } from "./Color"
import { LAYOUT } from "./Layout"
export * from './Color'
export * from './Layout'
export * from './Images'

export const defaultStyles = StyleSheet.create({


    FBOLD:{
        fontWeight:'bold'
    },
    FW300:{
        fontWeight:'300'
    },
    FW400:{
        fontWeight:'400'
    },
    FW700:{
        fontWeight:'700'
    },
    F10:{
        fontSize:normalize(10)
    },
    F11:{
        fontSize:normalize(11)
    },
    F12:{
        fontSize:normalize(12)
    },
    F13:{
        fontSize:normalize(13)
    },
    F14:{
        fontSize:normalize(14)
    },
    F15:{
        fontSize:normalize(15)
    },
    F16:{
        fontSize:normalize(16)
    },
    F17:{
        fontSize:normalize(17)
    },
    F18:{
        fontSize:normalize(18)
    },
    F19:{
        fontSize:normalize(19)
    },
    F20:{
        fontSize:normalize(20)
    },
    F21:{
        fontSize:normalize(21)
    },
    F22:{
        fontSize:normalize(22)
    },
    F23:{
        fontSize:normalize(23)
    },
    F24:{
        fontSize:normalize(24)
    },
    F25:{
        fontSize:normalize(25)
    },
    F26:{
        fontSize:normalize(26)
    },
    F27:{
        fontSize:normalize(27)
    },
    F28:{
        fontSize:normalize(28)
    },
    F29:{
        fontSize:normalize(29)
    },
    F30:{
        fontSize:normalize(30)
    },
    F35:{
        fontSize:normalize(35)
    },
    F40:{
        fontSize:normalize(40)
    },
    F45:{
        fontSize:normalize(45)
    },
    F48:{
        fontSize:normalize(48)
    },
    F50:{
        fontSize:normalize(50)
    },
    F72:{
        fontSize:normalize(72)
    },

    
    M5:{
        margin:normalize(5)
    },
    M10:{
        margin:normalize(10)
    },
    M20:{
        margin:normalize(20)
    },
    M30:{
        margin:normalize(30)
    },
    M40:{
        margin:normalize(40)
    },
    M50:{
        margin:normalize(50)
    },

    MX20: {
        marginHorizontal: normalize(20)
    },

    MT0:{
        marginTop:0
    },
    MT5:{
        marginTop:normalize(5)
    },
    MT10:{
        marginTop:normalize(10)
    },
    MT15:{
        marginTop:normalize(15)
    },
    MT20:{
        marginTop:normalize(20)
    },
    MT30:{
        marginTop:normalize(30)
    },
    MT40:{
        marginTop:normalize(40)
    },
    MT50:{
        marginTop:normalize(50)
    },
    MT70:{
        marginTop:normalize(70)
    },
    MT80:{
        marginTop:normalize(80)
    },
    MT100:{
        marginTop:normalize(100)
    },
    
    MB0:{
        marginBottom:normalize(0)
    },
    MB5:{
        marginBottom:normalize(5)
    },
    MB10:{
        marginBottom:normalize(10)
    },
    MB15:{
        marginBottom:normalize(15)
    },
    MB20:{
        marginBottom:normalize(20)
    },
    MB30:{
        marginBottom:normalize(30)
    },
    MB40:{
        marginBottom:normalize(40)
    },
    MB50:{
        marginBottom:normalize(50)
    },
    MB60:{
        marginBottom:normalize(60)
    },
    MB70:{
        marginBottom:normalize(70)
    },


    MV0:{
        marginVertical:normalize(0)
    },
    MV5:{
        marginVertical:normalize(5)
    },
    MV10:{
        marginVertical:normalize(10)
    },
    MV15:{
        marginVertical:normalize(15)
    },
    MV20:{
        marginVertical:normalize(20)
    },
    MV30:{
        marginVertical:normalize(30)
    },
    MV40:{
        marginVertical:normalize(40)
    },
    MV50:{
        marginVertical:normalize(50)
    },
    
    MH5:{
        marginHorizontal:normalize(5)
    },
    MH10:{
        marginHorizontal:normalize(10)
    },
    MH20:{
        marginHorizontal:normalize(20)
    },
    MH25:{
        marginHorizontal:normalize(25)
    },
    MH30:{
        marginHorizontal:normalize(30)
    },
    MH40:{
        marginHorizontal:normalize(40)
    },
    MH50:{
        marginHorizontal:normalize(50)
    },

    MR0:{
        marginRight:normalize(0)
    },
    MR5:{
        marginRight:normalize(5)
    },
    MR10:{
        marginRight:normalize(10)
    },
    MR15:{
        marginRight:normalize(15)
    },
    MR20:{
        marginRight:normalize(20)
    },
    MR30:{
        marginRight:normalize(30)
    },
    MR40:{
        marginRight:normalize(40)
    },
    MR50:{
        marginRight:normalize(50)
    },

    ML0:{
        marginLeft:normalize(0)
    },
    ML5:{
        marginLeft:normalize(5)
    },
    ML10:{
        marginLeft:normalize(10)
    },
    ML15:{
        marginLeft:normalize(15)
    },
    ML20:{
        marginLeft:normalize(20)
    },
    ML30:{
        marginLeft:normalize(30)
    },
    ML40:{
        marginLeft:normalize(40)
    },
    ML50:{
        marginLeft:normalize(50)
    },


    P0:{
        padding:0
    },
    P5:{
        padding:normalize(5)
    },
    P10:{
        padding:normalize(10)
    },
    P12:{
        padding:normalize(12)
    },
    P13:{
        padding:normalize(13)
    },
    P15:{
        padding:normalize(15)
    },
    P17:{
        padding:normalize(17)
    },
    P20:{
        padding:normalize(20)
    },
    P30:{
        padding:normalize(30)
    },
    P40:{
        padding:normalize(40)
    },
    P42:{
        padding:normalize(42)
    },
    P45:{
        padding:normalize(45)
    },
    P50:{
        padding:normalize(50)
    },

    PB0:{
        paddingBottom:normalize(0)
    },
    PB5:{
        paddingBottom:normalize(5)
    },
    PB10:{
        paddingBottom:normalize(10)
    },
    PB20:{
        paddingBottom:normalize(20)
    },
    PB30:{
        paddingBottom:normalize(30)
    },
    PB40:{
        paddingBottom:normalize(40)
    },
    PB50:{
        paddingBottom:normalize(50)
    },
    
    PT0:{
        paddingTop:0
    },
    PT5:{
        paddingTop:normalize(5)
    },
    PT10:{
        paddingTop:normalize(10)
    },
    PT20:{
        paddingTop:normalize(20)
    },
    PT25:{
        paddingTop:normalize(25)
    },
    PT30:{
        paddingTop:normalize(30)
    },
    PT40:{
        paddingTop:normalize(40)
    },
    PT50:{
        paddingTop:normalize(50)
    },
    PT100:{
        paddingTop:normalize(100)
    },
    PT130:{
        paddingTop:normalize(130)
    },
    
    PB10:{
        paddingBottom:normalize(10)
    },
    PB20:{
        paddingBottom:normalize(20)
    },
    PB30:{
        paddingBottom:normalize(30)
    },
    PB40:{
        paddingBottom:normalize(40)
    },
    PB50:{
        paddingBottom:normalize(50)
    },

    PL10:{
        paddingLeft:normalize(10)
    },
    PL15:{
        paddingLeft:normalize(15)
    },
    PL20:{
        paddingLeft:normalize(20)
    },
    PL25:{
        paddingLeft:normalize(25)
    },
    PL30:{
        paddingLeft:normalize(30)
    },
    PL40:{
        paddingLeft:normalize(40)
    },
    PL50:{
        paddingLeft:normalize(50)
    },
    
    PR10:{
        paddingRight:normalize(10)
    },
    PR20:{
        paddingRight:normalize(20)
    },
    PR30:{
        paddingRight:normalize(30)
    },
    PR40:{
        paddingRight:normalize(40)
    },
    PR50:{
        paddingRight:normalize(50)
    },

    PV5:{
        paddingVertical:normalize(5)
    },
    PV7:{
        paddingVertical:normalize(7)
    },
    PV10:{
        paddingVertical:normalize(10)
    },
    PV20:{
        paddingVertical:normalize(20)
    },
    PV15:{
        paddingVertical:normalize(15)
    },
    PV30:{
        paddingVertical:normalize(30)
    },
    PV40:{
        paddingVertical:normalize(40)
    },
    PV50:{
        paddingVertical:normalize(50)
    },
    PV150:{
        paddingVertical:normalize(150)
    },
    
    PH5:{
        paddingHorizontal:normalize(5)
    },
    PH10:{
        paddingHorizontal:normalize(10)
    },
    PH15:{
        paddingHorizontal:normalize(15)
    },
    PH20:{
        paddingHorizontal:normalize(20)
    },
    PH25:{
        paddingHorizontal:normalize(25)
    },
    PH30:{
        paddingHorizontal:normalize(30)
    },
    PH40:{
        paddingHorizontal:normalize(40)
    },
    PH50:{
        paddingHorizontal:normalize(50)
    },
    
    
    H10:{
        height:normalize(10)
    },
    H20:{
        height:normalize(20)
    },
    H30:{
        height:normalize(30)
    },
    H40:{
        height:normalize(40)
    },
    H50:{
        height:normalize(50)
    },
    H55:{
        height:normalize(55)
    },
    H60:{
        height:normalize(60)
    },
    H70:{
        height:normalize(70)
    },
    H80:{
        height:normalize(80)
    },
    H90:{
        height:normalize(90)
    },
    H95:{
        height:normalize(95)
    },
    H100:{
        height:normalize(100)
    },
    H150:{
        height:normalize(150)
    },

    W20P:{
        width:'20%'
    },
    W25P:{
        width:'25%'
    },
    W30P:{
        width:'30%'
    },
    W35P:{
        width:'35%'
    },
    W40P:{
        width:'40%'
    },
    W45P:{
        width:'45%'
    },
    W50P:{
        width:'50%'
    },
    W55P:{
        width:'55%'
    },
    W60P:{
        width:'60%'
    },
    W75P:{
        width:'75%'
    },
    W80P:{
        width:'80%'
    },
    W90P:{
        width:'90%'
    },
    W95P:{
        width:'95%'
    },
    W70P:{
        width:'70%'
    },
    W100P:{
        width:'100%'
    },

    H25P:{
        height:'25%'
    },
    H50P:{
        height:'50%'
    },
    H60P:{
        height:'60%'
    },
    H75P:{
        height:'75%'
    },
    H100P:{
        height:'100%'
    },


    BKS:{
        backgroundColor:COLOR.success
    },
    BKDAN:{
        backgroundColor:COLOR.danger
    },
    BKWAR:{
        backgroundColor:COLOR.warning
    },
    BKPrincipal:{
        backgroundColor:COLOR.BackgroundPrincipal
    },
    BKL:{
        backgroundColor:COLOR.light
    },
    BKW:{
        backgroundColor:COLOR.whiteColor
    },
    BKTRAN:{
        backgroundColor:COLOR.transparentColor
    },
    BKRP:{
        backgroundColor:COLOR.redPink
    },
    BKB:{
        backgroundColor:COLOR.blueColor
    },
    BKLB:{
        backgroundColor:COLOR.lightBlueColor
    },
    BKP:{
        backgroundColor:COLOR.pinkColor
    },
    BKPGR:{
        backgroundColor: "linear-gradient(21.14deg, rgba(128, 28, 255, 0.99) 10.11%, #AF70FF 87.82%);"
    },
    BKLP:{
        backgroundColor:COLOR.lightPinkColor
    },
    BKG:{
        backgroundColor:COLOR.greyColor
    },
    BKLG:{
        backgroundColor:COLOR.lightGreyColor
    },
    BKSY:{
        backgroundColor:COLOR.strongYellowColor
    },

    CLS:{
        color:COLOR.success
    },
    CLBL:{
        color:COLOR.blueColor
    },
    CLG:{
        color:COLOR.greyColor
    },
    CLT:{
        color:COLOR.TextColor
    },
    CLTG:{
        color:COLOR.TextColorGrey
    },
    CLWAR:{
        color:COLOR.warning
    },
    CLDAN:{
        color:COLOR.danger
    },
    CLI:{
        color:COLOR.InputBorder
    },
    CLB:{
        color:COLOR.blackColor
    },
    CLP:{
        color:COLOR.pinkColor
    },
    CLW:{
        color:COLOR.whiteColor
    },


    DSF: {
        display: "flex"
    },
    DSN: {
        display: "none"
    },


    Logo:{
        width:normalize(100),
        height:normalize(92),
        resizeMode:'contain'
    },
    
    IconImage:{
        width:normalize(20),
        height:normalize(20),
        resizeMode:'contain'
    },
    defaultProfile:{
        width:normalize(44),
        height:normalize(44),
        resizeMode:'contain'
    },
    Profile:{
        height:normalize(95),
        borderRadius:normalize(47.5),
        resizeMode:'contain'
    },
    notificationprofile:{
        width:normalize(34),
        height:normalize(34),
        resizeMode:'contain'
    },
    DIcon1:{
        width:normalize(65),
        height:normalize(62),
        resizeMode:'contain'
    },
    DIcon2:{
        width:normalize(33.5),
        height:normalize(32),
        resizeMode:'contain'
    },
    shopImage:{
        height:normalize(109),
        resizeMode:'contain'
    },
    shopImage1:{
        height:normalize(164),
        resizeMode:'contain'
    },

    POSA:{
        position:'absolute'
    },
    POSR:{
        position:'relative'
    },
    POR0:{
        right:0
    },
    POL0:{
        left:0
    },

    ROW:{
        flexDirection:'row'
    },
    Column:{
        flexDirection:'column'
    },
    Wrap:{
        flexWrap:'wrap'
    },
    Jbetween:{
        justifyContent:'space-between'
    },
    Jcenter:{
        justifyContent:'center'
    },
    Acenter:{
        alignItems:'center'
    },
    Astart:{
        alignItems:'flex-start'
    },
    Aend:{
        alignItems:'flex-end'
    },
    Tleft:{
        textAlign:'left'
    },
    Tcenter:{
        textAlign:'center'
    },
    Tvcenter:{
        textAlignVertical:'center'
    },

    BoxShadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    
    BoxShadow2:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    BoxShadow1:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1
    },
    
    InputText:{
        fontSize:normalize(13),
        color:"#838994",
        fontWeight:'normal',
        backgroundColor: COLOR.whiteColor,
        borderRadius: normalize(10),
        paddingLeft: normalize(15),
        paddingRight: normalize(15),
        marginRight: 5,
        height: 45,
        width: "100%"
    },
    InputLabel: {
        color: "#505868"
    },
    InputIcon:{
        fontSize:normalize(24),
        color:COLOR.InputBorder,
    },

    ButtonSuccess:{
        backgroundColor:COLOR.success,
        borderRadius:normalize(5),
    },
    ButtonText:{
        fontSize:normalize(18),
        color:COLOR.BackgroundPrincipal,
        fontWeight:'300',
        textAlign:'center'
    },
    modalCenteredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgba(0,0,0,0.6)',
    },
    modalView: {
        padding: normalize(25),
        backgroundColor: 'white',
        alignItems: 'center',
    },
    modalText: {
        fontWeight: '400',
        textAlign: 'center',
        fontSize: normalize(18),
        color:COLOR.blackColor
    },
    modalSuccessIcon:{
        width:normalize(62),
        height:normalize(62),
        resizeMode:'contain'
    },
    inputValidateCheckbox: {
        position: 'absolute',
        top: normalize(15),
        right: normalize(15),
        zIndex: 999,
        elevation: 999
    }
})