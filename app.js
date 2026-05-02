/* ============================================================
   FLOODWATCH MY — WEBSITE v5
   Multi-tab navigation, full accessibility, i18n, trust layer
   ============================================================ */

/* ============================================================
   I18N — TRANSLATIONS
   ============================================================ */
const TRANSLATIONS = {
  en: {
    // Topbar / Nav
    addPlace: 'Add Place', refresh: 'Refresh data',
    viewToggleToMobile: 'Switch to mobile view', viewToggleToDesktop: 'Switch to desktop view',
    settingsView: 'Display', viewDesktop: 'Desktop view', viewMobile: 'Mobile view',
    navPlaces: 'My Places', navAlerts: 'Alerts', navEmergency: 'Emergency', navSettings: 'Settings',
    // Feed status
    feedMET: 'MET Malaysia', feedJPS: 'Public Infobanjir (JPS)',
    feedDisclaimer: 'Support tool only — always follow official emergency instructions',
    feedLive: 'Live', feedStale: 'Delayed', feedError: 'Offline', feedAgo: (m) => `${m}m ago`,
    // Summary bar
    allClear: 'All Clear', allClearSub: 'No active warnings across your saved places',
    activeWarnings: 'Active Warnings',
    placeMonitored: (n) => `${n} place${n !== 1 ? 's' : ''} monitored`,
    lblUrgent: 'High Urgency', lblFlood: 'Flood Alert', lblWatch: 'Watch',
    viewUrgent: 'View urgent place',
    // Notif banner
    notifTitle: 'Enable browser alerts', notifDesc: 'get notified when flood risk changes at your saved places', notifBtn: 'Enable',
    // Empty state
    emptyTitle: 'No places yet',
    emptyDesc: 'Add your home, office, or family locations to monitor weather and flood alerts in real time.',
    addFirstPlace: 'Add Your First Place',
    // Alerts tab
    alertsDesc: 'Risk changes detected at your saved places',
    alertsEmpty: 'No alerts yet',
    alertsEmptyDesc: 'Risk changes at your saved places will appear here.',
    // Emergency tab
    emergencyDesc: 'Official Malaysian emergency contacts and resources',
    emgTierCritical: 'Life Emergency',
    emgTierDisaster: 'Flood & Disaster',
    emgTierWeather: 'Weather & Technical',
    emgTierLinks: 'Key Resources',
    emg999Name: 'Police / Fire / Ambulance / APM',
    emg999Desc: 'Main emergency line · MERS 999 system',
    emg112Name: 'Mobile Emergency',
    emg112Desc: 'Works without credit or SIM · roaming OK',
    emgNADMADesc: 'National Disaster Control Centre · 24hr',
    emgNWGOCName: 'Weather & Earthquake Hotline',
    emgNWGOCDesc: 'NWGOC — 24hr technical inquiries',
    emgLinkPPS: 'Find nearest evacuation centre (PPS)',
    emgLinkJPS: 'Live river levels — Public Infobanjir (JPS)',
    emgLinkNADMA: 'NADMA official situation reports',
    disclaimer: 'FloodWatch MY is a community support tool using official Malaysian government data. It does not replace official emergency instructions. During a flood emergency, always follow directions from NADMA, local authorities, and emergency services.',
    // Settings tab
    settingsLang: 'Language', settingsNotif: 'Browser Notifications', settingsAbout: 'About', settingsDanger: 'Data',
    clearData: 'Clear all saved places',
    aboutText: 'FloodWatch MY uses live data from MET Malaysia (weather warnings) and Public Infobanjir/JPS (river gauge stations). MET warnings refresh every 5 minutes; JPS station readings update at varying intervals (typically every 15 minutes). Elevation data from Open-Meteo. This tool is for informational purposes only.',
    notifGranted: 'Browser alerts are enabled.',
    notifDenied: 'Notifications are blocked in your browser settings.',
    // Footer
    footerCopy: '© 2026 FloodWatch MY — Data from official Malaysian government sources only',
    // Modal
    modalTitle: 'Add a Place', modalSub: 'Save a location to monitor for weather and flood alerts',
    formType: 'Type', formName: 'Name *', formAddress: 'Address *',
    formDistrict: 'District *', formState: 'State *', formLat: 'Latitude', formLng: 'Longitude',
    coordAdvanced: 'Advanced: Coordinates (optional)',
    coordHint: 'Coordinates used for nearest river gauge lookup. KL centre is prefilled.',
    namePh: 'e.g. Home, Office', addressPh: 'e.g. Jalan Utama 12, PJ', districtPh: 'e.g. Petaling',
    typeHome: 'Home', typeOffice: 'Office', typeFamily: 'Family', typeSchool: 'School', typeOther: 'Other',
    cancel: 'Cancel', saveMonitor: 'Save & Monitor',
    errName: 'Please enter a name.', errAddress: 'Please enter an address.', errDistrict: 'Please enter a district.',
    // Confirm modal
    confirmTitle: 'Remove this place?',
    confirmDesc: 'This location will no longer be monitored for weather and flood alerts.',
    confirmOk: 'Remove Place',
    // Drawer
    floodStatus: 'Flood Status', weatherWarnings: 'Weather Warnings (MET)',
    nearestRivers: 'Nearest Rivers', whatToDo: 'What To Do Now',
    checkLiveWater: 'Check live water levels', awayLabel: 'away',
    removePlace: 'Remove this place',
    updatedLabel: 'Updated',
    // Risk labels
    riskNormal: 'Normal', riskWatch: 'Watch', riskFlood: 'Flood Alert', riskUrgent: 'High Urgency',
    // Toasts
    toastRefreshed: 'Live MET warnings refreshed',
    toastOffline: 'Refreshed (offline — last known data)',
    toastAlertsEnabled: 'Alerts enabled',
    toastNotifBlocked: 'Notifications blocked — enable in browser settings',
    toastNotifUnsupported: 'Notifications not supported',
    toastPlaceRemoved: 'Place removed',
    toastDataCleared: 'All data cleared',
    // Drawer actions
    act_normal: [
      { text: 'Check live flood station levels near you',           url: 'https://publicinfobanjir.water.gov.my/aras-air/data-paras-air/?state=SEL&lang=en' },
      { text: 'Find your nearest evacuation centre (PPS)',          url: 'https://infobencanajkmv2.jkm.gov.my/landing/' },
      { text: 'Save emergency numbers: 999 (Police/Fire/Ambulance), 03-8064 2400 (NADMA NDCC)' },
    ],
    act_watch: [
      { text: 'Monitor live MET Malaysia weather warnings',         url: 'https://www.met.gov.my/data/IWR30002.html' },
      { text: 'Check river water levels at Public Infobanjir',      url: 'https://publicinfobanjir.water.gov.my/aras-air/data-paras-air/?state=SEL&lang=en' },
      { text: 'Clear drains, gutters, and downpipes near your property' },
      { text: 'Know your evacuation route to nearest PPS',          url: 'https://infobencanajkmv2.jkm.gov.my/landing/' },
    ],
    act_flood: [
      { text: 'Monitor water levels — check Public Infobanjir now', url: 'https://publicinfobanjir.water.gov.my/aras-air/data-paras-air/?state=SEL&lang=en' },
      { text: 'Prepare emergency bag: IC, cash, medications, phone charger' },
      { text: 'Find your nearest Pusat Pemindahan Sementara (PPS)', url: 'https://infobencanajkmv2.jkm.gov.my/landing/' },
      { text: 'Avoid driving — check road conditions on Waze',      url: 'https://www.waze.com/live-map' },
      { text: 'Follow NADMA official updates',                      url: 'https://www.nadma.gov.my' },
    ],
    act_urgent: [
      { text: 'Call 999 (Police/Fire/Ambulance) immediately',       url: 'tel:999' },
      { text: 'Call NADMA NDCC 24-hour: 03-8064 2400',             url: 'tel:0380642400' },
      { text: 'Move to higher ground — do NOT cross flooded roads' },
      { text: 'NADMA live situation report',                        url: 'https://www.nadma.gov.my' },
      { text: 'JPS real-time flood map',                           url: 'https://publicinfobanjir.water.gov.my' },
    ],
    // Elevation
    elevLow:  (m) => `Your location is at ${m}m elevation (low-lying). Higher flood exposure during heavy rain.`,
    elevSafe: (m) => `Your location is at ${m}m elevation.`,
    // No data / loading
    loading: 'Loading…', noWarnings: 'No active MET Malaysia warnings.',
    floodClear: 'No active MET Malaysia warnings. Check live river levels at publicinfobanjir.water.gov.my.',
    allClearDetail: 'All clear. No active MET Malaysia warnings for this location.',
    urgentPlain: (h) => `Urgent: ${h} active for this area. Take immediate precautions.`,
    watchPlain:  (h) => `Watch: ${h} active for this area. Monitor conditions closely.`,
    floodPlain:  (h) => `Flood Alert: ${h} active for this area. Follow official guidance.`,
    floodSummaryFmt: (h, t2) => `MET Malaysia: ${h}${t2 ? ' until ' + t2 : ''}. Check river levels at publicinfobanjir.water.gov.my.`,
    openLink: 'Open',
    justNow: 'just now', secondsAgo: (s) => `${s}s ago`, minutesAgo: (m) => `${m}m ago`, hoursAgo: (h) => `${h}h ago`,
    saving: 'Saving…',
    // Source labels
    srcMET: 'MET Malaysia', srcJPS: 'Public Infobanjir',
    // Onboarding
    obTitle0: 'Welcome to FloodWatch MY', obDesc0: 'Monitor flood and weather alerts for your saved locations using live Malaysian government data.',
    obTitle1: 'What does "Watch" mean?', obDesc1: 'MET Malaysia has issued a weather warning for this area — such as heavy rain or thunderstorms. Monitor conditions and prepare. No immediate danger yet.',
    obTitle2: 'What does "Flood Alert" mean?', obDesc2: 'A flood-specific warning is active. Check water levels at Public Infobanjir. Know your nearest evacuation centre (PPS) and be ready to move.',
    obTitle3: 'What does "High Urgency" mean?', obDesc3: 'Immediate risk. Call 999 if in danger. Move to higher ground. Do not drive through flooded roads. Follow NADMA official guidance.',
    obTitle4: 'Nearest river gauges', obDesc4: 'FloodWatch shows the closest JPS river gauge stations to your saved places. Tap "Check live water levels" to see real-time readings on Public Infobanjir.',
    obSkip: 'Skip', obNext: 'Next', obDone: 'Done',
  },
  bm: {
    addPlace: 'Tambah Lokasi', refresh: 'Segarkan data',
    viewToggleToMobile: 'Tukar ke paparan mudah alih', viewToggleToDesktop: 'Tukar ke paparan desktop',
    settingsView: 'Paparan', viewDesktop: 'Paparan desktop', viewMobile: 'Paparan mudah alih',
    navPlaces: 'Lokasi Saya', navAlerts: 'Amaran', navEmergency: 'Kecemasan', navSettings: 'Tetapan',
    feedMET: 'MET Malaysia', feedJPS: 'Public Infobanjir (JPS)',
    feedDisclaimer: 'Alat sokongan sahaja — sentiasa ikut arahan kecemasan rasmi',
    feedLive: 'Langsung', feedStale: 'Tertangguh', feedError: 'Luar Talian', feedAgo: (m) => `${m}min lalu`,
    allClear: 'Selamat', allClearSub: 'Tiada amaran aktif di lokasi anda',
    activeWarnings: 'Amaran Aktif',
    placeMonitored: (n) => `${n} lokasi dipantau`,
    lblUrgent: 'Kritikal', lblFlood: 'Amaran Banjir', lblWatch: 'Pantau',
    viewUrgent: 'Lihat lokasi kritikal',
    notifTitle: 'Aktifkan amaran penyemak imbas', notifDesc: 'dapatkan pemberitahuan apabila risiko banjir berubah', notifBtn: 'Aktifkan',
    emptyTitle: 'Tiada lokasi lagi',
    emptyDesc: 'Tambah rumah, pejabat atau lokasi keluarga anda untuk memantau amaran cuaca dan banjir secara langsung.',
    addFirstPlace: 'Tambah Lokasi Pertama',
    alertsDesc: 'Perubahan risiko di lokasi yang dipantau',
    alertsEmpty: 'Tiada amaran lagi',
    alertsEmptyDesc: 'Perubahan risiko di lokasi anda akan dipaparkan di sini.',
    emergencyDesc: 'Kenalan kecemasan dan sumber rasmi Malaysia',
    emgTierCritical: 'Kecemasan Jiwa',
    emgTierDisaster: 'Banjir & Bencana',
    emgTierWeather: 'Cuaca & Teknikal',
    emgTierLinks: 'Sumber Utama',
    emg999Name: 'Polis / Bomba / Ambulans / APM',
    emg999Desc: 'Talian kecemasan utama · sistem MERS 999',
    emg112Name: 'Kecemasan Mudah Alih',
    emg112Desc: 'Boleh digunakan tanpa kredit atau SIM',
    emgNADMADesc: 'Pusat Kawalan Bencana Negara · 24 jam',
    emgNWGOCName: 'Talian Panas Cuaca & Gempa Bumi',
    emgNWGOCDesc: 'NWGOC — pertanyaan teknikal 24 jam',
    emgLinkPPS: 'Cari pusat pemindahan (PPS) terdekat',
    emgLinkJPS: 'Aras sungai langsung — Public Infobanjir (JPS)',
    emgLinkNADMA: 'Laporan situasi rasmi NADMA',
    disclaimer: 'FloodWatch MY adalah alat sokongan komuniti menggunakan data rasmi kerajaan Malaysia. Ia tidak menggantikan arahan kecemasan rasmi. Semasa bencana banjir, sentiasa ikuti arahan NADMA, pihak berkuasa tempatan dan perkhidmatan kecemasan.',
    settingsLang: 'Bahasa', settingsNotif: 'Pemberitahuan Penyemak Imbas', settingsAbout: 'Tentang', settingsDanger: 'Data',
    clearData: 'Padam semua lokasi tersimpan',
    aboutText: 'FloodWatch MY menggunakan data langsung daripada MET Malaysia (amaran cuaca) dan Public Infobanjir/JPS (stesen tolok sungai). Amaran MET disegarkan setiap 5 minit; bacaan stesen JPS dikemas kini pada selang masa yang berbeza (lazimnya setiap 15 minit). Data ketinggian daripada Open-Meteo. Alat ini adalah untuk tujuan maklumat sahaja.',
    notifGranted: 'Amaran penyemak imbas diaktifkan.',
    notifDenied: 'Pemberitahuan disekat dalam tetapan penyemak imbas anda.',
    footerCopy: '© 2026 FloodWatch MY — Data daripada sumber rasmi kerajaan Malaysia sahaja',
    modalTitle: 'Tambah Lokasi', modalSub: 'Simpan lokasi untuk memantau amaran cuaca dan banjir',
    formType: 'Jenis', formName: 'Nama *', formAddress: 'Alamat *',
    formDistrict: 'Daerah *', formState: 'Negeri *', formLat: 'Latitud', formLng: 'Longitud',
    coordAdvanced: 'Lanjutan: Koordinat (pilihan)',
    coordHint: 'Koordinat digunakan untuk carian stesen sungai terdekat. Pusat KL telah diisi.',
    namePh: 'cth. Rumah, Pejabat', addressPh: 'cth. Jalan Utama 12, PJ', districtPh: 'cth. Petaling',
    typeHome: 'Rumah', typeOffice: 'Pejabat', typeFamily: 'Keluarga', typeSchool: 'Sekolah', typeOther: 'Lain-lain',
    cancel: 'Batal', saveMonitor: 'Simpan & Pantau',
    errName: 'Sila masukkan nama.', errAddress: 'Sila masukkan alamat.', errDistrict: 'Sila masukkan daerah.',
    confirmTitle: 'Buang lokasi ini?',
    confirmDesc: 'Lokasi ini tidak akan lagi dipantau untuk amaran cuaca dan banjir.',
    confirmOk: 'Buang Lokasi',
    floodStatus: 'Status Banjir', weatherWarnings: 'Amaran Cuaca (MET)',
    nearestRivers: 'Sungai Terdekat', whatToDo: 'Apa Yang Perlu Dilakukan',
    checkLiveWater: 'Semak aras air terkini', awayLabel: 'jauh',
    removePlace: 'Buang lokasi ini',
    updatedLabel: 'Dikemas kini',
    riskNormal: 'Normal', riskWatch: 'Pantau', riskFlood: 'Amaran Banjir', riskUrgent: 'Kritikal',
    toastRefreshed: 'Amaran MET disegarkan',
    toastOffline: 'Disegarkan (luar talian — data terakhir)',
    toastAlertsEnabled: 'Amaran diaktifkan',
    toastNotifBlocked: 'Pemberitahuan disekat — aktifkan dalam tetapan penyemak imbas',
    toastNotifUnsupported: 'Pemberitahuan tidak disokong',
    toastPlaceRemoved: 'Lokasi dibuang',
    toastDataCleared: 'Semua data dipadam',
    act_normal: [
      { text: 'Semak aras stesen banjir berhampiran anda',          url: 'https://publicinfobanjir.water.gov.my/aras-air/data-paras-air/?state=SEL&lang=en' },
      { text: 'Cari pusat pemindahan (PPS) terdekat',              url: 'https://infobencanajkmv2.jkm.gov.my/landing/' },
      { text: 'Simpan nombor kecemasan: 999 (Polis/Bomba/Ambulans), 03-8064 2400 (NADMA NDCC)' },
    ],
    act_watch: [
      { text: 'Pantau amaran cuaca terkini MET Malaysia',           url: 'https://www.met.gov.my/data/IWR30002.html' },
      { text: 'Semak aras sungai di Public Infobanjir',             url: 'https://publicinfobanjir.water.gov.my/aras-air/data-paras-air/?state=SEL&lang=en' },
      { text: 'Bersihkan longkang dan parit berhampiran rumah anda' },
      { text: 'Kenali laluan pemindahan ke PPS terdekat',           url: 'https://infobencanajkmv2.jkm.gov.my/landing/' },
    ],
    act_flood: [
      { text: 'Pantau aras air — semak Public Infobanjir sekarang', url: 'https://publicinfobanjir.water.gov.my/aras-air/data-paras-air/?state=SEL&lang=en' },
      { text: 'Sediakan beg kecemasan: IC, wang tunai, ubatan, pengecas telefon' },
      { text: 'Cari Pusat Pemindahan Sementara (PPS) terdekat',    url: 'https://infobencanajkmv2.jkm.gov.my/landing/' },
      { text: 'Elak memandu — semak keadaan jalan di Waze',        url: 'https://www.waze.com/live-map' },
      { text: 'Ikuti kemas kini rasmi NADMA',                      url: 'https://www.nadma.gov.my' },
    ],
    act_urgent: [
      { text: 'Hubungi 999 (Polis/Bomba/Ambulans) segera',         url: 'tel:999' },
      { text: 'Hubungi NADMA NDCC 24 jam: 03-8064 2400',          url: 'tel:0380642400' },
      { text: 'Berpindah ke kawasan lebih tinggi — JANGAN merentas jalan banjir' },
      { text: 'Laporan situasi langsung NADMA',                    url: 'https://www.nadma.gov.my' },
      { text: 'Peta banjir masa nyata JPS',                       url: 'https://publicinfobanjir.water.gov.my' },
    ],
    elevLow:  (m) => `Lokasi anda berada pada ketinggian ${m}m (rendah). Risiko banjir lebih tinggi semasa hujan lebat.`,
    elevSafe: (m) => `Lokasi anda berada pada ketinggian ${m}m.`,
    loading: 'Memuatkan…', noWarnings: 'Tiada amaran MET Malaysia aktif.',
    floodClear: 'Tiada amaran MET aktif. Semak aras sungai di publicinfobanjir.water.gov.my.',
    allClearDetail: 'Selamat. Tiada amaran MET Malaysia aktif untuk lokasi ini.',
    urgentPlain: (h) => `Kritikal: ${h} aktif di kawasan ini. Ambil tindakan segera.`,
    watchPlain:  (h) => `Pantau: ${h} aktif di kawasan ini. Sentiasa peka keadaan semasa.`,
    floodPlain:  (h) => `Amaran Banjir: ${h} aktif di kawasan ini. Ikuti arahan rasmi.`,
    floodSummaryFmt: (h, t2) => `MET Malaysia: ${h}${t2 ? ' sehingga ' + t2 : ''}. Semak aras sungai di publicinfobanjir.water.gov.my.`,
    openLink: 'Buka', srcMET: 'MET Malaysia', srcJPS: 'Public Infobanjir',
    justNow: 'baru sahaja', secondsAgo: (s) => `${s}s lalu`, minutesAgo: (m) => `${m}min lalu`, hoursAgo: (h) => `${h}j lalu`,
    saving: 'Menyimpan…',
    obTitle0: 'Selamat datang ke FloodWatch MY', obDesc0: 'Pantau amaran banjir dan cuaca untuk lokasi tersimpan anda menggunakan data langsung kerajaan Malaysia.',
    obTitle1: 'Apakah maksud "Pantau"?', obDesc1: 'MET Malaysia telah mengeluarkan amaran cuaca untuk kawasan ini — seperti hujan lebat atau ribut petir. Pantau keadaan dan bersiap sedia. Tiada bahaya segera lagi.',
    obTitle2: 'Apakah maksud "Amaran Banjir"?', obDesc2: 'Amaran khusus banjir sedang aktif. Semak aras air di Public Infobanjir. Kenali PPS terdekat anda dan bersedia untuk berpindah.',
    obTitle3: 'Apakah maksud "Kritikal"?', obDesc3: 'Risiko segera. Hubungi 999 jika dalam bahaya. Berpindah ke kawasan lebih tinggi. Jangan memandu melalui jalan banjir. Ikuti panduan rasmi NADMA.',
    obTitle4: 'Tolok sungai terdekat', obDesc4: 'FloodWatch menunjukkan stesen tolok sungai JPS yang paling dekat dengan lokasi tersimpan anda. Ketik "Semak aras air terkini" untuk membaca bacaan masa nyata di Public Infobanjir.',
    obSkip: 'Langkau', obNext: 'Seterusnya', obDone: 'Selesai',
  },
  zh: {
    addPlace: '添加地点', refresh: '刷新数据',
    viewToggleToMobile: '切换到移动视图', viewToggleToDesktop: '切换到桌面视图',
    settingsView: '显示方式', viewDesktop: '桌面版', viewMobile: '移动版',
    navPlaces: '我的地点', navAlerts: '警报', navEmergency: '紧急联系', navSettings: '设置',
    feedMET: 'MET Malaysia', feedJPS: 'Public Infobanjir (JPS)',
    feedDisclaimer: '仅供参考工具 — 请始终遵循官方紧急指示',
    feedLive: '实时', feedStale: '延迟', feedError: '离线', feedAgo: (m) => `${m}分钟前`,
    allClear: '一切正常', allClearSub: '您的已保存地点均无活跃警告',
    activeWarnings: '活跃警报',
    placeMonitored: (n) => `共监控 ${n} 个地点`,
    lblUrgent: '高度紧急', lblFlood: '洪水警报', lblWatch: '关注',
    viewUrgent: '查看紧急地点',
    notifTitle: '启用浏览器提醒', notifDesc: '当您已保存地点的洪水风险变化时收到通知', notifBtn: '启用',
    emptyTitle: '暂无地点',
    emptyDesc: '添加您的家、办公室或家人位置，以实时监控天气和洪水警报。',
    addFirstPlace: '添加第一个地点',
    alertsDesc: '您已保存地点检测到的风险变化',
    alertsEmpty: '暂无警报',
    alertsEmptyDesc: '您已保存地点的风险变化将显示在此处。',
    emergencyDesc: '马来西亚官方紧急联系方式和资源',
    emgTierCritical: '生命紧急',
    emgTierDisaster: '洪水与灾难',
    emgTierWeather: '天气与技术',
    emgTierLinks: '重要资源',
    emg999Name: '警察 / 消防 / 救护车 / APM',
    emg999Desc: '主要紧急热线 · MERS 999系统',
    emg112Name: '手机紧急呼叫',
    emg112Desc: '无需话费或SIM卡 · 漫游可用',
    emgNADMADesc: '国家灾难控制中心 · 24小时',
    emgNWGOCName: '天气与地震热线',
    emgNWGOCDesc: 'NWGOC — 24小时技术查询',
    emgLinkPPS: '查找最近的疏散中心 (PPS)',
    emgLinkJPS: '实时水位 — Public Infobanjir (JPS)',
    emgLinkNADMA: 'NADMA官方情况报告',
    disclaimer: 'FloodWatch MY 是使用马来西亚官方政府数据的社区支持工具。它不能替代官方紧急指示。在洪灾紧急情况下，请始终遵循NADMA、地方当局和紧急服务的指示。',
    settingsLang: '语言', settingsNotif: '浏览器通知', settingsAbout: '关于', settingsDanger: '数据',
    clearData: '清除所有已保存地点',
    aboutText: 'FloodWatch MY 使用来自MET Malaysia（天气警告）和Public Infobanjir/JPS（河流水位站）的实时数据。MET警告每5分钟刷新一次；JPS站点读数更新间隔不固定（通常每15分钟）。海拔数据来自Open-Meteo。本工具仅供参考。',
    notifGranted: '浏览器提醒已启用。',
    notifDenied: '通知在您的浏览器设置中被屏蔽。',
    footerCopy: '© 2026 FloodWatch MY — 数据仅来自马来西亚官方政府来源',
    modalTitle: '添加地点', modalSub: '保存位置以监控天气和洪水警报',
    formType: '类型', formName: '名称 *', formAddress: '地址 *',
    formDistrict: '县区 *', formState: '州属 *', formLat: '纬度', formLng: '经度',
    coordAdvanced: '高级：坐标（可选）',
    coordHint: '坐标用于查找最近的河流水位站。已预填吉隆坡中心坐标。',
    namePh: '例：家、办公室', addressPh: '例：Jalan Utama 12, PJ', districtPh: '例：Petaling',
    typeHome: '家', typeOffice: '办公室', typeFamily: '家人', typeSchool: '学校', typeOther: '其他',
    cancel: '取消', saveMonitor: '保存并监控',
    errName: '请输入名称。', errAddress: '请输入地址。', errDistrict: '请输入县区。',
    confirmTitle: '移除此地点？',
    confirmDesc: '此位置将不再监控天气和洪水警报。',
    confirmOk: '移除地点',
    floodStatus: '洪水状态', weatherWarnings: '天气警告 (MET)',
    nearestRivers: '最近河流', whatToDo: '现在该怎么做',
    checkLiveWater: '查看实时水位', awayLabel: '',
    removePlace: '移除此地点',
    updatedLabel: '更新于',
    riskNormal: '正常', riskWatch: '关注', riskFlood: '洪水警报', riskUrgent: '高度紧急',
    toastRefreshed: '已刷新MET Malaysia实时警告',
    toastOffline: '已刷新（离线 — 显示最后已知数据）',
    toastAlertsEnabled: '提醒已启用',
    toastNotifBlocked: '通知被屏蔽 — 请在浏览器设置中启用',
    toastNotifUnsupported: '不支持通知',
    toastPlaceRemoved: '地点已移除',
    toastDataCleared: '所有数据已清除',
    act_normal: [
      { text: '查看附近实时洪水站水位',                             url: 'https://publicinfobanjir.water.gov.my/aras-air/data-paras-air/?state=SEL&lang=en' },
      { text: '查找最近的疏散中心 (PPS)',                          url: 'https://infobencanajkmv2.jkm.gov.my/landing/' },
      { text: '保存紧急号码：999（警察/消防/救护车），03-8064 2400（NADMA NDCC）' },
    ],
    act_watch: [
      { text: '监控MET Malaysia实时天气警告',                      url: 'https://www.met.gov.my/data/IWR30002.html' },
      { text: '在Public Infobanjir查看河流水位',                   url: 'https://publicinfobanjir.water.gov.my/aras-air/data-paras-air/?state=SEL&lang=en' },
      { text: '清理您房产附近的排水沟和落水管' },
      { text: '了解前往最近PPS的疏散路线',                         url: 'https://infobencanajkmv2.jkm.gov.my/landing/' },
    ],
    act_flood: [
      { text: '监控水位 — 立即查看Public Infobanjir',              url: 'https://publicinfobanjir.water.gov.my/aras-air/data-paras-air/?state=SEL&lang=en' },
      { text: '准备紧急包：身份证、现金、药物、手机充电器' },
      { text: '查找最近的临时安置中心 (PPS)',                       url: 'https://infobencanajkmv2.jkm.gov.my/landing/' },
      { text: '避免驾车 — 在Waze上查看道路状况',                   url: 'https://www.waze.com/live-map' },
      { text: '关注NADMA官方更新',                                 url: 'https://www.nadma.gov.my' },
    ],
    act_urgent: [
      { text: '立即拨打999（警察/消防/救护车）',                   url: 'tel:999' },
      { text: '拨打NADMA NDCC 24小时：03-8064 2400',             url: 'tel:0380642400' },
      { text: '转移至高地 — 切勿穿越洪水道路' },
      { text: 'NADMA实时情况报告',                                 url: 'https://www.nadma.gov.my' },
      { text: 'JPS实时洪水地图',                                  url: 'https://publicinfobanjir.water.gov.my' },
    ],
    elevLow:  (m) => `您的位置海拔 ${m}米（低洼地区）。暴雨期间洪水风险较高。`,
    elevSafe: (m) => `您的位置海拔 ${m}米。`,
    loading: '加载中…', noWarnings: '暂无MET Malaysia活跃警告。',
    floodClear: '暂无MET活跃警告。请在publicinfobanjir.water.gov.my查看实时水位。',
    allClearDetail: '一切正常。此地点暂无MET Malaysia活跃警告。',
    urgentPlain: (h) => `高度紧急：${h} 正影响该区域。请立即采取行动。`,
    watchPlain:  (h) => `关注：${h} 正影响该区域。请密切留意情况。`,
    floodPlain:  (h) => `洪水警报：${h} 正影响该区域。请遵循官方指引。`,
    floodSummaryFmt: (h, t2) => `MET Malaysia：${h}${t2 ? '，持续至 ' + t2 : ''}。请在publicinfobanjir.water.gov.my查看水位。`,
    openLink: '打开', srcMET: 'MET Malaysia', srcJPS: 'Public Infobanjir',
    justNow: '刚刚', secondsAgo: (s) => `${s}秒前`, minutesAgo: (m) => `${m}分钟前`, hoursAgo: (h) => `${h}小时前`,
    saving: '保存中…',
    obTitle0: '欢迎使用FloodWatch MY', obDesc0: '使用马来西亚政府实时数据，监控您已保存位置的洪水和天气警报。',
    obTitle1: '"关注"是什么意思？', obDesc1: 'MET Malaysia已对该地区发布天气警告，如暴雨或雷暴。请监控情况并做好准备。目前尚无即时危险。',
    obTitle2: '"洪水警报"是什么意思？', obDesc2: '洪水专项警告正在生效。请在Public Infobanjir查看水位。了解最近的疏散中心(PPS)并准备好转移。',
    obTitle3: '"高度紧急"是什么意思？', obDesc3: '存在即时风险。如有危险请拨打999。转移至高地。不要驾车穿越洪水道路。遵循NADMA官方指引。',
    obTitle4: '最近的河流水位站', obDesc4: 'FloodWatch显示距离您已保存地点最近的JPS河流水位站。点击"查看实时水位"以在Public Infobanjir上查看实时读数。',
    obSkip: '跳过', obNext: '下一步', obDone: '完成',
  },
};

