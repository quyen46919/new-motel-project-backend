/* eslint-disable no-unused-vars */
const universities = [
  'Đại học Đông Á - Kiến trúc Đà Nẵng',
  'Đại học Ngoại ngữ Đà Nẵng',
  'Đại học Sư phạm Đà Nẵng',
  'Đại học Kinh tế Đà Nẵng',
  'Đại học GreenWich Đà Nẵng',
  'Đại học FPT',
  'Đại học Bách khoa Đà Nẵng',
  'Đại học Duy Tân',
  'Đại học Kỹ thuật Y dược Đà Nẵng',
  'Đại học Sư phạm Kỹ thuật Đà Nẵng',
  '', // không gần đại học nào hết / khu vực không có dân cư
  // 'Đại học Xây dựng miền Trung'
  // 'Đại học Đà Nẵng',
  // 'Đại học Công nghệ Thông tin và Truyền thông Việt - Hàn',
  // 'Đại học Thể dục thể thao Đà Nẵng',
  // 'Cao đẳng phương Đông',
];

module.exports.distanceSampleData = [
  // đại học Đông Á - Kiến trúc
  {
    location: {
      latitude: 16.0338,
      longitude: 108.221,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0312,
      longitude: 108.2222,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0315,
      longitude: 108.2184,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0306,
      longitude: 108.2207,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0339,
      longitude: 108.2228,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0344,
      longitude: 108.2203,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0329,
      longitude: 108.2188,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0302,
      longitude: 108.2245,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0308,
      longitude: 108.2255,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0326,
      longitude: 108.2249,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0287,
      longitude: 108.2217,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0284,
      longitude: 108.2198,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0315,
      longitude: 108.2181,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0309,
      longitude: 108.2205,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0351,
      longitude: 108.2192,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0354,
      longitude: 108.2229,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0334,
      longitude: 108.2249,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0317,
      longitude: 108.226,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0303,
      longitude: 108.2256,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0293,
      longitude: 108.2247,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.028,
      longitude: 108.2235,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.029,
      longitude: 108.2214,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0307,
      longitude: 108.2201,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0286,
      longitude: 108.2216,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0284,
      longitude: 108.2237,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0296,
      longitude: 108.225,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0313,
      longitude: 108.2261,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.032,
      longitude: 108.2275,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0312,
      longitude: 108.227,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.03001,
      longitude: 108.2264,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0287,
      longitude: 108.2259,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0302,
      longitude: 108.2276,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0303,
      longitude: 108.2292,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0316,
      longitude: 108.2194,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0316,
      longitude: 108.2168,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0305,
      longitude: 108.2162,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0312,
      longitude: 108.2191,
    },
    area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  },
  // {
  //   location: {
  //     latitude: 16.0303,
  //     longitude: 108.2204,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0292,
  //     longitude: 108.2219,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.02901,
  //     longitude: 108.2227,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.02901,
  //     longitude: 108.2238,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0294,
  //     longitude: 108.2249,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0285,
  //     longitude: 108.2235,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0318,
  //     longitude: 108.2202,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0302,
  //     longitude: 108.2242,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.03001,
  //     longitude: 108.2251,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0289,
  //     longitude: 108.2254,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0313,
  //     longitude: 108.2269,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0322,
  //     longitude: 108.2258,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0328,
  //     longitude: 108.22701,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0341,
  //     longitude: 108.2237,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0355,
  //     longitude: 108.2233,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0344,
  //     longitude: 108.2228,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0342,
  //     longitude: 108.2248,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.03501,
  //     longitude: 108.2258,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0371,
  //     longitude: 108.2226,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0376,
  //     longitude: 108.2208,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0369,
  //     longitude: 108.21801,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0341,
  //     longitude: 108.21901,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0345,
  //     longitude: 108.2203,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0333,
  //     longitude: 108.21901,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.03201,
  //     longitude: 108.2182,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0329,
  //     longitude: 108.2197,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0334,
  //     longitude: 108.2208,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0346,
  //     longitude: 108.2198,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0343,
  //     longitude: 108.2207,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0338,
  //     longitude: 108.2216,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0349,
  //     longitude: 108.2216,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0355,
  //     longitude: 108.22101,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0354,
  //     longitude: 108.2222,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0341,
  //     longitude: 108.2237,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0332,
  //     longitude: 108.2196,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0338,
  //     longitude: 108.2202,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0342,
  //     longitude: 108.2212,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0336,
  //     longitude: 108.2225,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.03201,
  //     longitude: 108.2248,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.03101,
  //     longitude: 108.2255,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0316,
  //     longitude: 108.2236,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0326,
  //     longitude: 108.2236,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.03201,
  //     longitude: 108.2246,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0332,
  //     longitude: 108.2238,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0335,
  //     longitude: 108.22301,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0335,
  //     longitude: 108.2221,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0339,
  //     longitude: 108.2205,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0316,
  //     longitude: 108.2201,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.03101,
  //     longitude: 108.2207,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0306,
  //     longitude: 108.2213,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0303,
  //     longitude: 108.2223,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0292,
  //     longitude: 108.2212,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0301,
  //     longitude: 108.2222,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0303,
  //     longitude: 108.2229,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0299,
  //     longitude: 108.2208,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0336,
  //     longitude: 108.2199,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0341,
  //     longitude: 108.2208,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0341,
  //     longitude: 108.2217,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0344,
  //     longitude: 108.21901,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0361,
  //     longitude: 108.2215,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // {
  //   location: {
  //     latitude: 16.0349,
  //     longitude: 108.2228,
  //   },
  //   area: 'Đại học Đông Á - Kiến trúc Đà Nẵng',
  // },
  // Đại học Ngoại ngữ Đà Nẵng
  {
    location: {
      latitude: 16.0374,
      longitude: 108.2161,
    },
    area: 'Đại học Ngoại ngữ Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0456,
      longitude: 108.208,
    },
    area: 'Đại học Ngoại ngữ Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0427,
      longitude: 108.2152,
    },
    area: 'Đại học Ngoại ngữ Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0403,
      longitude: 108.2061,
    },
    area: 'Đại học Ngoại ngữ Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0326,
      longitude: 108.2099,
    },
    area: 'Đại học Ngoại ngữ Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0296,
      longitude: 108.2117,
    },
    area: 'Đại học Ngoại ngữ Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0295,
      longitude: 108.2218,
    },
    area: 'Đại học Ngoại ngữ Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0236,
      longitude: 108.2088,
    },
    area: 'Đại học Ngoại ngữ Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0334,
      longitude: 108.2212,
    },
    area: 'Đại học Ngoại ngữ Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0381,
      longitude: 108.2226,
    },
    area: 'Đại học Ngoại ngữ Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0429,
      longitude: 108.2192,
    },
    area: 'Đại học Ngoại ngữ Đà Nẵng',
  },
  // Đại học Sư phạm Đà Nẵng
  {
    location: {
      latitude: 16.0628,
      longitude: 108.1563,
    },
    area: 'Đại học Sư phạm Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0675,
      longitude: 108.1666,
    },
    area: 'Đại học Sư phạm Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0532,
      longitude: 108.1688,
    },
    area: 'Đại học Sư phạm Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0573,
      longitude: 108.1498,
    },
    area: 'Đại học Sư phạm Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0521,
      longitude: 108.1573,
    },
    area: 'Đại học Sư phạm Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0636,
      longitude: 108.1637,
    },
    area: 'Đại học Sư phạm Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0695,
      longitude: 108.1534,
    },
    area: 'Đại học Sư phạm Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0632,
      longitude: 108.1454,
    },
    area: 'Đại học Sư phạm Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0606,
      longitude: 108.1667,
    },
    area: 'Đại học Sư phạm Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0673,
      longitude: 108.1679,
    },
    area: 'Đại học Sư phạm Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0648,
      longitude: 108.1611,
    },
    area: 'Đại học Sư phạm Đà Nẵng',
  },
  // Đại học Kinh tế Đà Nẵng
  {
    location: {
      latitude: 16.0473,
      longitude: 108.2394,
    },
    area: 'Đại học Kinh tế Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0493,
      longitude: 108.2361,
    },
    area: 'Đại học Kinh tế Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0527,
      longitude: 108.234,
    },
    area: 'Đại học Kinh tế Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0559,
      longitude: 108.2399,
    },
    area: 'Đại học Kinh tế Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0535,
      longitude: 108.2456,
    },
    area: 'Đại học Kinh tế Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0481,
      longitude: 108.243,
    },
    area: 'Đại học Kinh tế Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0456,
      longitude: 108.2376,
    },
    area: 'Đại học Kinh tế Đà Nẵng',
  },
  {
    location: {
      latitude: 16.039,
      longitude: 108.2488,
    },
    area: 'Đại học Kinh tế Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0341,
      longitude: 108.2411,
    },
    area: 'Đại học Kinh tế Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0379,
      longitude: 108.2485,
    },
    area: 'Đại học Kinh tế Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0456,
      longitude: 108.2482,
    },
    area: 'Đại học Kinh tế Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0497,
      longitude: 108.2434,
    },
    area: 'Đại học Kinh tế Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0574,
      longitude: 108.2458,
    },
    area: 'Đại học Kinh tế Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0593,
      longitude: 108.2389,
    },
    area: 'Đại học Kinh tế Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0621,
      longitude: 108.2319,
    },
    area: 'Đại học Kinh tế Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0664,
      longitude: 108.2384,
    },
    area: 'Đại học Kinh tế Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0565,
      longitude: 108.2412,
    },
    area: 'Đại học Kinh tế Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0484,
      longitude: 108.2372,
    },
    area: 'Đại học Kinh tế Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0525,
      longitude: 108.2422,
    },
    area: 'Đại học Kinh tế Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0428,
      longitude: 108.2456,
    },
    area: 'Đại học Kinh tế Đà Nẵng',
  },
  // Đại học GreenWich Đà Nẵng
  {
    location: {
      latitude: 16.0294,
      longitude: 108.2388,
    },
    area: 'Đại học GreenWich Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0356,
      longitude: 108.2407,
    },
    area: 'Đại học GreenWich Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0375,
      longitude: 108.2452,
    },
    area: 'Đại học GreenWich Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0407,
      longitude: 108.2392,
    },
    area: 'Đại học GreenWich Đà Nẵng',
  },
  {
    location: {
      latitude: 16.044,
      longitude: 108.2466,
    },
    area: 'Đại học GreenWich Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0236,
      longitude: 108.2421,
    },
    area: 'Đại học GreenWich Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0213,
      longitude: 108.2491,
    },
    area: 'Đại học GreenWich Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0197,
      longitude: 108.2448,
    },
    area: 'Đại học GreenWich Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0195,
      longitude: 108.2505,
    },
    area: 'Đại học GreenWich Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0188,
      longitude: 108.2516,
    },
    area: 'Đại học GreenWich Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0275,
      longitude: 108.2442,
    },
    area: 'Đại học GreenWich Đà Nẵng',
  },
  {
    location: {
      latitude: 16.025,
      longitude: 108.2428,
    },
    area: 'Đại học GreenWich Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0315,
      longitude: 108.2448,
    },
    area: 'Đại học GreenWich Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0334,
      longitude: 108.2402,
    },
    area: 'Đại học GreenWich Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0362,
      longitude: 108.2431,
    },
    area: 'Đại học GreenWich Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0409,
      longitude: 108.2382,
    },
    area: 'Đại học GreenWich Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0398,
      longitude: 108.2449,
    },
    area: 'Đại học GreenWich Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0349,
      longitude: 108.241,
    },
    area: 'Đại học GreenWich Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0327,
      longitude: 108.2392,
    },
    area: 'Đại học GreenWich Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0376,
      longitude: 108.2392,
    },
    area: 'Đại học GreenWich Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0371,
      longitude: 108.2461,
    },
    area: 'Đại học GreenWich Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0273,
      longitude: 108.2396,
    },
    area: 'Đại học GreenWich Đà Nẵng',
  },
  // Đại học FPT
  {
    location: {
      latitude: 15.9676,
      longitude: 108.2596,
    },
    area: 'Đại học FPT',
  },
  {
    location: {
      latitude: 15.9724,
      longitude: 108.2632,
    },
    area: 'Đại học FPT',
  },
  {
    location: {
      latitude: 15.9582,
      longitude: 108.2634,
    },
    area: 'Đại học FPT',
  },
  {
    location: {
      latitude: 15.9584,
      longitude: 108.2512,
    },
    area: 'Đại học FPT',
  },
  {
    location: {
      latitude: 15.9595,
      longitude: 108.2634,
    },
    area: 'Đại học FPT',
  },
  {
    location: {
      latitude: 15.9671,
      longitude: 108.2629,
    },
    area: 'Đại học FPT',
  },
  {
    location: {
      latitude: 15.9749,
      longitude: 108.2519,
    },
    area: 'Đại học FPT',
  },
  {
    location: {
      latitude: 15.974,
      longitude: 108.2382,
    },
    area: 'Đại học FPT',
  },
  {
    location: {
      latitude: 15.96,
      longitude: 108.2751,
    },
    area: 'Đại học FPT',
  },
  {
    location: {
      latitude: 15.9513,
      longitude: 108.2746,
    },
    area: 'Đại học FPT',
  },
  {
    location: {
      latitude: 15.9532,
      longitude: 108.2516,
    },
    area: 'Đại học FPT',
  },
  {
    location: {
      latitude: 15.9631,
      longitude: 108.2538,
    },
    area: 'Đại học FPT',
  },
  {
    location: {
      latitude: 15.9559,
      longitude: 108.2706,
    },
    area: 'Đại học FPT',
  },
  {
    location: {
      latitude: 15.9506,
      longitude: 108.2658,
    },
    area: 'Đại học FPT',
  },
  {
    location: {
      latitude: 15.9648,
      longitude: 108.2593,
    },
    area: 'Đại học FPT',
  },
  // Đại học Bách khoa Đà Nẵng
  {
    location: {
      latitude: 16.0772,
      longitude: 108.1495,
    },
    area: 'Đại học Bách khoa Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0781,
      longitude: 108.153,
    },
    area: 'Đại học Bách khoa Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0691,
      longitude: 108.1541,
    },
    area: 'Đại học Bách khoa Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0651,
      longitude: 108.1468,
    },
    area: 'Đại học Bách khoa Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0661,
      longitude: 108.1592,
    },
    area: 'Đại học Bách khoa Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0805,
      longitude: 108.1454,
    },
    area: 'Đại học Bách khoa Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0786,
      longitude: 108.1569,
    },
    area: 'Đại học Bách khoa Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0748,
      longitude: 108.1597,
    },
    area: 'Đại học Bách khoa Đà Nẵng',
  },
  {
    location: {
      latitude: 16.072,
      longitude: 108.1541,
    },
    area: 'Đại học Bách khoa Đà Nẵng',
  },
  {
    location: {
      latitude: 16.07,
      longitude: 108.1608,
    },
    area: 'Đại học Bách khoa Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0659,
      longitude: 108.1583,
    },
    area: 'Đại học Bách khoa Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0709,
      longitude: 108.1373,
    },
    area: 'Đại học Bách khoa Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0634,
      longitude: 108.1457,
    },
    area: 'Đại học Bách khoa Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0583,
      longitude: 108.1492,
    },
    area: 'Đại học Bách khoa Đà Nẵng',
  },
  {
    location: {
      latitude: 16.067,
      longitude: 108.149,
    },
    area: 'Đại học Bách khoa Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0737,
      longitude: 108.1438,
    },
    area: 'Đại học Bách khoa Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0767,
      longitude: 108.1469,
    },
    area: 'Đại học Bách khoa Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0826,
      longitude: 108.1601,
    },
    area: 'Đại học Bách khoa Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0848,
      longitude: 108.15,
    },
    area: 'Đại học Bách khoa Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0865,
      longitude: 108.1433,
    },
    area: 'Đại học Bách khoa Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0842,
      longitude: 108.1518,
    },
    area: 'Đại học Bách khoa Đà Nẵng',
  },
  {
    location: {
      latitude: 16.068,
      longitude: 108.1694,
    },
    area: 'Đại học Bách khoa Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0612,
      longitude: 108.1655,
    },
    area: 'Đại học Bách khoa Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0678,
      longitude: 108.1415,
    },
    area: 'Đại học Bách khoa Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0711,
      longitude: 108.1357,
    },
    area: 'Đại học Bách khoa Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0782,
      longitude: 108.1374,
    },
    area: 'Đại học Bách khoa Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0847,
      longitude: 108.1408,
    },
    area: 'Đại học Bách khoa Đà Nẵng',
  },
  // Đại học Duy Tân
  {
    location: {
      latitude: 16.0615,
      longitude: 108.2161,
    },
    area: 'Đại học Duy Tân',
  },
  {
    location: {
      latitude: 16.0649,
      longitude: 108.2074,
    },
    area: 'Đại học Duy Tân',
  },
  {
    location: {
      latitude: 16.0567,
      longitude: 108.2096,
    },
    area: 'Đại học Duy Tân',
  },
  {
    location: {
      latitude: 16.0595,
      longitude: 108.2031,
    },
    area: 'Đại học Duy Tân',
  },
  {
    location: {
      latitude: 16.0554,
      longitude: 108.2055,
    },
    area: 'Đại học Duy Tân',
  },
  {
    location: {
      latitude: 16.0552,
      longitude: 108.2161,
    },
    area: 'Đại học Duy Tân',
  },
  {
    location: {
      latitude: 16.0513,
      longitude: 108.2122,
    },
    area: 'Đại học Duy Tân',
  },
  {
    location: {
      latitude: 16.0624,
      longitude: 108.2213,
    },
    area: 'Đại học Duy Tân',
  },
  {
    location: {
      latitude: 16.0673,
      longitude: 108.2173,
    },
    area: 'Đại học Duy Tân',
  },
  {
    location: {
      latitude: 16.0661,
      longitude: 108.2128,
    },
    area: 'Đại học Duy Tân',
  },
  {
    location: {
      latitude: 16.0613,
      longitude: 108.218,
    },
    area: 'Đại học Duy Tân',
  },
  {
    location: {
      latitude: 16.0627,
      longitude: 108.2211,
    },
    area: 'Đại học Duy Tân',
  },
  {
    location: {
      latitude: 16.0565,
      longitude: 108.2174,
    },
    area: 'Đại học Duy Tân',
  },
  {
    location: {
      latitude: 16.0633,
      longitude: 108.2173,
    },
    area: 'Đại học Duy Tân',
  },
  {
    location: {
      latitude: 16.0582,
      longitude: 108.2086,
    },
    area: 'Đại học Duy Tân',
  },
  // Đại học Kỹ thuật Y dược Đà Nẵng
  {
    location: {
      latitude: 16.0678,
      longitude: 108.22,
    },
    area: 'Đại học Kỹ thuật Y dược Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0683,
      longitude: 108.2181,
    },
    area: 'Đại học Kỹ thuật Y dược Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0649,
      longitude: 108.22,
    },
    area: 'Đại học Kỹ thuật Y dược Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0626,
      longitude: 108.2232,
    },
    area: 'Đại học Kỹ thuật Y dược Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0686,
      longitude: 108.2168,
    },
    area: 'Đại học Kỹ thuật Y dược Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0719,
      longitude: 108.2152,
    },
    area: 'Đại học Kỹ thuật Y dược Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0748,
      longitude: 108.221,
    },
    area: 'Đại học Kỹ thuật Y dược Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0749,
      longitude: 108.2142,
    },
    area: 'Đại học Kỹ thuật Y dược Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0703,
      longitude: 108.2187,
    },
    area: 'Đại học Kỹ thuật Y dược Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0658,
      longitude: 108.2225,
    },
    area: 'Đại học Kỹ thuật Y dược Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0697,
      longitude: 108.2229,
    },
    area: 'Đại học Kỹ thuật Y dược Đà Nẵng',
  },
  {
    location: {
      latitude: 16.069,
      longitude: 108.2112,
    },
    area: 'Đại học Kỹ thuật Y dược Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0658,
      longitude: 108.2151,
    },
    area: 'Đại học Kỹ thuật Y dược Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0691,
      longitude: 108.2194,
    },
    area: 'Đại học Kỹ thuật Y dược Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0678,
      longitude: 108.2154,
    },
    area: 'Đại học Kỹ thuật Y dược Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0691,
      longitude: 108.2215,
    },
    area: 'Đại học Kỹ thuật Y dược Đà Nẵng',
  },
  // Đại học Sư phạm Kỹ thuật Đà Nẵng
  {
    location: {
      latitude: 16.078,
      longitude: 108.2131,
    },
    area: 'Đại học Sư phạm Kỹ thuật Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0762,
      longitude: 108.2105,
    },
    area: 'Đại học Sư phạm Kỹ thuật Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0777,
      longitude: 108.2093,
    },
    area: 'Đại học Sư phạm Kỹ thuật Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0814,
      longitude: 108.2164,
    },
    area: 'Đại học Sư phạm Kỹ thuật Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0807,
      longitude: 108.2147,
    },
    area: 'Đại học Sư phạm Kỹ thuật Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0816,
      longitude: 108.2192,
    },
    area: 'Đại học Sư phạm Kỹ thuật Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0769,
      longitude: 108.2195,
    },
    area: 'Đại học Sư phạm Kỹ thuật Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0758,
      longitude: 108.2218,
    },
    area: 'Đại học Sư phạm Kỹ thuật Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0789,
      longitude: 108.2208,
    },
    area: 'Đại học Sư phạm Kỹ thuật Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0792,
      longitude: 108.2126,
    },
    area: 'Đại học Sư phạm Kỹ thuật Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0764,
      longitude: 108.2099,
    },
    area: 'Đại học Sư phạm Kỹ thuật Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0763,
      longitude: 108.2211,
    },
    area: 'Đại học Sư phạm Kỹ thuật Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0768,
      longitude: 16.0768,
    },
    area: 'Đại học Sư phạm Kỹ thuật Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0754,
      longitude: 108.2089,
    },
    area: 'Đại học Sư phạm Kỹ thuật Đà Nẵng',
  },
  {
    location: {
      latitude: 16.078,
      longitude: 108.2115,
    },
    area: 'Đại học Sư phạm Kỹ thuật Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0743,
      longitude: 108.2117,
    },
    area: 'Đại học Sư phạm Kỹ thuật Đà Nẵng',
  },
  {
    location: {
      latitude: 16.0757,
      longitude: 108.2088,
    },
    area: 'Đại học Sư phạm Kỹ thuật Đà Nẵng',
  },
  // không gần đại học nào hết / khu vực không có dân cư / không thuộc Đà Nẵng
  {
    location: {
      latitude: 15.861,
      longitude: 108.3114,
    },
    area: '',
  },
  {
    location: {
      latitude: 15.8742,
      longitude: 107.9778,
    },
    area: '',
  },
  {
    location: {
      latitude: 15.9877,
      longitude: 107.9063,
    },
    area: '',
  },
  {
    location: {
      latitude: 15.8742,
      longitude: 108.0271,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.3636,
      longitude: 107.8459,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.2898,
      longitude: 108.1672,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.1738,
      longitude: 108.3388,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.0141,
      longitude: 108.2839,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.0854,
      longitude: 108.2825,
    },
    area: '',
  },
  {
    location: {
      latitude: 15.9402,
      longitude: 108.3307,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.0135,
      longitude: 108.3376,
    },
    area: '',
  },
  {
    location: {
      latitude: 15.9125,
      longitude: 108.3259,
    },
    area: '',
  },
  {
    location: {
      latitude: 15.9217,
      longitude: 108.3925,
    },
    area: '',
  },
  {
    location: {
      latitude: 15.9158,
      longitude: 108.0513,
    },
    area: '',
  },
  {
    location: {
      latitude: 15.8596,
      longitude: 108.1412,
    },
    area: '',
  },
  {
    location: {
      latitude: 15.9045,
      longitude: 107.9641,
    },
    area: '',
  },
  {
    location: {
      latitude: 15.9422,
      longitude: 108.5187,
    },
    area: '',
  },
  {
    location: {
      latitude: 15.8411,
      longitude: 108.4858,
    },
    area: '',
  },
  {
    location: {
      latitude: 15.816,
      longitude: 108.4082,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.0775,
      longitude: 107.7087,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.2503,
      longitude: 107.7225,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.3781,
      longitude: 107.7733,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.303,
      longitude: 107.8721,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.3702,
      longitude: 107.9682,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.2687,
      longitude: 108.0946,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.1237,
      longitude: 108.1495,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.0814,
      longitude: 108.181,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.0547,
      longitude: 108.1964,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.0435,
      longitude: 108.197,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.0323,
      longitude: 108.198,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.0232,
      longitude: 108.1958,
    },
    area: '',
  },
  {
    location: {
      latitude: 15.9943,
      longitude: 108.1851,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.0301,
      longitude: 108.1614,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.0188,
      longitude: 108.1594,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.0272,
      longitude: 108.1719,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.0473,
      longitude: 108.1314,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.0428,
      longitude: 108.1185,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.0574,
      longitude: 108.129,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.0674,
      longitude: 108.1247,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.0709,
      longitude: 108.1218,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.0994,
      longitude: 108.2187,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.0965,
      longitude: 108.2004,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.0917,
      longitude: 108.1594,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.0593,
      longitude: 108.2603,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.0292,
      longitude: 108.2565,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.0218,
      longitude: 108.256,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.0372,
      longitude: 108.2534,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.0305,
      longitude: 108.2499,
    },
    area: '',
  },
  {
    location: {
      latitude: 16.0211,
      longitude: 108.2632,
    },
    area: '',
  },
  {
    location: {
      latitude: 48.8713,
      longitude: 2.3551,
    },
    area: '',
  },
  {
    location: {
      latitude: 48.9081,
      longitude: 8.1725,
    },
    area: '',
  },
];
