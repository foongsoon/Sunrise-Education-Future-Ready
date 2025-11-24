import { ContentStrings, Language } from './types';
import { BookOpen, GraduationCap, Star, Heart } from 'lucide-react';

export const TEXT_CONTENT: Record<Language, ContentStrings> = {
  en: {
    nav: {
      home: "Home",
      programs: "Programs",
      about: "About Us",
      contact: "Contact",
      funZone: "Wonder Zone",
    },
    hero: {
      title: "Sunrise Education",
      subtitle: "Cambridge IGCSE Syllabus (Primary & Secondary). Discover wonderful content and joyful learning.",
      cta: "Join Us Today",
    },
    programs: {
      title: "Our Syllabus",
      primary: "Primary Education",
      primaryDesc: "Building a strong foundation with creativity and fun for young minds.",
      secondary: "Secondary IGCSE",
      secondaryDesc: "Comprehensive preparation for Cambridge IGCSE with academic excellence.",
    },
    aiSection: {
      title: "Daily Wonder Generator",
      desc: "Use our AI magic to generate a fun educational fact or a motivating story for your child!",
      button: "Generate Wonderful Content",
      placeholder: "Waiting for magic...",
    },
    contact: {
      title: "Get in Touch",
      address: "Address",
      phone: "Call / WhatsApp",
      email: "Email Us",
      followUs: "Follow Us",
    }
  },
  cn: {
    nav: {
      home: "首页",
      programs: "课程",
      about: "关于我们",
      contact: "联系我们",
      funZone: "奇迹地带",
    },
    hero: {
      title: "旭日教育中心",
      subtitle: "剑桥 IGCSE 课程 (小学与中学)。 探索更多丰富快乐内容与愉悦的学习体验。",
      cta: "立即加入我们",
    },
    programs: {
      title: "我们的课程",
      primary: "小学课程",
      primaryDesc: "通过创造力和乐趣为年轻心灵打下坚实的基础。",
      secondary: "中学 IGCSE",
      secondaryDesc: "为剑桥 IGCSE 提供全面的学术卓越准备。",
    },
    aiSection: {
      title: "每日奇迹生成器",
      desc: "使用我们的 AI 魔法为您的孩子生成有趣的教育事实或励志故事！",
      button: "生成精彩内容",
      placeholder: "等待魔法发生...",
    },
    contact: {
      title: "联系方式",
      address: "地址",
      phone: "拨打 / WhatsApp",
      email: "发送邮件",
      followUs: "关注我们",
    }
  }
};

export const CONTACT_DETAILS = {
  phone: "+6 012-425 1556",
  whatsappLink: "https://wa.me/60124251556",
  email: "LOVE@sun.edu.my",
  website: "www.sun.edu.my",
  address: "No. 25-2nd Floor, Jalan Mahogani 5/Ks7, 41200 Klang, Selangor, Malaysia",
  facebook: "https://www.facebook.com/SunriseResourceCentre",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=No.+25-2nd+Floor,+Jalan+Mahogani+5/Ks7,+41200+Klang,+Selangor,+Malaysia"
};

export const FEATURES = [
  { icon: BookOpen, titleEn: "Cambridge Syllabus", titleCn: "剑桥教学大纲", color: "bg-blue-100 text-blue-600" },
  { icon: Star, titleEn: "Joyful Learning", titleCn: "快乐学习", color: "bg-yellow-100 text-yellow-600" },
  { icon: GraduationCap, titleEn: "Expert Tutors", titleCn: "专家导师", color: "bg-purple-100 text-purple-600" },
  { icon: Heart, titleEn: "Holistic Growth", titleCn: "全面成长", color: "bg-red-100 text-red-600" },
];