/* ============================================================
   I18N ENGINE
   ============================================================ */
let currentLang = localStorage.getItem('fw_lang') || 'en';

function t(key, ...args) {
  const val = TRANSLATIONS[currentLang]?.[key] ?? TRANSLATIONS.en[key];
  return typeof val === 'function' ? val(...args) : (val ?? key);
}

function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('fw_lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : lang === 'bm' ? 'ms' : 'en';
  // Update topbar lang buttons
  document.querySelectorAll('.lang-btn').forEach(b => {
    const active = b.dataset.lang === lang;
    b.classList.toggle('active', active);
    b.setAttribute('aria-pressed', active);
  });
  // Update settings lang buttons
  document.querySelectorAll('.settings-lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  applyTranslations();
  // Recompute language-dependent place fields
  places.forEach(p => {
    const d = getDistrictRisk(p.district, p.state);
    p.plainLanguage  = d.plainLanguage;
    p.floodSummary   = d.floodSummary;
    p.weatherSummary = d.weatherSummary;
  });
  renderDashboard();
  renderAlerts();
  updateNotifSettingsUI();
  if (currentDetailId != null) openDetail(currentDetailId);
  // Re-apply view toggle labels in new language
  applyViewToggle(_isForcedMobile);
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.dataset.i18nTitle);
  });
}

