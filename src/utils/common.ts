import axios, { AxiosResponse } from "axios"
import qs from 'qs'
import { getArticlesType } from '@/interfaces/api-params-interfaces'

const BASE_URL = 'https://ptcapi.kidcastle.com.cn'
const Apis = {
  MediaList: `${BASE_URL}/Shop/MediaList`,
  GethdToken: `${BASE_URL}/Base/GethdToken`,
  register: `${BASE_URL}/Base/register`,
  getAuthcode: `${BASE_URL}/Base/getAuthcode`,
  SetPassword: `${BASE_URL}/Base/SetPassword`,
  ChangeRelation: `${BASE_URL}/PersonalCenter/ChangeRelation`,
  ChangeStudent: `${BASE_URL}/PersonalCenter/ChangeStudent`,
  IsDevStudent: `${BASE_URL}/PersonalCenter/IsDevStudent`,
  AddChildren: `${BASE_URL}/PersonalCenter/AddChildren`,
  GetAllMessage: `${BASE_URL}/PersonalCenter/GetAllMessage`,
  GetMessage: `${BASE_URL}/PersonalCenter/GetMessage`,
  MisLogin: `${BASE_URL}/Base/MisLogin`,
  PasswordLogin: `${BASE_URL}/Base/PasswordLogin`,
  MessageCenter: `${BASE_URL}/Message/MessageCenter`,
  GetMsgDetail: `${BASE_URL}/Message/GetMsgDetail`,
  ReplyClass: `${BASE_URL}/Message/ReplyClass`,
  GetPersonalcenterIndex: `${BASE_URL}/PersonalCenter/GetPersonalcenterIndex`,
  MyCollect: `${BASE_URL}/PersonalCenter/MyCollect`,
  DelMyCollect: `${BASE_URL}/PersonalCenter/DelMyCollect`,
  MemberMessage: `${BASE_URL}/PersonalCenter/MemberMessage`,
  SetProfession: `${BASE_URL}/PersonalCenter/SetProfession`,
  ChangeMobilePrev: `${BASE_URL}/Base/ChangeMobilePrev`,
  ChangeMobile: `${BASE_URL}/Base/ChangeMobile`,
  SetChild: `${BASE_URL}/PersonalCenter/SetChild`,
  CommonQuestion: `${BASE_URL}/PersonalCenter/CommonQuestion`,
  Class: `${BASE_URL}/PersonalCenter/Class`,
  MemberFeedback: `${BASE_URL}/PersonalCenter/MemberFeedback`,
  RemoveChild: `${BASE_URL}/PersonalCenter/RemoveChild`,
  MemberInfo: `${BASE_URL}/Shop/MemberInfo`,
  GoodsList: `${BASE_URL}/Shop/GoodsList`,
  ActivityRecommend: `${BASE_URL}/Activity/ActivityRecommend`,
  Ccenter: `${BASE_URL}/Article/Parents`,
  CcenterDetail: `${BASE_URL}/Article/ParentsDetail`,
  DownPoint: `${BASE_URL}/Article/DownPoint`,
  UpPoint: `${BASE_URL}/Article/UpPoint`,
  GoodsDetail: `${BASE_URL}/Shop/GoodsDetail`,
  GoodsProtocol: `${BASE_URL}/Shop/GetProtocol`,
  OrderProtocol: `${BASE_URL}/Shop/RefundAgreement`,
  AddCollect: `${BASE_URL}/Shop/AddCollect`,
  HotSearch: `${BASE_URL}/Shop/HotSearch`,
  MySearch: `${BASE_URL}/Shop/MySearch`,
  DelMySearch: `${BASE_URL}/Shop/DelMySearch`,
  GetCartCount: `${BASE_URL}/Shop/GetCartCount`,
  CartList: `${BASE_URL}/Shop/CartList`,
  GoodsCart: `${BASE_URL}/Shop/GoodsCart`,
  DelCart: `${BASE_URL}/Shop/DelCart`,
  CreateOrder: `${BASE_URL}/Shop/CreateOrder`,
  OrderDetail: `${BASE_URL}/Shop/OrderDetail`,
  GoDistribute: `${BASE_URL}/Shop/GoDistribute`,
  AllOrder: `${BASE_URL}/Shop/AllOrder`,
  CancelOrder: `${BASE_URL}/Shop/CancelOrder`,
  ApplyRefund: `${BASE_URL}/Shop/ApplyRefund`,
  refundRecord: `${BASE_URL}/Shop/refundRecord`,
  RefundDetail: `${BASE_URL}/Shop/RefundDetail`,
  ApplyInvoice: `${BASE_URL}/Shop/ApplyInvoice`,
  ApplyInvoiceNew: `${BASE_URL}/Shop/ApplyInvoiceNew`,
  OrderFeedback: `${BASE_URL}/Shop/OrderFeedback`,
  InvoiceInformation: `${BASE_URL}/Shop/InvoiceInformation`,
  AllInvoiceOrder: `${BASE_URL}//Shop/AllInvoiceOrder`,
  OrderPayPrice: `${BASE_URL}/Shop/OrderPayPrice`,
  MyInvoiceList: `${BASE_URL}/Shop/MyInvoiceList`,
  GetTelBySId: `${BASE_URL}/Shop/GetTelBySId`,
  RevocationApply: `${BASE_URL}/Shop/RevocationApply`,
  SystemApplyRefund: `${BASE_URL}/Shop/SystemApplyRefund`,
  RefundIsShow: `${BASE_URL}/Shop/RefundIsShow`,
  ShopMediaList: `${BASE_URL}/Shop/ShopMediaList`,
  RecommendMediaList: `${BASE_URL}/Shop/RecommendMediaList`,
  ActivityList: `${BASE_URL}/Activity/ActivityList`,
  ActivityHistory: `${BASE_URL}/Activity/ActivityHistory`,
  ShouldKnow: `${BASE_URL}/Activity/ShouldKnow`,
  ActivityDetail: `${BASE_URL}/Activity/ActivityDetail`,
  ActivityBook: `${BASE_URL}/Activity/ActivityBook`,
  ActivityPay: `${BASE_URL}/Activity/ActivityPay`,
  BookDetail: `${BASE_URL}/Activity/BookDetail`,
  ActivityUnpay: `${BASE_URL}/Activity/ActivityUnpay`,
  ActivityPayed: `${BASE_URL}/Activity/ActivityPayed`,
  Sign: `${BASE_URL}/Activity/Sign`,
  Signing: `${BASE_URL}/Activity/Signing`,
  Notice: `${BASE_URL}/Article/Notice`,
  NoticeDetail: `${BASE_URL}/Article/NoticeDetail`,
  wxtokenLogin: `${BASE_URL}/Base/wxtokenLogin`,
  OrderingPay: `${BASE_URL}/Activity/OrderingPay`,
  Ispay: `${BASE_URL}/Shop/Ispay`,
  OrderPay: `${BASE_URL}/BoingPay/OrderPay`,
  VideoList: `${BASE_URL}/Video/VideoList`,
  VideoDetail: `${BASE_URL}/Video/VideoDetail`,
  VideoClass: `${BASE_URL}/Video/VideoClass`,
  editPasswd: `${BASE_URL}/Stuapp/editPasswd`,
  getProgressList: `${BASE_URL}/Stuapp/getProgressList`,
  getRbProgressList: `${BASE_URL}/Stuapp/getRbProgressList`,
  getProgressOne: `${BASE_URL}/Stuapp/getProgressOne`,
  SubmitHour: `${BASE_URL}/Stuapp/SubmitHour`,
  getSudentTask: `${BASE_URL}/Stuapp/getSudentTask`,
  SubmitTask: `${BASE_URL}/Stuapp/SubmitTask`,
  getHistoryTask: `${BASE_URL}/Stuapp/getHistoryTask`,
  getHistoryTaskOne: `${BASE_URL}/Stuapp/getHistoryTaskOne`,
  getTaskitem: `${BASE_URL}/Stuapp/getTaskitem`,
  getExamineList: `${BASE_URL}/Stuapp/getExamineList`,
  getMapsstepsLog: `${BASE_URL}/Stuapp/getMapsstepsLog`,
  getAppStatus: `${BASE_URL}/Stuapp/getAppStatus`,
  getSetting: `${BASE_URL}/Stuapp/getSetting`,
  SettingType: `${BASE_URL}/Stuapp/SettingType`,
  getMonthList: `${BASE_URL}/Stuapp/getMonthList`,
  getStuAlbumsList: `${BASE_URL}/Stuapp/getStuAlbumsList`,
  getFamilymoth: `${BASE_URL}/Stuapp/getFamilymoth`,
  getStationlog: `${BASE_URL}/Stuapp/getStationlog`,
  memberNote: `${BASE_URL}/Stuapp//memberNote`,
  memberTwiceNote: `${BASE_URL}/Stuapp//memberTwiceNote`,
  shareSound: `${BASE_URL}/Stuapp/shareSound`,
  compliment: `${BASE_URL}/Stuapp/compliment`,
  getTestpaper: `${BASE_URL}/Exam/getTestpaper`,
  getLoginAuthCode: `${BASE_URL}/Exam/getLoginAuthCode`,
  getTestpaperQuestion: `${BASE_URL}/Exam/getTestpaperQuestion`,
  getSubject: `${BASE_URL}/Exam/getSubject`,
  getQuestion: `${BASE_URL}/Exam/getQuestion`,
  getScore: `${BASE_URL}/Exam/getScore`,
  getAbilityTree: `${BASE_URL}/Exam/getAbilityTree`,
  getInfo: `${BASE_URL}/Exam/getInfo`,
  getStudentHistory: `${BASE_URL}/Exam/getStudentHistory`,
  OpenClassList: `${BASE_URL}/OpenClass/OpenClassList`,
  OpenClassDetail: `${BASE_URL}/OpenClass/OpenClassDetail`,
  GetCity: `${BASE_URL}/OpenClass/GetCity`,
  GetSchool: `${BASE_URL}/OpenClass/GetSchool`,
  OpenClassApply: `${BASE_URL}/OpenClass/OpenClassApply`,
  GetApplyInfo: `${BASE_URL}/OpenClass/GetApplyInfo`,
  ListenList: `${BASE_URL}/OpenClass/ListenList`,
  AddSurveyUser: `${BASE_URL}/Survey/AddSurveyUser`,
  getSurveyOrder: `${BASE_URL}/Survey/getSurveyOrder`,
  SurveyQuestion: `${BASE_URL}/Survey/SurveyQuestion`,
  AddSurveyUserOptions: `${BASE_URL}/Survey/AddSurveyUserOptions`,
  goalPhoneActivityOneApi: 'http://crmapi.kidcastle.org/PhoneActivity/goalPhoneActivityOneApi',
  addPhoneActivityAction: 'http://crmapi.kidcastle.org/PhoneActivity/addPhoneActivityAction',
  getverifycodeApi: 'http://crmapi.kidcastle.org/PhoneActivity/getverifycodeApi',
  getTweetLog: `${BASE_URL}/Stuapp/getTweetLog`,
  IsBooked: `${BASE_URL}/Star/IsBooked`,
  CreateInfo: `${BASE_URL}/Star/CreateInfo`,
  OssUpload: `${BASE_URL}/Images/OssUpload`,
  GetInfo: `${BASE_URL}/Star/GetInfo`,
  IsReadAfter: `${BASE_URL}/Star/IsReadAfter`,
  IsVerbal: `${BASE_URL}/Star/IsVerbal`,
  ReadAfter: `${BASE_URL}/Star/ReadAfter`,
  Verbal: `${BASE_URL}/Star/Verbal`,
  savevideo: `${BASE_URL}/Wxeval/savevideo`,
  getVideoId: `${BASE_URL}/Star/getVideoId`,
  IsSee: `${BASE_URL}/Star/IsSee`,
  ChoseProvince: `${BASE_URL}/Star/ChoseProvince`,
  ChoseCity: `${BASE_URL}/Star/ChoseCity`,
  ChoseArea: `${BASE_URL}/Star/ChoseArea`,
  AreaSchool: `${BASE_URL}/Star/AreaSchool`,
  Signup: `${BASE_URL}/Groupbuy/Signup`,
  getTGAuthcode: `${BASE_URL}/Groupbuy/getAuthcode`,
  checkAuthcode: `${BASE_URL}/Groupbuy/checkAuthcode`,
  SignupFirst: `${BASE_URL}/Groupbuy/SignupFirst`,
  SignupScan: `${BASE_URL}/Groupbuy/SignupScan`,
  RollmemberNums: `${BASE_URL}/Groupbuy/RollmemberNums`,
  IsBind: `${BASE_URL}/Base/IsBind`,
  DelBind: `${BASE_URL}/Base/DelBind`,
  Bind: `${BASE_URL}/Base/Bind`,
  getChdProvince: `${BASE_URL}/Api/getChdProvince`,
  getChdCity: `${BASE_URL}/Api/getChdCity`,
  getChdSchool: `${BASE_URL}/Api/getChdSchool`,
  newOpenClassApply: `${BASE_URL}/Api/newOpenClassApply`,
  getOpenClassCode: `${BASE_URL}/Api/getOpenClassCode`,
  classPictures: `${BASE_URL}/Stuapp/classPictures`,
  picturePhoto: `${BASE_URL}/Stuapp/picturePhoto`,
  ExchangeGold: `${BASE_URL}/Stuapp/ExchangeGold`,
  ScoreList: `${BASE_URL}/ScoreQuery/ScoreList`,
  LevelList: `${BASE_URL}/ScoreQuery/LevelList`,
  getStudentInfo: `${BASE_URL}/Api/getStudentInfo`,
  book: `${BASE_URL}/Api/book `,
  sendVosMis: `${BASE_URL}/Api/sendVosMis`,
  ShareposterDemoimgList: `${BASE_URL}/Article/ShareposterDemoimgList`,
  ShareposterImgurlList: `${BASE_URL}/Article/ShareposterImgurlList`,
  CreateShareposter: `${BASE_URL}/Article/CreateShareposter`,
  getTicketCode: `${BASE_URL}/Api/getTicketCode`,
  getTicketNum: `${BASE_URL}/Api/getTicketNum`,
  getTicket: `${BASE_URL}/Api/getTicket`,
  getStudentCitation: `${BASE_URL}/Stuapp/getStudentCitation`,
  jghsign: 'https://api.kidcastle.com.cn/Stuapp/jghsign',
  getjmJosn: `${BASE_URL}/Shoping/getjmJosn`,
  PayPrice: `${BASE_URL}/Activity/PayPrice`,
  integralLogin: 'https://api.kedingdang.com/DuiBa/login',
  stuIntegralDetail: 'https://smcapi.kedingdang.com/Student/stuIntegralDetail'
}

export const MediaList = (params: getArticlesType): Promise<AxiosResponse> => {
  return axios.get(Apis.MediaList, { params })
}
export const postArticles = (params: getArticlesType): Promise<AxiosResponse> => {
  return axios.post(Apis.MediaList, qs.stringify(params))
}