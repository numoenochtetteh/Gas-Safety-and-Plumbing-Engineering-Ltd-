/**
 * All photography is sourced from Pexels (free-to-use stock media) and served
 * directly from the Pexels CDN. Each helper points at a specific, real Pexels
 * photo/video ID — see the comment beside each constant for the source page.
 */

export function pexelsPhoto(id: number, width = 1600) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`
}

export function pexelsVideoPoster(id: number, width = 1600) {
  return pexelsPhoto(id, width)
}

// Direct MP4 sources (confirmed on the respective pexels.com/video pages)
export const videos = {
  // https://www.pexels.com/video/a-person-doing-plumbing-7584762/
  plumbingHands: "https://videos.pexels.com/video-files/7584762/7584762-uhd_2560_1440_25fps.mp4",
  // https://www.pexels.com/video/electricians-working-at-substation-10151854/
  electricalWork: "https://videos.pexels.com/video-files/10151854/10151854-hd_1920_1080_24fps.mp4",
  // https://www.pexels.com/video/close-up-of-plumber-fixing-faucet-9890450/
  faucetRepair: "https://videos.pexels.com/video-files/9890450/9890450-hd_1920_1080_30fps.mp4",
}

// Photo IDs — https://www.pexels.com/photo/<slug>-<id>/
export const photos = {
  heroPlumberRadiator: 29226620,
  plumberPipeFittings: 6419128,
  wrenchWoodSurface: 8488060,
  viceGripWrench: 5210901,
  handywomanWrench: 8486972,
  handMetalWrench: 33073853,
  copperPipes: 3721272,
  steelPipesCloseup: 8581897,
  electricianSwitchboard: 257736,
  electricianSolar: 36085816,
  electricianSockets1: 442160,
  electricianSockets2: 5691590,
  gasStove: 3722212,
  blueFlameBurner: 6126281,
  stoveFireCloseup: 195029,
  safetyVestChecklist: 8293680,
  engineerHelmet: 7937365,
  clipboardConstruction: 8961004,
  hardhatClipboard: 8293666,
  workerPortrait1: 15200454,
  workerHardhat1: 7788241,
  workerSafetyHelmet: 11321790,
  workerOrangeHardhat: 2760241,
  workerHelmetStanding: 28196526,
  familyKitchen1: 4262167,
  familyKitchen2: 5593074,
  familyKitchenEating: 5593075,
  familyKitchenPrepping: 7678054,
  familyKitchenPosing: 4262168,
  familyKitchenCooking: 4262010,
  bathroomModern1: 19846350,
  bathroomModern2: 8089093,
  bathroomFreestandingTub: 6207947,
  bathroomWashbasin: 6956840,
  bathroomShowerCabin: 6436770,
  faucetSteelSink: 12124656,
  kitchenSinkFaucet: 19991824,
  whiteCeramicSink: 127726,
  londonTerraced1: 20703515,
  londonTerraced2: 20703514,
  londonStreetHouses: 17160711,
  londonThinHouse: 35698965,
  handshake1: 33175650,
  handshake2: 33175653,
  handshake3: 33175672,
  handshakeGroup: 3183197,
  handshakeSuits: 5520297,
} as const