/* ============================================================
   RISK HELPERS
   ============================================================ */
const RISK_COLORS = { normal: '#22c55e', watch: '#f59e0b', flood: '#f97316', urgent: '#ef4444' };
function RISK_LABELS(risk) {
  const map = { normal: 'riskNormal', watch: 'riskWatch', flood: 'riskFlood', urgent: 'riskUrgent' };
  return t(map[risk] || 'riskNormal');
}

/* ============================================================
   DEFAULT / SEED DATA
   ============================================================ */
let places = [
  { id: 1, name: 'Home',           type: 'home',   address: 'Jalan SS2/75, Petaling Jaya',    district: 'Petaling',     state: 'SEL', lat: 3.1073, lng: 101.6211, risk: 'normal', floodSummary: '', weatherSummary: '', plainLanguage: 'Loading…', actions: [], updatedAt: Date.now(), elevation: null },
  { id: 2, name: 'Office',         type: 'office', address: 'Menara KLCC, KLCC, KL',          district: 'Kuala Lumpur', state: 'WLH', lat: 3.1578, lng: 101.7119, risk: 'normal', floodSummary: '', weatherSummary: '', plainLanguage: 'Loading…', actions: [], updatedAt: Date.now(), elevation: null },
  { id: 3, name: "Parents' House", type: 'family', address: 'Taman Keramat, Wangsa Maju, KL', district: 'Gombak',       state: 'WLH', lat: 3.1940, lng: 101.7458, risk: 'normal', floodSummary: '', weatherSummary: '', plainLanguage: 'Loading…', actions: [], updatedAt: Date.now(), elevation: null },
];

