import { SeismicZoneData, SiteClass } from './types';

// Subset of data from Table 2-1 (OCR)
// Format: City, District, SsD, S1D, SsM, S1M
export const SEISMIC_DATA: SeismicZoneData[] = [
  // Keelung
  { city: '基隆市', district: '中正區', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.50 },
  { city: '基隆市', district: '七堵區', SsD: 0.60, S1D: 0.30, SsM: 0.80, S1M: 0.45 },
  { city: '基隆市', district: '暖暖區', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.50 },
  { city: '基隆市', district: '仁愛區', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.50 },
  { city: '基隆市', district: '中山區', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.50 },
  { city: '基隆市', district: '安樂區', SsD: 0.60, S1D: 0.30, SsM: 0.80, S1M: 0.50 },
  { city: '基隆市', district: '信義區', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.50 },
  
  // Yilan
  { city: '宜蘭縣', district: '宜蘭市', SsD: 0.80, S1D: 0.45, SsM: 0.90, S1M: 0.55 },
  { city: '宜蘭縣', district: '頭城鎮', SsD: 0.80, S1D: 0.45, SsM: 0.90, S1M: 0.55 },
  { city: '宜蘭縣', district: '礁溪鄉', SsD: 0.80, S1D: 0.45, SsM: 0.90, S1M: 0.55 },
  { city: '宜蘭縣', district: '壯圍鄉', SsD: 0.80, S1D: 0.45, SsM: 0.90, S1M: 0.55 },
  { city: '宜蘭縣', district: '員山鄉', SsD: 0.80, S1D: 0.45, SsM: 0.90, S1M: 0.55 },
  { city: '宜蘭縣', district: '羅東鎮', SsD: 0.80, S1D: 0.45, SsM: 0.90, S1M: 0.55 },
  { city: '宜蘭縣', district: '五結鄉', SsD: 0.80, S1D: 0.45, SsM: 0.90, S1M: 0.55 },
  { city: '宜蘭縣', district: '冬山鄉', SsD: 0.80, S1D: 0.45, SsM: 0.90, S1M: 0.55 },
  { city: '宜蘭縣', district: '蘇澳鎮', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55 },
  { city: '宜蘭縣', district: '三星鄉', SsD: 0.80, S1D: 0.45, SsM: 0.90, S1M: 0.55 },
  { city: '宜蘭縣', district: '大同鄉', SsD: 0.80, S1D: 0.45, SsM: 0.90, S1M: 0.50 },
  { city: '宜蘭縣', district: '南澳鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55 },

  // Taipei (General Zones - Simplified for this demo as Table 2-6 is complex)
  { city: '臺北市', district: '信義區', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.50 },
  { city: '臺北市', district: '大安區', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.50 },
  
  // New Taipei
  { city: '新北市', district: '中和區', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.50 },
  { city: '新北市', district: '新店區', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.50 },
  { city: '新北市', district: '樹林區', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.50 },
  { city: '新北市', district: '土城區', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.50 },
  { city: '新北市', district: '五股區', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.50 },
  { city: '新北市', district: '泰山區', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.50 },
  { city: '新北市', district: '淡水區', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.50 },
  { city: '新北市', district: '板橋區', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.50 },
  { city: '新北市', district: '新莊區', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.50 },

  // Taoyuan
  { city: '桃園市', district: '桃園區', SsD: 0.50, S1D: 0.30, SsM: 0.80, S1M: 0.40 },
  { city: '桃園市', district: '中壢區', SsD: 0.60, S1D: 0.30, SsM: 0.80, S1M: 0.45 },
  { city: '桃園市', district: '大溪區', SsD: 0.70, S1D: 0.35, SsM: 0.90, S1M: 0.50 },
  { city: '桃園市', district: '楊梅區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '桃園市', district: '蘆竹區', SsD: 0.50, S1D: 0.30, SsM: 0.70, S1M: 0.40 },
  { city: '桃園市', district: '大園區', SsD: 0.50, S1D: 0.30, SsM: 0.70, S1M: 0.40 },
  { city: '桃園市', district: '龜山區', SsD: 0.50, S1D: 0.30, SsM: 0.70, S1M: 0.40 },
  { city: '桃園市', district: '八德區', SsD: 0.60, S1D: 0.30, SsM: 0.80, S1M: 0.45 },
  { city: '桃園市', district: '龍潭區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '新城斷層' },
  { city: '桃園市', district: '平鎮區', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.45 },
  { city: '桃園市', district: '新屋區', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.45 },
  { city: '桃園市', district: '觀音區', SsD: 0.50, S1D: 0.30, SsM: 0.70, S1M: 0.40 },
  { city: '桃園市', district: '復興區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },

  // Hsinchu
  { city: '新竹市', district: '東區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '新城斷層' },
  { city: '新竹市', district: '北區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '新城斷層' },
  { city: '新竹市', district: '香山區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '新城斷層' },
  { city: '新竹縣', district: '竹北市', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '新城斷層' },
  { city: '新竹縣', district: '竹東鎮', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '新城斷層' },
  { city: '新竹縣', district: '新埔鎮', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '新城斷層' },
  { city: '新竹縣', district: '關西鎮', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '新城斷層' },
  { city: '新竹縣', district: '湖口鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '新竹縣', district: '新豐鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '新竹縣', district: '芎林鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '新城斷層' },
  { city: '新竹縣', district: '橫山鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '新城斷層' },
  { city: '新竹縣', district: '北埔鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '新城斷層、獅潭斷層' },
  { city: '新竹縣', district: '寶山鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '新城斷層、獅潭斷層' },
  { city: '新竹縣', district: '峨眉鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '新城斷層、獅潭斷層' },
  { city: '新竹縣', district: '尖石鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '新竹縣', district: '五峰鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '獅潭斷層' },

  // Miaoli
  { city: '苗栗縣', district: '苗栗市', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '獅潭斷層' },
  { city: '苗栗縣', district: '苑裡鎮', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '電子腳斷層、三義斷層、大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段' },
  { city: '苗栗縣', district: '通霄鎮', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '電子腳斷層、三義斷層、大甲斷層全段、鐵砧山斷層、彰化斷層' },
  { city: '苗栗縣', district: '竹南鎮', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '新城斷層' },
  { city: '苗栗縣', district: '頭份市', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '新城斷層、獅潭斷層' },
  { city: '苗栗縣', district: '後龍鎮', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '苗栗縣', district: '卓蘭鎮', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '電子腳斷層、三義斷層、車籠埔斷層全段、大茅埔-雙冬斷層' },
  { city: '苗栗縣', district: '大湖鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '獅潭斷層、電子腳斷層、三義斷層、車籠埔斷層全段、大茅埔-雙冬斷層' },
  { city: '苗栗縣', district: '公館鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '獅潭斷層、三義斷層' },
  { city: '苗栗縣', district: '銅鑼鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '獅潭斷層、電子腳斷層、三義斷層、車籠埔斷層全段' },
  { city: '苗栗縣', district: '南庄鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '獅潭斷層' },
  { city: '苗栗縣', district: '頭屋鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '獅潭斷層' },
  { city: '苗栗縣', district: '三義鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '電子腳斷層、三義斷層、大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段' },
  { city: '苗栗縣', district: '西湖鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '苗栗縣', district: '造橋鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '獅潭斷層' },
  { city: '苗栗縣', district: '三灣鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '新城斷層、獅潭斷層' },
  { city: '苗栗縣', district: '獅潭鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '獅潭斷層' },
  { city: '苗栗縣', district: '泰安鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '獅潭斷層、車籠埔斷層全段、大茅埔-雙冬斷層' },

  // Taichung
  { city: '臺中市', district: '中區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '三義斷層、大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段、大茅埔-雙冬斷層' },
  { city: '臺中市', district: '東區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '三義斷層、車籠埔斷層全段、大茅埔-雙冬斷層' },
  { city: '臺中市', district: '南區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段、大茅埔-雙冬斷層' },
  { city: '臺中市', district: '西區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '三義斷層、大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段、大茅埔-雙冬斷層' },
  { city: '臺中市', district: '北區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '三義斷層、大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段、大茅埔-雙冬斷層' },
  { city: '臺中市', district: '西屯區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '屯子腳斷層、三義斷層、大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段' },
  { city: '臺中市', district: '南屯區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段' },
  { city: '臺中市', district: '北屯區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '屯子腳斷層、三義斷層、大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段、大茅埔-雙冬斷層' },
  { city: '臺中市', district: '豐原區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '屯子腳斷層、三義斷層、大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段、大茅埔-雙冬斷層' },
  { city: '臺中市', district: '東勢區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '屯子腳斷層、三義斷層、車籠埔斷層全段' },
  { city: '臺中市', district: '大甲區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '屯子腳斷層、三義斷層、大甲斷層全段、鐵砧山斷層、彰化斷層' },
  { city: '臺中市', district: '清水區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '屯子腳斷層、大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段' },
  { city: '臺中市', district: '沙鹿區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '屯子腳斷層、大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段' },
  { city: '臺中市', district: '梧棲區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '屯子腳斷層、大甲斷層全段、鐵砧山斷層、彰化斷層' },
  { city: '臺中市', district: '后里區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '屯子腳斷層、三義斷層、大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段' },
  { city: '臺中市', district: '神岡區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '屯子腳斷層、三義斷層、大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段' },
  { city: '臺中市', district: '潭子區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '屯子腳斷層、三義斷層、大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段、大茅埔-雙冬斷層' },
  { city: '臺中市', district: '大雅區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '屯子腳斷層、三義斷層、大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段' },
  { city: '臺中市', district: '新社區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '屯子腳斷層、三義斷層、車籠埔斷層全段、大茅埔-雙冬斷層' },
  { city: '臺中市', district: '石岡區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '屯子腳斷層、三義斷層、車籠埔斷層全段、大茅埔-雙冬斷層' },
  { city: '臺中市', district: '外埔區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '屯子腳斷層、三義斷層、大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段' },
  { city: '臺中市', district: '大安區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '屯子腳斷層、大甲斷層全段、鐵砧山斷層、彰化斷層' },
  { city: '臺中市', district: '烏日區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段' },
  { city: '臺中市', district: '大肚區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層' },
  { city: '臺中市', district: '龍井區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '屯子腳斷層、大甲斷層全段、鐵砧山斷層、彰化斷層' },
  { city: '臺中市', district: '霧峰區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段、大茅埔-雙冬斷層' },
  { city: '臺中市', district: '太平區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '三義斷層、車籠埔斷層全段、大茅埔-雙冬斷層' },
  { city: '臺中市', district: '大里區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段、大茅埔-雙冬斷層' },
  { city: '臺中市', district: '和平區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '車籠埔斷層全段、大茅埔-雙冬斷層' },

  // Changhua
  { city: '彰化縣', district: '彰化市', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段' },
  { city: '彰化縣', district: '鹿港鎮', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層' },
  { city: '彰化縣', district: '和美鎮', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層' },
  { city: '彰化縣', district: '線西鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層' },
  { city: '彰化縣', district: '伸港鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層' },
  { city: '彰化縣', district: '福興鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層' },
  { city: '彰化縣', district: '秀水鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層' },
  { city: '彰化縣', district: '花壇鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段' },
  { city: '彰化縣', district: '芬園鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段' },
  { city: '彰化縣', district: '員林市', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段' },
  { city: '彰化縣', district: '溪湖鎮', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層' },
  { city: '彰化縣', district: '田中鎮', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段' },
  { city: '彰化縣', district: '大村鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段' },
  { city: '彰化縣', district: '埔鹽鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層' },
  { city: '彰化縣', district: '埔心鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層' },
  { city: '彰化縣', district: '永靖鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層' },
  { city: '彰化縣', district: '社頭鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段' },
  { city: '彰化縣', district: '二水鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段' },
  { city: '彰化縣', district: '北斗鎮', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層' },
  { city: '彰化縣', district: '二林鎮', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '彰化縣', district: '田尾鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層' },
  { city: '彰化縣', district: '埤頭鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層' },
  { city: '彰化縣', district: '芳苑鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '彰化縣', district: '大城鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '彰化縣', district: '竹塘鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '彰化縣', district: '溪州鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層' },

  // Nantou
  { city: '南投縣', district: '南投市', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段、大茅埔-雙冬斷層' },
  { city: '南投縣', district: '埔里鎮', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '大茅埔-雙冬斷層' },
  { city: '南投縣', district: '草屯鎮', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段、大茅埔-雙冬斷層' },
  { city: '南投縣', district: '竹山鎮', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段、大茅埔-雙冬斷層、大尖山斷層、觸口斷層' },
  { city: '南投縣', district: '集集鎮', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '車籠埔斷層全段、大茅埔-雙冬斷層' },
  { city: '南投縣', district: '名間鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段、大茅埔-雙冬斷層' },
  { city: '南投縣', district: '鹿谷鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '車籠埔斷層全段、大茅埔-雙冬斷層、大尖山斷層、觸口斷層' },
  { city: '南投縣', district: '中寮鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段、大茅埔-雙冬斷層' },
  { city: '南投縣', district: '魚池鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '大茅埔-雙冬斷層' },
  { city: '南投縣', district: '國姓鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '車籠埔斷層全段、大茅埔-雙冬斷層' },
  { city: '南投縣', district: '水里鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '車籠埔斷層全段、大茅埔-雙冬斷層' },
  { city: '南投縣', district: '信義鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '大茅埔-雙冬斷層' },
  { city: '南投縣', district: '仁愛鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  
  // Yunlin
  { city: '雲林縣', district: '斗六市', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段、梅山斷層、大尖山斷層、觸口斷層' },
  { city: '雲林縣', district: '斗南鎮', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '梅山斷層' },
  { city: '雲林縣', district: '虎尾鎮', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '雲林縣', district: '西螺鎮', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層' },
  { city: '雲林縣', district: '土庫鎮', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '雲林縣', district: '北港鎮', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '雲林縣', district: '古坑鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '車籠埔斷層全段、梅山斷層、大尖山斷層、觸口斷層' },
  { city: '雲林縣', district: '大埤鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '梅山斷層' },
  { city: '雲林縣', district: '莿桐鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層' },
  { city: '雲林縣', district: '林內鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大甲斷層全段、鐵砧山斷層、彰化斷層、車籠埔斷層全段、大尖山斷層、觸口斷層' },
  { city: '雲林縣', district: '二崙鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '雲林縣', district: '崙背鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '雲林縣', district: '麥寮鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '雲林縣', district: '東勢鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '雲林縣', district: '褒忠鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '雲林縣', district: '臺西鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '雲林縣', district: '元長鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '雲林縣', district: '四湖鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '雲林縣', district: '口湖鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '雲林縣', district: '水林鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },

  // Chiayi City
  { city: '嘉義市', district: '東區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '梅山斷層' },
  { city: '嘉義市', district: '西區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '梅山斷層' },

  // Chiayi County
  { city: '嘉義縣', district: '太保市', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '梅山斷層' },
  { city: '嘉義縣', district: '朴子市', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '嘉義縣', district: '布袋鎮', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '嘉義縣', district: '大林鎮', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '車籠埔斷層全段、梅山斷層、大尖山斷層、觸口斷層' },
  { city: '嘉義縣', district: '民雄鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '梅山斷層、大尖山斷層、觸口斷層' },
  { city: '嘉義縣', district: '溪口鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '梅山斷層' },
  { city: '嘉義縣', district: '新港鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '梅山斷層' },
  { city: '嘉義縣', district: '六腳鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '嘉義縣', district: '東石鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '嘉義縣', district: '義竹鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '嘉義縣', district: '鹿草鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '嘉義縣', district: '水上鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '大尖山斷層、觸口斷層' },
  { city: '嘉義縣', district: '中埔鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大尖山斷層、觸口斷層' },
  { city: '嘉義縣', district: '竹崎鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '車籠埔斷層全段、梅山斷層、大尖山斷層、觸口斷層' },
  { city: '嘉義縣', district: '梅山鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '車籠埔斷層全段、梅山斷層、大尖山斷層、觸口斷層' },
  { city: '嘉義縣', district: '番路鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大尖山斷層、觸口斷層' },
  { city: '嘉義縣', district: '大埔鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大尖山斷層、觸口斷層' },
  { city: '嘉義縣', district: '阿里山鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '大尖山斷層、觸口斷層' },

  // Tainan
  { city: '臺南市', district: '新營區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '臺南市', district: '鹽水區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '臺南市', district: '白河區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大尖山斷層、觸口斷層、六甲斷層' },
  { city: '臺南市', district: '柳營區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '六甲斷層' },
  { city: '臺南市', district: '後壁區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '臺南市', district: '東山區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '大尖山斷層、觸口斷層、六甲斷層' },
  { city: '臺南市', district: '麻豆區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '臺南市', district: '下營區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '臺南市', district: '六甲區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '六甲斷層' },
  { city: '臺南市', district: '官田區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '六甲斷層' },
  { city: '臺南市', district: '大內區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '新化斷層' },
  { city: '臺南市', district: '佳里區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '臺南市', district: '學甲區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '臺南市', district: '西港區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '臺南市', district: '七股區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '臺南市', district: '將軍區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '臺南市', district: '北門區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '臺南市', district: '新化區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '新化斷層' },
  { city: '臺南市', district: '善化區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '新化斷層' },
  { city: '臺南市', district: '新市區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '新化斷層' },
  { city: '臺南市', district: '安定區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '臺南市', district: '山上區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '新化斷層' },
  { city: '臺南市', district: '玉井區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '臺南市', district: '楠西區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '臺南市', district: '南化區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '臺南市', district: '左鎮區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '新化斷層' },
  { city: '臺南市', district: '仁德區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '臺南市', district: '歸仁區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '新化斷層' },
  { city: '臺南市', district: '關廟區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '新化斷層' },
  { city: '臺南市', district: '龍崎區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '臺南市', district: '永康區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '新化斷層' },
  { city: '臺南市', district: '東區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '臺南市', district: '南區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '臺南市', district: '中西區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '臺南市', district: '北區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '臺南市', district: '安南區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '臺南市', district: '安平區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },

  // Kaohsiung
  { city: '高雄市', district: '鳳山區', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.50 },
  { city: '高雄市', district: '林園區', SsD: 0.50, S1D: 0.30, SsM: 0.70, S1M: 0.45 },
  { city: '高雄市', district: '大寮區', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.45 },
  { city: '高雄市', district: '大樹區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '旗山斷層' },
  { city: '高雄市', district: '大社區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '旗山斷層' },
  { city: '高雄市', district: '仁武區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '旗山斷層' },
  { city: '高雄市', district: '鳥松區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '旗山斷層' },
  { city: '高雄市', district: '岡山區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '旗山斷層' },
  { city: '高雄市', district: '橋頭區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '旗山斷層' },
  { city: '高雄市', district: '燕巢區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '旗山斷層' },
  { city: '高雄市', district: '田寮區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '旗山斷層' },
  { city: '高雄市', district: '阿蓮區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '高雄市', district: '路竹區', SsD: 0.70, S1D: 0.35, SsM: 0.90, S1M: 0.50 },
  { city: '高雄市', district: '湖內區', SsD: 0.70, S1D: 0.35, SsM: 0.90, S1M: 0.50 },
  { city: '高雄市', district: '茄萣區', SsD: 0.70, S1D: 0.35, SsM: 0.90, S1M: 0.50 },
  { city: '高雄市', district: '永安區', SsD: 0.70, S1D: 0.35, SsM: 0.90, S1M: 0.50 },
  { city: '高雄市', district: '彌陀區', SsD: 0.70, S1D: 0.35, SsM: 0.90, S1M: 0.50 },
  { city: '高雄市', district: '梓官區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '高雄市', district: '旗山區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '旗山斷層' },
  { city: '高雄市', district: '美濃區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '旗山斷層' },
  { city: '高雄市', district: '六龜區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '高雄市', district: '甲仙區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '高雄市', district: '杉林區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '旗山斷層' },
  { city: '高雄市', district: '內門區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '旗山斷層' },
  { city: '高雄市', district: '茂林區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '高雄市', district: '桃源區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '高雄市', district: '那瑪夏區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '高雄市', district: '鹽埕區', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.50 },
  { city: '高雄市', district: '鼓山區', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.50 },
  { city: '高雄市', district: '左營區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '旗山斷層' },
  { city: '高雄市', district: '楠梓區', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '旗山斷層' },
  { city: '高雄市', district: '三民區', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '旗山斷層' },
  { city: '高雄市', district: '新興區', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.50 },
  { city: '高雄市', district: '前金區', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.50 },
  { city: '高雄市', district: '苓雅區', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.50 },
  { city: '高雄市', district: '前鎮區', SsD: 0.50, S1D: 0.35, SsM: 0.70, S1M: 0.50 },
  { city: '高雄市', district: '旗津區', SsD: 0.50, S1D: 0.35, SsM: 0.70, S1M: 0.50 },
  { city: '高雄市', district: '小港區', SsD: 0.50, S1D: 0.35, SsM: 0.70, S1M: 0.45 },

  // Pingtung
  { city: '屏東縣', district: '屏東市', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.50 },
  { city: '屏東縣', district: '潮州鎮', SsD: 0.60, S1D: 0.30, SsM: 0.80, S1M: 0.45 },
  { city: '屏東縣', district: '東港鎮', SsD: 0.50, S1D: 0.30, SsM: 0.70, S1M: 0.40 },
  { city: '屏東縣', district: '恆春鎮', SsD: 0.50, S1D: 0.30, SsM: 0.70, S1M: 0.40 },
  { city: '屏東縣', district: '萬丹鄉', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.45 },
  { city: '屏東縣', district: '長治鄉', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.50 },
  { city: '屏東縣', district: '麟洛鄉', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.50 },
  { city: '屏東縣', district: '九如鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '屏東縣', district: '里港鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50, fault: '旗山斷層' },
  { city: '屏東縣', district: '鹽埔鄉', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.50 },
  { city: '屏東縣', district: '高樹鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '屏東縣', district: '萬巒鄉', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.45 },
  { city: '屏東縣', district: '內埔鄉', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.50 },
  { city: '屏東縣', district: '竹田鄉', SsD: 0.60, S1D: 0.35, SsM: 0.80, S1M: 0.45 },
  { city: '屏東縣', district: '新埤鄉', SsD: 0.60, S1D: 0.30, SsM: 0.70, S1M: 0.40 },
  { city: '屏東縣', district: '枋寮鄉', SsD: 0.50, S1D: 0.30, SsM: 0.70, S1M: 0.40 },
  { city: '屏東縣', district: '新園鄉', SsD: 0.50, S1D: 0.30, SsM: 0.70, S1M: 0.45 },
  { city: '屏東縣', district: '崁頂鄉', SsD: 0.50, S1D: 0.30, SsM: 0.80, S1M: 0.45 },
  { city: '屏東縣', district: '林邊鄉', SsD: 0.50, S1D: 0.30, SsM: 0.70, S1M: 0.40 },
  { city: '屏東縣', district: '南州鄉', SsD: 0.50, S1D: 0.30, SsM: 0.70, S1M: 0.40 },
  { city: '屏東縣', district: '佳冬鄉', SsD: 0.50, S1D: 0.30, SsM: 0.70, S1M: 0.40 },
  { city: '屏東縣', district: '琉球鄉', SsD: 0.50, S1D: 0.30, SsM: 0.70, S1M: 0.40 },
  { city: '屏東縣', district: '車城鄉', SsD: 0.50, S1D: 0.30, SsM: 0.70, S1M: 0.40 },
  { city: '屏東縣', district: '滿州鄉', SsD: 0.50, S1D: 0.30, SsM: 0.70, S1M: 0.40 },
  { city: '屏東縣', district: '枋山鄉', SsD: 0.50, S1D: 0.30, SsM: 0.70, S1M: 0.40 },
  { city: '屏東縣', district: '三地門鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '屏東縣', district: '霧臺鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '屏東縣', district: '瑪家鄉', SsD: 0.70, S1D: 0.35, SsM: 0.90, S1M: 0.50 },
  { city: '屏東縣', district: '泰武鄉', SsD: 0.70, S1D: 0.35, SsM: 0.90, S1M: 0.50 },
  { city: '屏東縣', district: '來義鄉', SsD: 0.60, S1D: 0.30, SsM: 0.80, S1M: 0.45 },
  { city: '屏東縣', district: '春日鄉', SsD: 0.50, S1D: 0.30, SsM: 0.70, S1M: 0.40 },
  { city: '屏東縣', district: '獅子鄉', SsD: 0.50, S1D: 0.30, SsM: 0.70, S1M: 0.40 },
  { city: '屏東縣', district: '牡丹鄉', SsD: 0.50, S1D: 0.30, SsM: 0.70, S1M: 0.40 },

  // Penghu
  { city: '澎湖縣', district: '馬公市', SsD: 0.40, S1D: 0.25, SsM: 0.65, S1M: 0.35 },
  { city: '澎湖縣', district: '湖西鄉', SsD: 0.40, S1D: 0.25, SsM: 0.65, S1M: 0.35 },
  { city: '澎湖縣', district: '白沙鄉', SsD: 0.40, S1D: 0.25, SsM: 0.65, S1M: 0.35 },
  { city: '澎湖縣', district: '西嶼鄉', SsD: 0.35, S1D: 0.20, SsM: 0.55, S1M: 0.35 },
  { city: '澎湖縣', district: '望安鄉', SsD: 0.35, S1D: 0.20, SsM: 0.55, S1M: 0.35 },
  { city: '澎湖縣', district: '七美鄉', SsD: 0.35, S1D: 0.20, SsM: 0.55, S1M: 0.35 },
  
  // Taitung
  { city: '臺東縣', district: '臺東市', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '米崙斷層、嶺頂斷層、瑞穗斷層、玉里斷層、池上斷層、鹿野斷層、利吉斷層' },
  { city: '臺東縣', district: '成功鎮', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '米崙斷層、嶺頂斷層、瑞穗斷層、玉里斷層、池上斷層、鹿野斷層、利吉斷層' },
  { city: '臺東縣', district: '關山鎮', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '米崙斷層、嶺頂斷層、瑞穗斷層、玉里斷層、池上斷層、鹿野斷層、利吉斷層' },
  { city: '臺東縣', district: '卑南鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '米崙斷層、嶺頂斷層、瑞穗斷層、玉里斷層、池上斷層、鹿野斷層、利吉斷層' },
  { city: '臺東縣', district: '大武鄉', SsD: 0.60, S1D: 0.30, SsM: 0.80, S1M: 0.45 },
  { city: '臺東縣', district: '太麻里鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '臺東縣', district: '東河鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '米崙斷層、嶺頂斷層、瑞穗斷層、玉里斷層、池上斷層、鹿野斷層、利吉斷層' },
  { city: '臺東縣', district: '長濱鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '米崙斷層、嶺頂斷層、瑞穗斷層、玉里斷層、池上斷層、鹿野斷層、利吉斷層' },
  { city: '臺東縣', district: '鹿野鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '米崙斷層、嶺頂斷層、瑞穗斷層、玉里斷層、池上斷層、鹿野斷層、利吉斷層' },
  { city: '臺東縣', district: '池上鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '米崙斷層、嶺頂斷層、瑞穗斷層、玉里斷層、池上斷層、鹿野斷層、利吉斷層' },
  { city: '臺東縣', district: '延平鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '米崙斷層、嶺頂斷層、瑞穗斷層、玉里斷層、池上斷層、鹿野斷層、利吉斷層' },
  { city: '臺東縣', district: '海端鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '米崙斷層、嶺頂斷層、瑞穗斷層、玉里斷層、池上斷層、鹿野斷層、利吉斷層' },
  { city: '臺東縣', district: '達仁鄉', SsD: 0.60, S1D: 0.30, SsM: 0.80, S1M: 0.45 },
  { city: '臺東縣', district: '金峰鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '臺東縣', district: '蘭嶼鄉', SsD: 0.70, S1D: 0.40, SsM: 0.90, S1M: 0.50 },
  { city: '臺東縣', district: '綠島鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55 },

  // Hualien
  { city: '花蓮縣', district: '花蓮市', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '米崙斷層、嶺頂斷層、瑞穗斷層、玉里斷層、池上斷層、鹿野斷層、利吉斷層' },
  { city: '花蓮縣', district: '鳳林鎮', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '米崙斷層、嶺頂斷層、瑞穗斷層、玉里斷層、池上斷層、鹿野斷層、利吉斷層' },
  { city: '花蓮縣', district: '玉里鎮', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '米崙斷層、嶺頂斷層、瑞穗斷層、玉里斷層、池上斷層、鹿野斷層、利吉斷層' },
  { city: '花蓮縣', district: '新城鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '米崙斷層、嶺頂斷層、瑞穗斷層、玉里斷層、池上斷層、鹿野斷層、利吉斷層' },
  { city: '花蓮縣', district: '吉安鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '米崙斷層、嶺頂斷層、瑞穗斷層、玉里斷層、池上斷層、鹿野斷層、利吉斷層' },
  { city: '花蓮縣', district: '壽豐鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '米崙斷層、嶺頂斷層、瑞穗斷層、玉里斷層、池上斷層、鹿野斷層、利吉斷層' },
  { city: '花蓮縣', district: '光復鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '米崙斷層、嶺頂斷層、瑞穗斷層、玉里斷層、池上斷層、鹿野斷層、利吉斷層' },
  { city: '花蓮縣', district: '豐濱鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '米崙斷層、嶺頂斷層、瑞穗斷層、玉里斷層、池上斷層、鹿野斷層、利吉斷層' },
  { city: '花蓮縣', district: '瑞穗鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '米崙斷層、嶺頂斷層、瑞穗斷層、玉里斷層、池上斷層、鹿野斷層、利吉斷層' },
  { city: '花蓮縣', district: '富里鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '米崙斷層、嶺頂斷層、瑞穗斷層、玉里斷層、池上斷層、鹿野斷層、利吉斷層' },
  { city: '花蓮縣', district: '秀林鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '米崙斷層、嶺頂斷層、瑞穗斷層、玉里斷層、池上斷層、鹿野斷層、利吉斷層' },
  { city: '花蓮縣', district: '萬榮鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '米崙斷層、嶺頂斷層、瑞穗斷層、玉里斷層、池上斷層、鹿野斷層、利吉斷層' },
  { city: '花蓮縣', district: '卓溪鄉', SsD: 0.80, S1D: 0.45, SsM: 1.00, S1M: 0.55, fault: '米崙斷層、嶺頂斷層、瑞穗斷層、玉里斷層、池上斷層、鹿野斷層、利吉斷層' },

  // Kinmen
  { city: '金門縣', district: '金城鎮', SsD: 0.35, S1D: 0.20, SsM: 0.50, S1M: 0.35 },
  { city: '金門縣', district: '金湖鎮', SsD: 0.40, S1D: 0.25, SsM: 0.50, S1M: 0.35 },
  { city: '金門縣', district: '金沙鎮', SsD: 0.35, S1D: 0.20, SsM: 0.50, S1M: 0.35 },
  { city: '金門縣', district: '金寧鄉', SsD: 0.35, S1D: 0.20, SsM: 0.45, S1M: 0.30 },
  { city: '金門縣', district: '烈嶼鄉', SsD: 0.35, S1D: 0.20, SsM: 0.45, S1M: 0.30 },
  { city: '金門縣', district: '烏坵鄉', SsD: 0.80, S1D: 0.50, SsM: 1.00, S1M: 0.55 },

  // Lienchiang
  { city: '連江縣', district: '南竿鄉', SsD: 0.35, S1D: 0.20, SsM: 0.45, S1M: 0.30 },
  { city: '連江縣', district: '北竿鄉', SsD: 0.35, S1D: 0.20, SsM: 0.45, S1M: 0.30 },
  { city: '連江縣', district: '莒光鄉', SsD: 0.35, S1D: 0.20, SsM: 0.45, S1M: 0.30 },
  { city: '連江縣', district: '東引鄉', SsD: 0.35, S1D: 0.20, SsM: 0.45, S1M: 0.30 },
];

// Linear Interpolation
const interpolate = (x: number, x1: number, y1: number, x2: number, y2: number): number => {
  if (x <= x1) return y1;
  if (x >= x2) return y2;
  return y1 + ((y2 - y1) * (x - x1)) / (x2 - x1);
};

// Table 2-3-3: Near-fault SsM
export interface NearFaultData {
  faults: string[];
  points: number[]; // [1, 3, 5, 7, 9, 11, 13, 14]
  values: number[]; // Base values for each point
  splitIndices?: number[]; // indices where values split into two rows
  alternativeValues?: number[]; // row 2 values for those indices
  alternativeDistricts?: string[]; // City-District strings that use alternative values
}

export const NEAR_FAULT_SSM_TABLE: NearFaultData[] = [
  {
    faults: ['新城斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [1.20, 1.10, 1.05, 1.00, 1.00, 1.00, 1.00, 1.00],
    splitIndices: [4, 5, 6, 7],
    alternativeValues: [0.90, 0.90, 0.90, 0.90],
    alternativeDistricts: ['桃園市-龍潭區']
  },
  {
    faults: ['獅潭斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [1.26, 1.20, 1.13, 1.07, 1.03, 1.00, 1.00, 1.00],
    splitIndices: [6, 7],
    alternativeValues: [0.90, 0.90],
    alternativeDistricts: ['新竹縣-五峰鄉', '苗栗縣-泰安鄉']
  },
  {
    faults: ['三義斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [1.20, 1.10, 1.05, 1.00, 1.00, 1.00, 1.00, 1.00],
    splitIndices: [4, 5, 6, 7],
    alternativeValues: [0.90, 0.90, 0.90, 0.90],
    alternativeDistricts: ['苗栗縣-通霄鎮']
  },
  {
    faults: ['大甲斷層全段', '鐵砧山斷層', '彰化斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [1.33, 1.21, 1.14, 1.09, 1.06, 1.03, 1.00, 1.00],
    splitIndices: [7],
    alternativeValues: [0.90],
    alternativeDistricts: ['苗栗縣-通霄鎮', '彰化縣-鹿港鎮', '彰化縣-溪湖鎮', '彰化縣-福興鄉', '彰化縣-埤頭鄉', '彰化縣-埔鹽鄉', '雲林縣-西螺鎮']
  },
  {
    faults: ['屯子腳斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [1.26, 1.19, 1.13, 1.07, 1.03, 1.00, 1.00, 1.00],
    splitIndices: [6, 7],
    alternativeValues: [0.90, 0.90],
    alternativeDistricts: ['苗栗縣-通霄鎮']
  },
  {
    faults: ['車籠埔斷層全段'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [1.25, 1.21, 1.15, 1.09, 1.05, 1.02, 1.00, 1.00],
    splitIndices: [7],
    alternativeValues: [0.90],
    alternativeDistricts: ['苗栗縣-泰安鄉', '臺中市-和平區']
  },
  {
    faults: ['大茅埔-雙冬斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [1.25, 1.17, 1.13, 1.09, 1.06, 1.03, 1.00, 1.00],
    splitIndices: [7],
    alternativeValues: [0.90],
    alternativeDistricts: ['苗栗縣-泰安鄉', '臺中市-和平區', '南投縣-埔里鎮', '南投縣-魚池鄉', '南投縣-信義鄉']
  },
  {
    faults: ['梅山斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [1.30, 1.22, 1.13, 1.04, 1.00, 1.00, 1.00, 1.00],
    splitIndices: [5, 6, 7],
    alternativeValues: [0.90, 0.90, 0.90],
    alternativeDistricts: ['雲林縣-斗南鎮', '雲林縣-大埤鄉', '嘉義縣-新港鄉', '嘉義縣-太保市']
  },
  {
    faults: ['大尖山斷層', '觸口斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [1.21, 1.18, 1.11, 1.04, 1.00, 1.00, 1.00, 1.00],
    splitIndices: [5, 6, 7],
    alternativeValues: [0.90, 0.90, 0.90],
    alternativeDistricts: ['嘉義縣-水上鄉', '嘉義縣-阿里山鄉']
  },
  {
    faults: ['六甲斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [1.10, 1.05, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
  },
  {
    faults: ['新化斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [1.29, 1.14, 1.05, 1.00, 1.00, 1.00, 1.00, 1.00],
    splitIndices: [4, 5, 6, 7],
    alternativeValues: [0.90, 0.90, 0.90, 0.90],
    alternativeDistricts: ['臺南市-大內區', '臺南市-善化區', '臺南市-歸仁區', '臺南市-關廟區']
  },
  {
    faults: ['旗山斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [1.20, 1.10, 1.05, 1.00, 1.00, 1.00, 1.00, 1.00],
    splitIndices: [4, 5, 6, 7],
    alternativeValues: [0.90, 0.90, 0.90, 0.90],
    alternativeDistricts: ['高雄市-左營區', '高雄市-三民區', '高雄市-大樹區', '高雄市-鳥松區', '高雄市-岡山區', '高雄市-美濃區', '高雄市-杉林區', '高雄市-內門區', '屏東縣-里港鄉']
  },
  {
    faults: ['米崙斷層', '嶺頂斷層', '瑞穗斷層', '玉里斷層', '池上斷層', '鹿野斷層', '利吉斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [1.32, 1.27, 1.18, 1.09, 1.04, 1.01, 1.00, 1.00],
  }
];

export const getNearFaultSsM = (fault: string, distance: number, city: string, district: string): number | null => {
  const rule = NEAR_FAULT_SSM_TABLE.find(r => r.faults.some(f => fault.includes(f)));
  if (!rule) return null;

  const getTargetValues = (rule: NearFaultData, city: string, district: string): number[] => {
    const cityDist = `${city}-${district}`;
    if (!rule.alternativeValues || !rule.alternativeDistricts?.includes(cityDist)) {
      return rule.values;
    }
    
    // Create new array with alternatives applied
    const result = [...rule.values];
    rule.splitIndices?.forEach((idx, i) => {
      if (rule.alternativeValues) {
        result[idx] = rule.alternativeValues[i];
      }
    });
    return result;
  };

  const targetValues = getTargetValues(rule, city, district);
  
  // Interpolation
  for (let i = 0; i < rule.points.length - 1; i++) {
    if (distance <= rule.points[i]) return targetValues[i];
    if (distance < rule.points[i+1]) {
      return interpolate(distance, rule.points[i], targetValues[i], rule.points[i+1], targetValues[i+1]);
    }
  }
  
  return targetValues[targetValues.length - 1];
};

export const NEAR_FAULT_S1D_TABLE: NearFaultData[] = [
  {
    faults: ['新城斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.52, 0.50, 0.47, 0.45, 0.45, 0.45, 0.45, 0.45],
    splitIndices: [4, 5, 6, 7],
    alternativeValues: [0.40, 0.40, 0.40, 0.40],
    alternativeDistricts: ['桃園市-龍潭區']
  },
  {
    faults: ['獅潭斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.60, 0.58, 0.54, 0.50, 0.48, 0.45, 0.45, 0.45],
    splitIndices: [6, 7],
    alternativeValues: [0.40, 0.40],
    alternativeDistricts: ['新竹縣-五峰鄉', '苗栗縣-泰安鄉']
  },
  {
    faults: ['三義斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.52, 0.50, 0.47, 0.45, 0.45, 0.45, 0.45, 0.45],
    splitIndices: [4, 5, 6, 7],
    alternativeValues: [0.40, 0.40, 0.40, 0.40],
    alternativeDistricts: ['苗栗縣-通霄鎮']
  },
  {
    faults: ['大甲斷層全段', '鐵砧山斷層', '彰化斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.63, 0.58, 0.53, 0.49, 0.48, 0.46, 0.45, 0.45],
    splitIndices: [7],
    alternativeValues: [0.40],
    alternativeDistricts: ['苗栗縣-通霄鎮', '彰化縣-鹿港鎮', '彰化縣-溪湖鎮', '彰化縣-福興鄉', '彰化縣-埤頭鄉', '彰化縣-埔鹽鄉', '雲林縣-西螺鎮']
  },
  {
    faults: ['屯子腳斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.59, 0.57, 0.55, 0.52, 0.49, 0.45, 0.45, 0.45],
    splitIndices: [6, 7],
    alternativeValues: [0.40, 0.40],
    alternativeDistricts: ['苗栗縣-通霄鎮']
  },
  {
    faults: ['車籠埔斷層全段'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.61, 0.60, 0.57, 0.54, 0.51, 0.48, 0.45, 0.45],
    splitIndices: [7],
    alternativeValues: [0.40],
    alternativeDistricts: ['苗栗縣-泰安鄉', '臺中市-和平區']
  },
  {
    faults: ['大茅埔-雙冬斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.63, 0.58, 0.53, 0.49, 0.48, 0.46, 0.45, 0.45],
    splitIndices: [7],
    alternativeValues: [0.40],
    alternativeDistricts: ['苗栗縣-泰安鄉', '臺中市-和平區', '南投縣-埔里鎮', '南投縣-魚池鄉', '南投縣-信義鄉']
  },
  {
    faults: ['梅山斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.65, 0.62, 0.58, 0.52, 0.45, 0.45, 0.45, 0.45],
    splitIndices: [5, 6, 7],
    alternativeValues: [0.40, 0.40, 0.40],
    alternativeDistricts: ['雲林縣-斗南鎮', '雲林縣-大埤鄉', '嘉義縣-新港鄉', '嘉義縣-太保市']
  },
  {
    faults: ['大尖山斷層', '觸口斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.52, 0.50, 0.48, 0.46, 0.45, 0.45, 0.45, 0.45],
    splitIndices: [5, 6, 7],
    alternativeValues: [0.40, 0.40, 0.40],
    alternativeDistricts: ['嘉義縣-水上鄉', '嘉義縣-阿里山鄉']
  },
  {
    faults: ['六甲斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.52, 0.50, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45],
  },
  {
    faults: ['新化斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.52, 0.48, 0.46, 0.45, 0.45, 0.45, 0.45, 0.45],
    splitIndices: [4, 5, 6, 7],
    alternativeValues: [0.40, 0.40, 0.40, 0.40],
    alternativeDistricts: ['臺南市-大內區', '臺南市-善化區', '臺南市-歸仁區', '臺南市-關廟區']
  },
  {
    faults: ['旗山斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.54, 0.50, 0.47, 0.45, 0.45, 0.45, 0.45, 0.45],
    splitIndices: [4, 5, 6, 7],
    alternativeValues: [0.40, 0.40, 0.40, 0.40],
    alternativeDistricts: ['高雄市-左營區', '高雄市-三民區', '高雄市-大樹區', '高雄市-鳥松區', '高雄市-岡山區', '高雄市-美濃區', '高雄市-杉林區', '高雄市-內門區', '屏東縣-里港鄉']
  },
  {
    faults: ['米崙斷層', '嶺頂斷層', '瑞穗斷層', '玉里斷層', '池上斷層', '鹿野斷層', '利吉斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.71, 0.69, 0.65, 0.61, 0.56, 0.51, 0.45, 0.45],
  }
];

export const getNearFaultS1D = (fault: string, distance: number, city: string, district: string): number | null => {
  const rule = NEAR_FAULT_S1D_TABLE.find(r => r.faults.some(f => fault.includes(f)));
  if (!rule) return null;

  const getTargetValues = (rule: NearFaultData, city: string, district: string): number[] => {
    const cityDist = `${city}-${district}`;
    if (!rule.alternativeValues || !rule.alternativeDistricts?.includes(cityDist)) {
      return rule.values;
    }
    
    const result = [...rule.values];
    rule.splitIndices?.forEach((idx, i) => {
      if (rule.alternativeValues) {
        result[idx] = rule.alternativeValues[i];
      }
    });
    return result;
  };

  const targetValues = getTargetValues(rule, city, district);
  
  for (let i = 0; i < rule.points.length - 1; i++) {
    if (distance <= rule.points[i]) return targetValues[i];
    if (distance < rule.points[i+1]) {
      return interpolate(distance, rule.points[i], targetValues[i], rule.points[i+1], targetValues[i+1]);
    }
  }
  
  return targetValues[targetValues.length - 1];
};

export const NEAR_FAULT_SSD_TABLE: NearFaultData[] = [
  {
    faults: ['新城斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.88, 0.84, 0.81, 0.80, 0.80, 0.80, 0.80, 0.80],
    splitIndices: [4, 5, 6, 7],
    alternativeValues: [0.70, 0.70, 0.70, 0.70],
    alternativeDistricts: ['桃園市-龍潭區']
  },
  {
    faults: ['獅潭斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [1.02, 0.97, 0.93, 0.89, 0.85, 0.80, 0.80, 0.80],
    splitIndices: [6, 7],
    alternativeValues: [0.70, 0.70],
    alternativeDistricts: ['新竹縣-五峰鄉', '苗栗縣-泰安鄉']
  },
  {
    faults: ['三義斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.88, 0.84, 0.81, 0.80, 0.80, 0.80, 0.80, 0.80],
    splitIndices: [4, 5, 6, 7],
    alternativeValues: [0.70, 0.70, 0.70, 0.70],
    alternativeDistricts: ['苗栗縣-通霄鎮']
  },
  {
    faults: ['大甲斷層全段', '鐵砧山斷層', '彰化斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [1.08, 1.02, 0.94, 0.87, 0.85, 0.83, 0.80, 0.80],
    splitIndices: [7],
    alternativeValues: [0.70],
    alternativeDistricts: ['苗栗縣-通霄鎮', '彰化縣-鹿港鎮', '彰化縣-溪湖鎮', '彰化縣-福興鄉', '彰化縣-埤頭鄉', '彰化縣-埔鹽鄉', '雲林縣-西螺鎮']
  },
  {
    faults: ['屯子腳斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [1.02, 0.97, 0.93, 0.89, 0.85, 0.80, 0.80, 0.80],
    splitIndices: [6, 7],
    alternativeValues: [0.70, 0.70],
    alternativeDistricts: ['苗栗縣-通霄鎮']
  },
  {
    faults: ['車籠埔斷層全段'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.98, 0.94, 0.89, 0.85, 0.83, 0.82, 0.80, 0.80],
    splitIndices: [7],
    alternativeValues: [0.70],
    alternativeDistricts: ['苗栗縣-泰安鄉', '臺中市-和平區']
  },
  {
    faults: ['大茅埔-雙冬斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [1.08, 1.02, 0.94, 0.87, 0.85, 0.83, 0.80, 0.80],
    splitIndices: [7],
    alternativeValues: [0.70],
    alternativeDistricts: ['苗栗縣-泰安鄉', '臺中市-和平區', '南投縣-埔里鎮', '南投縣-魚池鄉', '南投縣-信義鄉']
  },
  {
    faults: ['梅山斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [1.10, 1.04, 0.97, 0.90, 0.80, 0.80, 0.80, 0.80],
    splitIndices: [5, 6, 7],
    alternativeValues: [0.70, 0.70, 0.70],
    alternativeDistricts: ['雲林縣-斗南鎮', '雲林縣-大埤鄉', '嘉義縣-新港鄉', '嘉義縣-太保市']
  },
  {
    faults: ['大尖山斷層', '觸口斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.92, 0.88, 0.83, 0.80, 0.80, 0.80, 0.80, 0.80],
    splitIndices: [5, 6, 7],
    alternativeValues: [0.70, 0.70, 0.70],
    alternativeDistricts: ['嘉義縣-水上鄉', '嘉義縣-阿里山鄉']
  },
  {
    faults: ['六甲斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.88, 0.84, 0.80, 0.80, 0.80, 0.80, 0.80, 0.80],
  },
  {
    faults: ['新化斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.98, 0.88, 0.82, 0.80, 0.80, 0.80, 0.80, 0.80],
    splitIndices: [4, 5, 6, 7],
    alternativeValues: [0.70, 0.70, 0.70, 0.70],
    alternativeDistricts: ['臺南市-大內區', '臺南市-善化區', '臺南市-歸仁區', '臺南市-關廟區']
  },
  {
    faults: ['旗山斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.92, 0.88, 0.84, 0.80, 0.80, 0.80, 0.80, 0.80],
    splitIndices: [4, 5, 6, 7],
    alternativeValues: [0.70, 0.70, 0.70, 0.70],
    alternativeDistricts: ['高雄市-左營區', '高雄市-三民區', '高雄市-大樹區', '高雄市-鳥松區', '高雄市-岡山區', '高雄市-美濃區', '高雄市-杉林區', '高雄市-內門區', '屏東縣-里港鄉']
  },
  {
    faults: ['米崙斷層', '嶺頂斷層', '瑞穗斷層', '玉里斷層', '池上斷層', '鹿野斷層', '利吉斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [1.14, 1.10, 1.06, 1.01, 0.94, 0.87, 0.80, 0.80],
  }
];

export const getNearFaultSsD = (fault: string, distance: number, city: string, district: string): number | null => {
  const rule = NEAR_FAULT_SSD_TABLE.find(r => r.faults.some(f => fault.includes(f)));
  if (!rule) return null;

  const getTargetValues = (rule: NearFaultData, city: string, district: string): number[] => {
    const cityDist = `${city}-${district}`;
    if (!rule.alternativeValues || !rule.alternativeDistricts?.includes(cityDist)) {
      return rule.values;
    }
    
    const result = [...rule.values];
    rule.splitIndices?.forEach((idx, i) => {
      if (rule.alternativeValues) {
        result[idx] = rule.alternativeValues[i];
      }
    });
    return result;
  };

  const targetValues = getTargetValues(rule, city, district);
  
  for (let i = 0; i < rule.points.length - 1; i++) {
    if (distance <= rule.points[i]) return targetValues[i];
    if (distance < rule.points[i+1]) {
      return interpolate(distance, rule.points[i], targetValues[i], rule.points[i+1], targetValues[i+1]);
    }
  }
  
  return targetValues[targetValues.length - 1];
};

export const NEAR_FAULT_S1M_TABLE: NearFaultData[] = [
  {
    faults: ['新城斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.74, 0.66, 0.61, 0.55, 0.55, 0.55, 0.55, 0.55],
    splitIndices: [4, 5, 6, 7],
    alternativeValues: [0.50, 0.50, 0.50, 0.50],
    alternativeDistricts: ['桃園市-龍潭區']
  },
  {
    faults: ['獅潭斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.78, 0.74, 0.69, 0.64, 0.60, 0.55, 0.55, 0.55],
    splitIndices: [6, 7],
    alternativeValues: [0.50, 0.50],
    alternativeDistricts: ['新竹縣-五峰鄉', '苗栗縣-泰安鄉']
  },
  {
    faults: ['三義斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.74, 0.66, 0.61, 0.55, 0.55, 0.55, 0.55, 0.55],
    splitIndices: [4, 5, 6, 7],
    alternativeValues: [0.50, 0.50, 0.50, 0.50],
    alternativeDistricts: ['苗栗縣-通霄鎮']
  },
  {
    faults: ['大甲斷層全段', '鐵砧山斷層', '彰化斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.83, 0.75, 0.69, 0.65, 0.62, 0.59, 0.55, 0.55],
    splitIndices: [7],
    alternativeValues: [0.50],
    alternativeDistricts: ['苗栗縣-通霄鎮', '彰化縣-鹿港鎮', '彰化縣-溪湖鎮', '彰化縣-福興鄉', '彰化縣-埤頭鄉', '彰化縣-埔鹽鄉', '雲林縣-西螺鎮']
  },
  {
    faults: ['屯子腳斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.78, 0.74, 0.69, 0.64, 0.60, 0.55, 0.55, 0.55],
    splitIndices: [6, 7],
    alternativeValues: [0.50, 0.50],
    alternativeDistricts: ['苗栗縣-通霄鎮']
  },
  {
    faults: ['車籠埔斷層全段'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.83, 0.80, 0.76, 0.70, 0.66, 0.61, 0.55, 0.55],
    splitIndices: [7],
    alternativeValues: [0.50],
    alternativeDistricts: ['苗栗縣-泰安鄉', '臺中市-和平區']
  },
  {
    faults: ['大茅埔-雙冬斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.83, 0.76, 0.70, 0.65, 0.62, 0.59, 0.55, 0.55],
    splitIndices: [7],
    alternativeValues: [0.50],
    alternativeDistricts: ['苗栗縣-泰安鄉', '臺中市-和平區', '南投縣-埔里鎮', '南投縣-魚池鄉', '南投縣-信義鄉']
  },
  {
    faults: ['梅山斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.81, 0.76, 0.69, 0.62, 0.55, 0.55, 0.55, 0.55],
    splitIndices: [5, 6, 7],
    alternativeValues: [0.50, 0.50, 0.50],
    alternativeDistricts: ['雲林縣-斗南鎮', '雲林縣-大埤鄉', '嘉義縣-新港鄉', '嘉義縣-太保市']
  },
  {
    faults: ['大尖山斷層', '觸口斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.78, 0.75, 0.69, 0.62, 0.55, 0.55, 0.55, 0.55],
    splitIndices: [5, 6, 7],
    alternativeValues: [0.50, 0.50, 0.50],
    alternativeDistricts: ['嘉義縣-水上鄉', '嘉義縣-阿里山鄉']
  },
  {
    faults: ['六甲斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.69, 0.61, 0.55, 0.55, 0.55, 0.55, 0.55, 0.55],
  },
  {
    faults: ['新化斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.72, 0.65, 0.59, 0.55, 0.55, 0.55, 0.55, 0.55],
    splitIndices: [4, 5, 6, 7],
    alternativeValues: [0.50, 0.50, 0.50, 0.50],
    alternativeDistricts: ['臺南市-大內區', '臺南市-善化區', '臺南市-歸仁區', '臺南市-關廟區']
  },
  {
    faults: ['旗山斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.74, 0.66, 0.61, 0.55, 0.55, 0.55, 0.55, 0.55],
    splitIndices: [4, 5, 6, 7],
    alternativeValues: [0.50, 0.50, 0.50, 0.50],
    alternativeDistricts: ['高雄市-左營區', '高雄市-三民區', '高雄市-大樹區', '高雄市-鳥松區', '高雄市-岡山區', '高雄市-美濃區', '高雄市-杉林區', '高雄市-內門區', '屏東縣-里港鄉']
  },
  {
    faults: ['米崙斷層', '嶺頂斷層', '瑞穗斷層', '玉里斷層', '池上斷層', '鹿野斷層', '利吉斷層'],
    points: [1, 3, 5, 7, 9, 11, 13, 14],
    values: [0.87, 0.83, 0.76, 0.70, 0.66, 0.61, 0.55, 0.55],
  }
];

export const getNearFaultS1M = (fault: string, distance: number, city: string, district: string): number | null => {
  const rule = NEAR_FAULT_S1M_TABLE.find(r => r.faults.some(f => fault.includes(f)));
  if (!rule) return null;

  const getTargetValues = (rule: NearFaultData, city: string, district: string): number[] => {
    const cityDist = `${city}-${district}`;
    if (!rule.alternativeValues || !rule.alternativeDistricts?.includes(cityDist)) {
      return rule.values;
    }
    
    const result = [...rule.values];
    rule.splitIndices?.forEach((idx, i) => {
      if (rule.alternativeValues) {
        result[idx] = rule.alternativeValues[i];
      }
    });
    return result;
  };

  const targetValues = getTargetValues(rule, city, district);
  
  for (let i = 0; i < rule.points.length - 1; i++) {
    if (distance <= rule.points[i]) return targetValues[i];
    if (distance < rule.points[i+1]) {
      return interpolate(distance, rule.points[i], targetValues[i], rule.points[i+1], targetValues[i+1]);
    }
  }
  
  return targetValues[targetValues.length - 1];
};

// Table 2-4(a) Fa
export const getFa = (Ss: number, siteClass: SiteClass): number => {
  // Breakpoints: 0.5, 0.6, 0.7, 0.8, 0.9
  if (siteClass === SiteClass.HARD) return 1.0;
  
  if (siteClass === SiteClass.MEDIUM) {
    if (Ss <= 0.6) return 1.1;
    if (Ss >= 0.7) return 1.0;
    return interpolate(Ss, 0.6, 1.1, 0.7, 1.0);
  }
  
  if (siteClass === SiteClass.SOFT) {
    if (Ss <= 0.6) return 1.2;
    if (Ss >= 0.8) return 1.0;
    if (Ss <= 0.7) return interpolate(Ss, 0.6, 1.2, 0.7, 1.1);
    return interpolate(Ss, 0.7, 1.1, 0.8, 1.0);
  }
  return 1.0;
};

// Table 2-4(b) Fv
export const getFv = (S1: number, siteClass: SiteClass): number => {
  // Breakpoints: 0.3, 0.35, 0.4, 0.45, 0.5
  if (siteClass === SiteClass.HARD) return 1.0;

  if (siteClass === SiteClass.MEDIUM) {
    if (S1 <= 0.3) return 1.5;
    if (S1 >= 0.5) return 1.1;
    // Interpolation chain based on Table 2-4(b)
    // 0.3->1.5, 0.35->1.4, 0.4->1.3, 0.45->1.2, 0.5->1.1
    // Simplifies to linear equation y = -2x + 2.1
    return interpolate(S1, 0.3, 1.5, 0.5, 1.1);
  }

  if (siteClass === SiteClass.SOFT) {
    if (S1 <= 0.3) return 1.8;
    if (S1 >= 0.5) return 1.4;
     // 0.3->1.8, 0.35->1.7, ... 0.5->1.4
     // y = -2x + 2.4
    return interpolate(S1, 0.3, 1.8, 0.5, 1.4);
  }

  return 1.0;
};