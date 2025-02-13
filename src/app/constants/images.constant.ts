const imagesUrl = {
    LOGO: "https://res.cloudinary.com/dn6a3eadd/image/upload/v1739359481/wisdom-quality-education/brand/logo_hsa6u1.png",
    LOGO_BLACK: "https://res.cloudinary.com/dn6a3eadd/image/upload/v1739359481/wisdom-quality-education/brand/logo_full_adgnh2.jpg",
    CAROUSAL_1: "https://res.cloudinary.com/dn6a3eadd/image/upload/v1739359451/wisdom-quality-education/carousal/result_zc5hga.jpg",
    CAROUSAL_2: "https://res.cloudinary.com/dn6a3eadd/image/upload/v1739359451/wisdom-quality-education/carousal/p3_c660ec.jpg",
    CAROUSAL_3: "https://res.cloudinary.com/dn6a3eadd/image/upload/v1739359450/wisdom-quality-education/carousal/p2_f5dbua.jpg",
    FACILITIES: "https://res.cloudinary.com/dn6a3eadd/image/upload/v1739446917/wisdom-quality-education/brand/lecture_tgg3zf.jpg",
    DEEPAK_SIR: "https://res.cloudinary.com/dn6a3eadd/image/upload/v1739359422/wisdom-quality-education/teachers/deepak_sir_pt64gx.jpg",
    NILESH_SIR: "https://res.cloudinary.com/dn6a3eadd/image/upload/v1739359422/wisdom-quality-education/teachers/nilesh_sir_okgq9i.jpg",
    MURTAZA_SIR: "https://res.cloudinary.com/dn6a3eadd/image/upload/v1739359423/wisdom-quality-education/teachers/murtaza_sir_r5nwhk.jpg",
    LOCATION: "https://res.cloudinary.com/dn6a3eadd/image/upload/v1739447086/wisdom-quality-education/brand/location_r3hdgi.jpg",
    BG_IMAGE: "https://res.cloudinary.com/dn6a3eadd/image/upload/v1739359480/wisdom-quality-education/brand/bg-image_pfue1a.jpg",
    "8th_9th_10th": "https://res.cloudinary.com/dn6a3eadd/image/upload/v1739446955/wisdom-quality-education/classes/8th_9th_10th_nfpozp.jpg",
    "11th_12th": "https://res.cloudinary.com/dn6a3eadd/image/upload/v1739446960/wisdom-quality-education/classes/11th_12th_ut0sdg.jpg",
    JEE_MHTCET: "https://res.cloudinary.com/dn6a3eadd/image/upload/v1739446957/wisdom-quality-education/classes/jee_mhtcet_fg188c.jpg",
    NEET: "https://res.cloudinary.com/dn6a3eadd/image/upload/v1739446960/wisdom-quality-education/classes/neet_pwtimi.jpg"
};

type ImageKeys = keyof typeof imagesUrl;

export function getImageUrl(imageName: ImageKeys): string {
    return imagesUrl[imageName];
}