/* ============================================================
   LOCAL STORAGE
   ============================================================ */
const LS_PLACES     = 'fw_places_v1';
const LS_ALERTS     = 'fw_alerts_v1';
const LS_NEXT_ID    = 'fw_nextId_v1';
const LS_NEXT_ALERT = 'fw_nextAlertId_v1';
const LS_ONBOARDED  = 'fw_onboarded_v1';
const LS_VIEW       = 'fw_view_v1';

const _store = (() => {
  const _s = (() => { try { return window.localStorage; } catch(e) { return null; } })();
  return {
    set: (k, v) => { try { _s && _s.setItem(k, v); } catch(e) {} },
    get: (k)    => { try { return _s ? _s.getItem(k) : null; } catch(e) { return null; } },
    del: (k)    => { try { _s && _s.removeItem(k); } catch(e) {} },
  };
})();

function lsSave() {
  _store.set(LS_PLACES,     JSON.stringify(places));
  _store.set(LS_ALERTS,     JSON.stringify(alerts));
  _store.set(LS_NEXT_ID,    String(nextId));
  _store.set(LS_NEXT_ALERT, String(nextAlertId));
}

function lsLoad() {
  try {
    const sp = _store.get(LS_PLACES);
    const sa = _store.get(LS_ALERTS);
    const si = _store.get(LS_NEXT_ID);
    const sk = _store.get(LS_NEXT_ALERT);
    if (sp) places      = JSON.parse(sp);
    if (sa) alerts      = JSON.parse(sa);
    if (si) nextId      = parseInt(si, 10);
    if (sk) nextAlertId = parseInt(sk, 10);
    return !!sp;
  } catch(e) { return false; }
}

let alerts      = [];
let nextId      = 4;
let nextAlertId = 4;
let selectedType = 'home';
let currentDetailId = null;
let currentTab = 'places';

/* ============================================================
   TAB NAVIGATION
   ============================================================ */
function switchTab(tab) {
  currentTab = tab;
  // Desktop nav
  document.querySelectorAll('.nav-tab').forEach(btn => {
    const active = btn.dataset.tab === tab;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-current', active ? 'page' : 'false');
  });
  // Mobile nav
  document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
    const active = btn.dataset.tab === tab;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-current', active ? 'page' : 'false');
  });
  // Tab panels
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.style.display = panel.id === `tab-${tab}` ? '' : 'none';
  });
  // Render content
  if (tab === 'alerts') renderAlerts();
  if (tab === 'settings') updateNotifSettingsUI();
}

/* ============================================================
   RENDER DASHBOARD (My Places tab)
   ============================================================ */
function renderDashboard() {
  renderSummaryBar();
  renderPlaceGrid();
  updateAlertBadge();
  updateFeedStatus();
}

function renderSummaryBar() {
  const sb = document.getElementById('summary-bar');
  const urgent = places.filter(p => p.risk === 'urgent').length;
  const flood  = places.filter(p => p.risk === 'flood').length;
  const watch  = places.filter(p => p.risk === 'watch').length;
  const hasAlerts = urgent + flood + watch > 0;

  if (places.length === 0) { sb.innerHTML = ''; return; }

  if (!hasAlerts) {
    sb.innerHTML = `
      <div class="summary-bar all-clear">
        <div class="summary-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg></div>
        <div class="summary-text">
          <div class="summary-title" style="color:#6ee7a0;">${t('allClear')}</div>
          <div class="summary-sub">${t('allClearSub')}</div>
        </div>
      </div>`;
    return;
  }

  const barClass = urgent ? 'has-alerts has-urgent' : 'has-alerts';
  const stats = [
    urgent && `<div class="summary-stat urgent"><div class="num">${urgent}</div><div class="lbl">${t('lblUrgent')}</div></div>`,
    flood  && `<div class="summary-stat flood"><div class="num">${flood}</div><div class="lbl">${t('lblFlood')}</div></div>`,
    watch  && `<div class="summary-stat watch"><div class="num">${watch}</div><div class="lbl">${t('lblWatch')}</div></div>`,
  ].filter(Boolean).join('');

  // CTA: find most severe place
  const mostSevere = places.find(p => p.risk === 'urgent') || places.find(p => p.risk === 'flood') || places.find(p => p.risk === 'watch');
  const ctaHTML = mostSevere
    ? `<button class="summary-cta" data-action="open-detail" data-id="${mostSevere.id}">
         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
         ${t('viewUrgent')}
       </button>`
    : '';

  sb.innerHTML = `
    <div class="summary-bar ${barClass}">
      <div class="summary-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
      <div class="summary-text">
        <div class="summary-title">${t('activeWarnings')}</div>
        <div class="summary-sub">${t('placeMonitored', places.length)}</div>
      </div>
      <div class="summary-stats">${stats}</div>
      ${ctaHTML}
    </div>`;
}

function renderPlaceGrid() {
  const grid  = document.getElementById('place-grid');
  const empty = document.getElementById('empty-state');

  if (places.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'flex';
  } else {
    empty.style.display = 'none';
    grid.innerHTML = places.map(p => placeCardHTML(p)).join('');
  }
}

function placeCardHTML(p) {
  return `
    <button class="card place-card ${p.risk}" role="listitem" data-action="open-detail" data-id="${p.id}"
            aria-label="View details for ${p.name}, ${RISK_LABELS(p.risk)}">
      <div class="card-header">
        <div class="place-icon" aria-hidden="true">${placeIconSVG(p.type)}</div>
        <div class="place-meta">
          <div class="place-name-row">
            <span class="place-name">${p.name}</span>
            ${badgeHTML(p.risk)}
          </div>
          <div class="place-addr">${p.address}</div>
          <div class="place-desc">${p.plainLanguage}</div>
          <div class="place-updated">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${t('updatedLabel')} ${timeAgo(p.updatedAt)}
            <span class="card-source-badge">MET</span>
          </div>
        </div>
        <svg class="card-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
      </div>
    </button>`;
}

function badgeHTML(risk) {
  return `<span class="badge ${risk}" aria-label="${RISK_LABELS(risk)}"><span class="dot" aria-hidden="true"></span>${RISK_LABELS(risk)}</span>`;
}

function timeAgo(ts) {
  if (!ts) return t('justNow');
  const s = Math.floor((Date.now() - ts) / 1000);
  if (s < 10) return t('justNow');
  if (s < 60) return t('secondsAgo', s);
  const m = Math.floor(s / 60);
  if (m < 60) return t('minutesAgo', m);
  const h = Math.floor(m / 60);
  return t('hoursAgo', h);
}

/* ============================================================
   FEED STATUS
   ============================================================ */
function updateFeedStatus() {
  updateFeedPill('feed-met', 'feed-met-time', _weatherCacheTime);
  updateFeedPill('feed-jps', 'feed-jps-time', _floodCacheTime);
}

function updateFeedPill(pillId, timeId, cacheTime) {
  const pill     = document.getElementById(pillId);
  const timeEl   = document.getElementById(timeId);
  if (!pill) return;
  pill.classList.remove('live', 'stale', 'error');
  if (!cacheTime) {
    pill.classList.add('error');
    if (timeEl) timeEl.textContent = t('feedError');
  } else {
    const ageMs = Date.now() - cacheTime;
    if (ageMs < 7 * 60 * 1000) {
      pill.classList.add('live');
      if (timeEl) timeEl.textContent = t('feedLive');
    } else {
      pill.classList.add('stale');
      const mins = Math.floor(ageMs / 60000);
      if (timeEl) timeEl.textContent = t('feedAgo', mins);
    }
  }
}

/* ============================================================
   ALERT BADGE
   ============================================================ */
function updateAlertBadge() {
  const count = alerts.length;
  ['nav-alert-badge', 'mobile-alert-badge'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (count > 0) { el.style.display = 'flex'; el.textContent = count > 9 ? '9+' : count; }
    else { el.style.display = 'none'; }
  });
}

/* ============================================================
   PLACE ICONS
   ============================================================ */
function placeIconSVG(type) {
  const icons = {
    home:   `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    office: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>`,
    family: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
    school: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    other:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  };
  return icons[type] || icons.other;
}

/* ============================================================
   ALERTS TAB
   ============================================================ */
function renderAlerts() {
  const list  = document.getElementById('alert-list');
  const empty = document.getElementById('alert-empty');
  if (!list) return;

  if (!alerts.length) {
    list.innerHTML = '';
    empty.style.display = 'flex';
    return;
  }
  empty.style.display = 'none';
  list.innerHTML = alerts.map(a => `
    <div class="alert-item" role="listitem">
      <div class="alert-risk-dot ${a.risk}" aria-hidden="true"></div>
      <div class="alert-body">
        <div class="alert-place">${a.placeName}</div>
        <div class="alert-msg">${a.msg}</div>
        <div class="alert-time">${timeAgo(a.time)}</div>
      </div>
      <div class="alert-badge">${badgeHTML(a.risk)}</div>
    </div>`
  ).join('');
  updateAlertBadge();
}

/* ============================================================
   DETAIL DRAWER
   ============================================================ */
function openDetail(id) {
  const p = places.find(x => x.id === id);
  if (!p) return;
  currentDetailId = id;
  _prevFocus = document.activeElement;

  const actions = getDefaultActions(p.risk);
  const actHTML = actions.map((a, i) => {
    const linkHTML = a.url
      ? `<a class="action-link" href="${a.url}" target="_blank" rel="noopener">
           <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
           ${t('openLink')}
         </a>`
      : '';
    return `<div class="action-step">
      <div class="step-num" aria-hidden="true">${i + 1}</div>
      <div class="txt">${a.text}${linkHTML ? '<br>' + linkHTML : ''}</div>
    </div>`;
  }).join('');

  const updatedAtFull = p.updatedAt
    ? new Date(p.updatedAt).toLocaleTimeString('en-MY', { hour: '2-digit', minute: '2-digit', hour12: true })
    : '';

  document.getElementById('detail-content').innerHTML = `
    <div style="padding-right:28px;" id="drawer-title">
      <div class="detail-hero ${p.risk}">
        <div class="hero-head">
          <div>
            <div class="hero-name">${p.name}</div>
            <div class="hero-addr">${p.address}, ${p.district}, ${p.state}</div>
          </div>
          ${badgeHTML(p.risk)}
        </div>
        <div class="hero-plain">${p.plainLanguage}</div>
        <div class="hero-updated">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          ${t('updatedLabel')} ${updatedAtFull}
          <span class="source-chip met">MET Malaysia</span>
        </div>
      </div>

      <!-- Flood summary -->
      <div class="card info-card" style="margin-bottom:10px;">
        <div class="info-card-header">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2" aria-hidden="true"><path d="M3 6c0 0 2-2 5-2s5 2 8 2 5-2 5-2v14c0 0-2 2-5 2s-5-2-8-2-5 2-5 2V6z"/></svg>
          <span class="lbl">${t('floodStatus')}</span>
          <span class="source-chip met">MET</span>
        </div>
        <div class="info-body">${p.floodSummary || t('loading')}</div>
      </div>

      <!-- Weather summary -->
      <div class="card info-card" style="margin-bottom:10px;">
        <div class="info-card-header">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2" aria-hidden="true"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/></svg>
          <span class="lbl">${t('weatherWarnings')}</span>
          <span class="source-chip met">MET</span>
        </div>
        <div class="info-body">${p.weatherSummary || t('noWarnings')}</div>
      </div>

      <!-- Nearest rivers -->
      ${buildProximityHTML(p)}

      <!-- What to do -->
      <div class="card info-card" style="margin-bottom:10px;">
        <div class="info-card-header">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#${p.risk === 'urgent' ? 'fca5a5' : '60a5fa'}" stroke-width="2" aria-hidden="true"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
          <span class="lbl">${t('whatToDo')}</span>
        </div>
        <div class="action-list">${actHTML}</div>
      </div>

      <!-- Remove button -->
      <button class="btn btn-danger" style="margin-top:4px;" data-action="delete-place" data-id="${p.id}"
              aria-label="${t('removePlace')} — ${p.name}">${t('removePlace')}</button>
    </div>`;

  const overlay = document.getElementById('drawer-overlay');
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  // Focus close button
  setTimeout(() => {
    document.getElementById('drawer-close-btn')?.focus();
  }, 50);
  trapFocus(overlay);
}

function closeDetail() {
  document.getElementById('drawer-overlay').style.display = 'none';
  document.body.style.overflow = '';
  currentDetailId = null;
  if (_prevFocus && _prevFocus.focus) _prevFocus.focus();
}

/* ============================================================
   ADD PLACE MODAL
   ============================================================ */
let _prevFocus = null;

function openAddModal() {
  _prevFocus = document.activeElement;
  const overlay = document.getElementById('modal-overlay');
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  // Clear validation states
  clearFormErrors();
  // Focus first input
  setTimeout(() => { document.getElementById('input-name')?.focus(); }, 50);
  trapFocus(overlay);
}

function closeAddModal() {
  document.getElementById('modal-overlay').style.display = 'none';
  document.body.style.overflow = '';
  if (_prevFocus && _prevFocus.focus) _prevFocus.focus();
}

function clearFormErrors() {
  ['name', 'address', 'district'].forEach(f => {
    const el   = document.getElementById(`input-${f}`);
    const err  = document.getElementById(`err-${f}`);
    if (el)  el.classList.remove('invalid');
    if (err) err.textContent = '';
  });
}

function validateForm() {
  let valid = true;
  const checks = [
    { field: 'name',     key: 'errName' },
    { field: 'address',  key: 'errAddress' },
    { field: 'district', key: 'errDistrict' },
  ];
  checks.forEach(({ field, key }) => {
    const el  = document.getElementById(`input-${field}`);
    const err = document.getElementById(`err-${field}`);
    if (!el.value.trim()) {
      el.classList.add('invalid');
      if (err) err.textContent = t(key);
      if (valid) { el.focus(); }
      valid = false;
    } else {
      el.classList.remove('invalid');
      if (err) err.textContent = '';
    }
  });
  return valid;
}

function handleAddPlace(e) {
  e.preventDefault();
  if (!validateForm()) return;

  const btn = document.getElementById('add-submit-btn');
  btn.disabled = true;
  btn.textContent = t('saving');

  const name     = document.getElementById('input-name').value.trim();
  const address  = document.getElementById('input-address').value.trim();
  const district = document.getElementById('input-district').value.trim();
  const state    = document.getElementById('input-state').value;
  const lat      = parseFloat(document.getElementById('input-lat').value) || 3.1390;
  const lng      = parseFloat(document.getElementById('input-lng').value) || 101.6869;

  const liveData = getDistrictRisk(district, state);
  const newPlace = {
    id: nextId++, name, address, district, state, lat, lng,
    type: selectedType,
    risk:           liveData.risk,
    floodSummary:   liveData.floodSummary,
    weatherSummary: liveData.weatherSummary,
    plainLanguage:  liveData.plainLanguage,
    actions:        getDefaultActions(liveData.risk),
    updatedAt:      Date.now(),
    elevation:      null,
  };
  places.push(newPlace);
  lsSave();

  fetchElevation(lat, lng).then(elev => {
    if (elev != null) {
      const p = places.find(x => x.id === newPlace.id);
      if (p) { p.elevation = elev; lsSave(); }
    }
  });

  closeAddModal();
  renderDashboard();
  showToast(`${name} added`);

  // Reset form
  e.target.reset();
  selectedType = 'home';
  document.querySelectorAll('.type-chip').forEach(c => {
    const active = c.dataset.type === 'home';
    c.classList.toggle('active', active);
    c.setAttribute('aria-pressed', active);
  });
  btn.disabled = false;
  btn.textContent = t('saveMonitor');
}

/* ============================================================
   DELETE PLACE
   ============================================================ */
let _pendingDeleteId = null;

function deletePlace(id) {
  _pendingDeleteId = id;
  document.getElementById('confirm-overlay').classList.add('show');
  setTimeout(() => { document.getElementById('confirm-ok')?.focus(); }, 50);
}

function hideConfirm() {
  _pendingDeleteId = null;
  document.getElementById('confirm-overlay').classList.remove('show');
}

function confirmOk() {
  if (_pendingDeleteId == null) return;
  places = places.filter(p => p.id !== _pendingDeleteId);
  _pendingDeleteId = null;
  hideConfirm();
  lsSave();
  closeDetail();
  renderDashboard();
  showToast(t('toastPlaceRemoved'));
}

/* ============================================================
   CLEAR ALL DATA
   ============================================================ */
function clearAllData() {
  [LS_PLACES, LS_ALERTS, LS_NEXT_ID, LS_NEXT_ALERT, LS_ONBOARDED].forEach(k => _store.del(k));
  places = []; alerts = []; nextId = 1; nextAlertId = 1;
  lsSave();
  renderDashboard();
  renderAlerts();
  showToast(t('toastDataCleared'));
}

/* ============================================================
   REFRESH
   ============================================================ */
function doRefresh() {
  const btn = document.getElementById('refresh-btn');
  btn.querySelector('svg').classList.add('spin');
  _floodCacheTime   = 0;
  _weatherCacheTime = 0;
  Promise.all([fetchFloodData(), fetchWeatherData()]).then(() => {
    btn.querySelector('svg').classList.remove('spin');
    places.forEach(p => {
      const liveData = getDistrictRisk(p.district, p.state);
      const oldRisk  = p.risk;
      p.risk           = liveData.risk;
      p.floodSummary   = liveData.floodSummary;
      p.weatherSummary = liveData.weatherSummary;
      p.plainLanguage  = liveData.plainLanguage;
      p.actions        = getDefaultActions(liveData.risk);
      p.updatedAt      = Date.now();
      if (p.risk !== oldRisk) {
        alerts.unshift({ id: nextAlertId++, placeId: p.id, placeName: p.name, risk: p.risk, msg: p.plainLanguage, time: Date.now() });
      }
    });
    places.forEach(p => {
      if (p.elevation == null) {
        fetchElevation(p.lat, p.lng).then(elev => { if (elev != null) { p.elevation = elev; lsSave(); } });
      }
    });
    lsSave(); renderDashboard();
    showToast(t('toastRefreshed'));
  }).catch(() => {
    btn.querySelector('svg').classList.remove('spin');
    places.forEach(p => { p.updatedAt = Date.now(); });
    lsSave(); renderDashboard();
    showToast(t('toastOffline'));
  });
}

/* ============================================================
   ACTION LISTS
   ============================================================ */
function getDefaultActions(risk) {
  const key = `act_${risk}`;
  return t(key) || t('act_normal');
}

/* ============================================================
   TOAST
   ============================================================ */
let toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}

/* ============================================================
   FOCUS TRAP
   ============================================================ */
function trapFocus(container) {
  const focusable = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  container.addEventListener('keydown', function trap(e) {
    if (e.key !== 'Tab') return;
    const els = [...container.querySelectorAll(focusable)].filter(el => !el.disabled && el.offsetParent !== null);
    if (!els.length) return;
    const first = els[0], last = els[els.length - 1];
    if (e.shiftKey) { if (document.activeElement === first) { last.focus(); e.preventDefault(); } }
    else { if (document.activeElement === last) { first.focus(); e.preventDefault(); } }
    if (!container.contains(document.activeElement)) { first.focus(); e.preventDefault(); }
    // Remove trap when overlay closes
    if (container.style.display === 'none' || !container.classList.contains('show')) {
      container.removeEventListener('keydown', trap);
    }
  });
}

/* ============================================================
   FLOOD DATA ENGINE
   ============================================================ */
let _floodCache         = {};
let _floodDataTimestamp = null;
let _floodCacheTime     = 0;
let _weatherWarnings    = [];
let _weatherCacheTime   = 0;
const CACHE_TTL_MS = 5 * 60 * 1000;

function jpsToRisk(indicator) {
  if (!indicator) return 'normal';
  switch (indicator.toUpperCase()) {
    case 'DANGER':  return 'urgent';
    case 'WARNING': return 'flood';
    case 'ALERT':   return 'watch';
    default:        return 'normal';
  }
}
const RISK_ORDER = { normal: 0, watch: 1, flood: 2, urgent: 3 };

async function fetchFloodData() {
  if (_floodCacheTime && Date.now() - _floodCacheTime < CACHE_TTL_MS) return;
  try {
    const ctrl = new AbortController();
    setTimeout(() => ctrl.abort(), 15000);
    const res = await fetch('https://api.data.gov.my/flood-warning/?limit=2000', { signal: ctrl.signal });
    if (!res.ok) throw new Error('API error');
    const stations = await res.json();
    const grouped = {};
    for (const s of stations) {
      const key = (s.district + '|' + s.state).toUpperCase();
      if (!grouped[key]) grouped[key] = { district: s.district, state: s.state, stations: [] };
      grouped[key].stations.push(s);
    }
    _floodCache = {};
    for (const [key, group] of Object.entries(grouped)) {
      let worst = null, worstRisk = 'normal';
      for (const s of group.stations) {
        if (s.water_level_status !== 'ON') continue;
        const r = jpsToRisk(s.water_level_indicator);
        if (RISK_ORDER[r] > RISK_ORDER[worstRisk]) { worstRisk = r; worst = s; }
      }
      _floodCache[key] = { risk: worstRisk, worst, stations: group.stations, district: group.district, state: group.state };
    }
    const tsExample = stations.find(s => s.water_level_update_datetime);
    if (tsExample) _floodDataTimestamp = tsExample.water_level_update_datetime;
    _floodCacheTime = Date.now();
  } catch(e) {
    console.warn('FloodWatch: flood data unavailable.', e.message);
  }
}

async function fetchWeatherData() {
  if (_weatherCacheTime && Date.now() - _weatherCacheTime < CACHE_TTL_MS) return;
  try {
    const ctrl = new AbortController();
    setTimeout(() => ctrl.abort(), 15000);
    const res = await fetch('https://api.data.gov.my/weather/warning/?limit=50', { signal: ctrl.signal });
    if (!res.ok) throw new Error('Weather API error');
    const data = await res.json();
    _weatherWarnings = data.filter(w => !w.valid_to || new Date(w.valid_to) >= new Date());
    _weatherCacheTime = Date.now();
    updateFeedStatus();
  } catch(e) {
    console.warn('FloodWatch: weather data unavailable.', e.message);
  }
}

const _MET_STATE_NAMES = {
  'SEL': ['SELANGOR'], 'WLH': ['KUALA LUMPUR', 'WILAYAH PERSEKUTUAN'],
  'PTJ': ['PUTRAJAYA'], 'JHR': ['JOHOR'], 'KDH': ['KEDAH'], 'KEL': ['KELANTAN'],
  'MLK': ['MELAKA'], 'NSN': ['NEGERI SEMBILAN'], 'PHG': ['PAHANG'],
  'PNG': ['PULAU PINANG', 'PENANG', 'PINANG'], 'PRK': ['PERAK'], 'PLS': ['PERLIS'],
  'SBH': ['SABAH'], 'SRK': ['SARAWAK'], 'TRG': ['TERENGGANU'],
};
const _MET_FLOOD_KEYWORDS = ['flood', 'banjir', 'limpahan'];

function getMatchingWarnings(district, state) {
  if (!_weatherWarnings.length) return [];
  const distUp  = district.toUpperCase();
  const aliases = (_MET_STATE_NAMES[state.toUpperCase()] || [state.toUpperCase()]);
  const MARINE  = ['OVER THE WATERS OF', 'STRAITS OF', 'SOUTH CHINA SEA', 'SULAWESI', 'BUNGURAN', 'REEF SOUTH', 'TIOMAN'];
  return _weatherWarnings.filter(w => {
    const body = ((w.text_en || '') + ' ' + (w.heading_en || '') + ' ' + (w.title_en || '')).toUpperCase();
    if (body.includes('NO ADVISORY') || body.includes('NO TROPICAL')) return false;
    if (MARINE.some(m => body.includes(m))) return false;
    const segments = body.split(';');
    for (const seg of segments) {
      if (!aliases.some(a => seg.includes(a))) continue;
      if (seg.includes('(')) { if (distUp && seg.includes(distUp)) return true; }
      else { return true; }
    }
    return false;
  });
}

function getMETRisk(warnings) {
  if (!warnings.length) return 'normal';
  for (const w of warnings) {
    const body = ((w.text_en || '') + ' ' + (w.heading_en || '') + ' ' + (w.title_en || '')).toLowerCase();
    if (_MET_FLOOD_KEYWORDS.some(k => body.includes(k))) return 'urgent';
  }
  return 'watch';
}

function getWeatherSummary(district, state) {
  const matches = getMatchingWarnings(district, state);
  if (!matches.length) return t('noWarnings');
  const w = matches[0];
  const validTo = w.valid_to
    ? new Date(w.valid_to).toLocaleTimeString('en-MY', { hour: '2-digit', minute: '2-digit', hour12: true })
    : '';
  return `${w.heading_en}${validTo ? ' — until ' + validTo : ''}.`;
}

function getDistrictRisk(district, state) {
  const metWarnings    = getMatchingWarnings(district, state);
  const metRisk        = getMETRisk(metWarnings);
  const weatherSummary = getWeatherSummary(district, state);

  let floodSummary, plainLanguage;
  if (metRisk !== 'normal') {
    const w = metWarnings[0];
    const validTo = w.valid_to
      ? new Date(w.valid_to).toLocaleTimeString('en-MY', { hour: '2-digit', minute: '2-digit', hour12: true })
      : '';
    floodSummary  = t('floodSummaryFmt', w.heading_en, validTo);
    plainLanguage = metRisk === 'urgent'
      ? t('urgentPlain', w.heading_en)
      : metRisk === 'flood'
        ? t('floodPlain', w.heading_en)
        : t('watchPlain', w.heading_en);
  } else {
    floodSummary  = _floodCacheTime ? t('floodClear') : t('loading');
    plainLanguage = t('allClearDetail');
  }
  return { risk: metRisk, floodSummary, weatherSummary, plainLanguage };
}

/* ============================================================
   HAVERSINE + NEAREST STATIONS
   ============================================================ */
function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1 * Math.PI/180) * Math.cos(lat2 * Math.PI/180) * Math.sin(dLon/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function getNearestStations(lat, lng, topN = 3) {
  const all = [];
  for (const entry of Object.values(_floodCache)) {
    for (const s of entry.stations) {
      if (s.latitude && s.longitude && s.water_level_status === 'ON') {
        all.push({ ...s, _dist: haversine(lat, lng, s.latitude, s.longitude) });
      }
    }
  }
  all.sort((a, b) => a._dist - b._dist);
  return all.slice(0, topN);
}

/* ============================================================
   ELEVATION
   ============================================================ */
async function fetchElevation(lat, lng) {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 6000); // 6s timeout
    const res = await fetch(
      `https://api.open-meteo.com/v1/elevation?latitude=${lat}&longitude=${lng}`,
      { signal: controller.signal }
    );
    clearTimeout(timer);
    if (!res.ok) throw new Error();
    const data = await res.json();
    return Array.isArray(data.elevation) ? data.elevation[0] : null;
  } catch { return null; }
}

/* ============================================================
   PROXIMITY — nearest rivers card
   ============================================================ */
function buildProximityHTML(place) {
  const stations = getNearestStations(place.lat, place.lng, 3);
  if (!stations.length) return '';

  const liveURL = `https://publicinfobanjir.water.gov.my/aras-air/data-paras-air/?state=${place.state || 'SEL'}&lang=en`;

  let elevHTML = '';
  if (place.elevation != null) {
    const elev = place.elevation;
    const cls  = elev < 10 ? 'caution' : 'safe';
    elevHTML = `<div class="elev-risk-bar ${cls}" style="margin-top:8px;">${elev < 10 ? t('elevLow', elev) : t('elevSafe', elev)}</div>`;
  }

  const stationsHTML = stations.map((s, i) => {
    const d    = s._dist < 1 ? (s._dist * 1000).toFixed(0) + 'm' : s._dist.toFixed(1) + 'km';
    const last = i === stations.length - 1;
    return `<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;${last ? '' : 'border-bottom:1px solid var(--border);'}">
      <div style="font-size:12px;color:var(--text);font-weight:500;">${s.station_name}</div>
      <div style="font-size:11px;color:var(--text-muted);white-space:nowrap;margin-left:8px;">${d} ${t('awayLabel')}</div>
    </div>`;
  }).join('');

  return `
    <div class="card info-card" style="margin-bottom:10px;">
      <div class="info-card-header">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2" aria-hidden="true"><path d="M3 6c0 0 2-2 5-2s5 2 8 2 5-2 5-2v14c0 0-2 2-5 2s-5-2-8-2-5 2-5 2V6z"/></svg>
        <span class="lbl">${t('nearestRivers')}</span>
        <span class="source-chip jps">JPS</span>
      </div>
      ${stationsHTML}
      ${elevHTML}
      <a href="${liveURL}" target="_blank" rel="noopener"
         style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;margin-top:10px;padding:8px 10px;
                background:rgba(96,165,250,0.08);border:1px solid rgba(96,165,250,0.25);border-radius:8px;">
        <span style="font-size:12px;color:#60a5fa;font-weight:600;white-space:nowrap;">${t('checkLiveWater')} ↗</span>
        <span style="font-size:11px;color:var(--text-muted);white-space:nowrap;">publicinfobanjir.water.gov.my</span>
      </a>
    </div>`;
}

/* ============================================================
   NOTIFICATIONS
   ============================================================ */
let _notifEnabled = false;
let _pollInterval = null;

function checkNotifBanner() {
  const banner = document.getElementById('notif-banner');
  if (!banner) return;
  if (!('Notification' in window)) { banner.style.display = 'none'; return; }
  if (Notification.permission === 'granted') {
    _notifEnabled = true; banner.style.display = 'none'; startNotifPolling();
  } else if (Notification.permission === 'denied') {
    banner.style.display = 'none';
  } else {
    banner.style.display = 'flex';
  }
}

function updateNotifSettingsUI() {
  const status = document.getElementById('settings-notif-status');
  const banner = document.getElementById('settings-notif-banner');
  if (!status) return;
  if (!('Notification' in window)) {
    if (banner) banner.style.display = 'none';
    status.textContent = t('toastNotifUnsupported');
    return;
  }
  if (Notification.permission === 'granted') {
    if (banner) banner.style.display = 'none';
    status.textContent = t('notifGranted');
    status.className = 'settings-notif-status granted';
  } else if (Notification.permission === 'denied') {
    if (banner) banner.style.display = 'none';
    status.textContent = t('notifDenied');
    status.className = 'settings-notif-status';
  } else {
    if (banner) banner.style.display = 'flex';
    status.textContent = '';
    status.className = 'settings-notif-status';
  }
}

async function requestNotifPermission() {
  if (!('Notification' in window)) { showToast(t('toastNotifUnsupported')); return; }
  const perm = await Notification.requestPermission();
  if (perm === 'granted') {
    _notifEnabled = true;
    document.getElementById('notif-banner').style.display = 'none';
    startNotifPolling();
    showToast(t('toastAlertsEnabled'));
    new Notification('FloodWatch MY', { body: 'You will be notified when risk changes at your saved places.' });
  } else {
    showToast(t('toastNotifBlocked'));
  }
  updateNotifSettingsUI();
}

function startNotifPolling() {
  if (_pollInterval) return;
  _pollInterval = setInterval(async () => {
    await Promise.all([fetchFloodData(), fetchWeatherData()]);
    places.forEach(p => {
      const liveData = getDistrictRisk(p.district, p.state);
      const oldRisk  = p.risk;
      p.risk = liveData.risk; p.floodSummary = liveData.floodSummary;
      p.weatherSummary = liveData.weatherSummary; p.plainLanguage = liveData.plainLanguage;
      p.actions = getDefaultActions(liveData.risk); p.updatedAt = Date.now();
      if (p.risk !== oldRisk) {
        alerts.unshift({ id: nextAlertId++, placeId: p.id, placeName: p.name, risk: p.risk, msg: p.plainLanguage, time: Date.now() });
        if (p.risk !== 'normal' && _notifEnabled && Notification.permission === 'granted') {
          new Notification(`${RISK_LABELS(p.risk)}: ${p.name}`, { body: p.plainLanguage, tag: `fw-${p.id}` });
        }
      }
    });
    lsSave(); renderDashboard();
  }, CACHE_TTL_MS);
}

/* ============================================================
   ONBOARDING
   ============================================================ */
const OB_TOTAL = 5;
let obStep = 0;

function showOnboarding() {
  const overlay = document.getElementById('onboarding-overlay');
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  renderObStep();
  trapFocus(overlay);
}

function hideOnboarding() {
  document.getElementById('onboarding-overlay').style.display = 'none';
  document.body.style.overflow = '';
  _store.set(LS_ONBOARDED, '1');
}

function renderObStep() {
  document.querySelectorAll('.ob-step').forEach(s => s.classList.remove('active'));
  const step = document.querySelector(`.ob-step[data-step="${obStep}"]`);
  if (step) step.classList.add('active');

  const nextBtn = document.getElementById('ob-next');
  if (nextBtn) nextBtn.textContent = obStep === OB_TOTAL - 1 ? t('obDone') : t('obNext');

  // Dots
  const dotsEl = document.getElementById('ob-dots');
  if (dotsEl) {
    dotsEl.innerHTML = Array.from({ length: OB_TOTAL }, (_, i) =>
      `<div class="ob-dot${i === obStep ? ' active' : ''}"></div>`
    ).join('');
  }
}

/* ============================================================
   EVENT DELEGATION (all events here, no inline handlers)
   ============================================================ */
document.addEventListener('click', e => {
  const target = e.target.closest('[data-action]') || e.target.closest('[data-tab]') || e.target.closest('[data-lang]');
  if (!target) return;

  // Nav tabs
  if (target.classList.contains('nav-tab') || target.classList.contains('mobile-nav-btn')) {
    switchTab(target.dataset.tab);
    return;
  }

  // Lang buttons (topbar or settings)
  if (target.classList.contains('lang-btn') || target.classList.contains('settings-lang-btn')) {
    setLang(target.dataset.lang);
    return;
  }

  const action = target.dataset.action;
  if (!action) return;

  switch (action) {
    case 'open-detail':
      openDetail(parseInt(target.dataset.id));
      break;
    case 'delete-place':
      deletePlace(parseInt(target.dataset.id));
      break;
  }
});

// Button bindings (static elements that can't use delegation cleanly)
document.addEventListener('DOMContentLoaded', () => {
  // Add place
  document.getElementById('add-place-btn')?.addEventListener('click', openAddModal);
  document.getElementById('fab-add-btn')?.addEventListener('click', openAddModal);
  document.getElementById('empty-add-btn')?.addEventListener('click', openAddModal);
  // Refresh
  document.getElementById('refresh-btn')?.addEventListener('click', doRefresh);
  // Modal
  document.getElementById('modal-close-btn')?.addEventListener('click', closeAddModal);
  document.getElementById('modal-cancel-btn')?.addEventListener('click', closeAddModal);
  document.getElementById('modal-overlay')?.addEventListener('click', e => { if (e.target === document.getElementById('modal-overlay')) closeAddModal(); });
  // Form submit
  document.getElementById('add-form')?.addEventListener('submit', handleAddPlace);
  // Type chips
  document.getElementById('type-grid')?.addEventListener('click', e => {
    const chip = e.target.closest('.type-chip');
    if (!chip) return;
    document.querySelectorAll('.type-chip').forEach(c => { c.classList.remove('active'); c.setAttribute('aria-pressed', 'false'); });
    chip.classList.add('active');
    chip.setAttribute('aria-pressed', 'true');
    selectedType = chip.dataset.type;
  });
  // Drawer
  document.getElementById('drawer-close-btn')?.addEventListener('click', closeDetail);
  document.getElementById('drawer-overlay')?.addEventListener('click', e => { if (e.target === document.getElementById('drawer-overlay')) closeDetail(); });
  // Confirm
  document.getElementById('confirm-cancel')?.addEventListener('click', hideConfirm);
  document.getElementById('confirm-ok')?.addEventListener('click', confirmOk);
  document.getElementById('confirm-overlay')?.addEventListener('click', e => { if (e.target === document.getElementById('confirm-overlay')) hideConfirm(); });
  // Notif banners
  document.getElementById('notif-btn')?.addEventListener('click', e => { e.stopPropagation(); requestNotifPermission(); });
  document.getElementById('notif-banner')?.addEventListener('click', requestNotifPermission);
  document.getElementById('settings-notif-btn')?.addEventListener('click', e => { e.stopPropagation(); requestNotifPermission(); });
  document.getElementById('settings-notif-banner')?.addEventListener('click', requestNotifPermission);
  // Keyboard: notif banner as button
  document.getElementById('notif-banner')?.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') requestNotifPermission(); });
  // Clear data
  document.getElementById('clear-data-btn')?.addEventListener('click', () => {
    if (confirm('Clear all saved places and alert history?')) clearAllData();
  });
  // Onboarding
  document.getElementById('ob-skip')?.addEventListener('click', hideOnboarding);
  document.getElementById('ob-next')?.addEventListener('click', () => {
    if (obStep < OB_TOTAL - 1) { obStep++; renderObStep(); }
    else { hideOnboarding(); }
  });
  // View toggle
  document.getElementById('view-toggle-btn')?.addEventListener('click', toggleView);

  // Settings tab view toggle buttons (tablet/mobile)
  document.getElementById('settings-view-desktop')?.addEventListener('click', () => setViewMode('desktop'));
  document.getElementById('settings-view-mobile')?.addEventListener('click', () => setViewMode('mobile'));
});

/* ============================================================
   VIEW TOGGLE (Desktop ↔ Forced Mobile)
   ============================================================ */
let _isForcedMobile = _store.get(LS_VIEW) === 'mobile';

function applyViewToggle(mobile) {
  const btn = document.getElementById('view-toggle-btn');
  const mobileIcon  = btn?.querySelector('.view-icon-mobile');
  const desktopIcon = btn?.querySelector('.view-icon-desktop');
  const hint = document.getElementById('app-frame-hint');

  document.body.classList.toggle('force-mobile', mobile);

  if (btn) {
    const titleKey = mobile ? 'viewToggleToDesktop' : 'viewToggleToMobile';
    btn.setAttribute('aria-label', t(titleKey));
    btn.setAttribute('title', t(titleKey));
  }
  if (mobileIcon)  mobileIcon.style.display  = mobile ? 'none' : '';
  if (desktopIcon) desktopIcon.style.display  = mobile ? '' : 'none';
  if (hint) hint.textContent = mobile
    ? `\u{1F4F1} Mobile view\u2009\u2014 click \u{1F5A5}\uFE0F to return to desktop view`
    : '';

  // Sync Settings tab view buttons
  const sdBtn = document.getElementById('settings-view-desktop');
  const smBtn = document.getElementById('settings-view-mobile');
  if (sdBtn) sdBtn.classList.toggle('active', !mobile);
  if (smBtn) smBtn.classList.toggle('active', mobile);
}

function setViewMode(mode) {
  _isForcedMobile = (mode === 'mobile');
  _store.set(LS_VIEW, mode);
  applyViewToggle(_isForcedMobile);
}

function toggleView() {
  setViewMode(_isForcedMobile ? 'desktop' : 'mobile');
}

/* ============================================================
   KEYBOARD SHORTCUTS
   ============================================================ */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const drawer  = document.getElementById('drawer-overlay');
    const modal   = document.getElementById('modal-overlay');
    const confirm = document.getElementById('confirm-overlay');
    const ob      = document.getElementById('onboarding-overlay');
    if (ob && ob.style.display !== 'none') { hideOnboarding(); return; }
    if (confirm && confirm.classList.contains('show')) { hideConfirm(); return; }
    if (drawer && drawer.style.display === 'flex') { closeDetail(); return; }
    if (modal  && modal.style.display  === 'flex') { closeAddModal(); return; }
  }
});

/* ============================================================
   INIT
   ============================================================ */
lsLoad();
places.forEach(p => { p.actions = getDefaultActions(p.risk || 'normal'); });

// Language
document.documentElement.lang = currentLang === 'zh' ? 'zh-Hans' : currentLang === 'bm' ? 'ms' : 'en';
document.querySelectorAll('.lang-btn, .settings-lang-btn').forEach(b => {
  const active = b.dataset.lang === currentLang;
  b.classList.toggle('active', active);
  if (b.classList.contains('lang-btn')) b.setAttribute('aria-pressed', active);
});
applyTranslations();
// Restore forced view if user had it set
applyViewToggle(_isForcedMobile);

// Initial render
renderDashboard();

// Fetch live data
Promise.all([fetchFloodData(), fetchWeatherData()]).then(() => {
  places.forEach(p => {
    const liveData = getDistrictRisk(p.district, p.state);
    const oldRisk  = p.risk;
    p.risk = liveData.risk; p.floodSummary = liveData.floodSummary;
    p.weatherSummary = liveData.weatherSummary; p.plainLanguage = liveData.plainLanguage;
    p.actions = getDefaultActions(liveData.risk); p.updatedAt = Date.now();
    if (p.risk !== 'normal' && p.risk !== oldRisk) {
      alerts.unshift({ id: nextAlertId++, placeId: p.id, placeName: p.name, risk: p.risk, msg: p.plainLanguage, time: Date.now() });
    }
  });
  lsSave();
  renderDashboard();
  places.forEach(p => {
    if (p.elevation == null) {
      fetchElevation(p.lat, p.lng).then(elev => { if (elev != null) { p.elevation = elev; lsSave(); } });
    }
  });
}).catch(() => {});

checkNotifBanner();

// Onboarding: show to first-time users
if (!_store.get(LS_ONBOARDED)) {
  setTimeout(() => showOnboarding(), 800);
}
