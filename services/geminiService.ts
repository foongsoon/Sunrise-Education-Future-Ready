import { GoogleGenAI } from "@google/genai";
import { Language } from '../types';

// NOTE: In a real production build, ensure API_KEY is defined in environment variables.
// For this demo, we assume process.env.API_KEY is available.
const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const generateWonderfulContent = async (lang: Language): Promise<string> => {
  if (!apiKey) {
    return lang === 'en' 
      ? "API Key missing. Please configure the environment." 
      : "缺少 API 密钥。请配置环境。";
  }

  const prompt = lang === 'en'
    ? "Generate a short, wonderful, and encouraging educational 'Fun Fact of the Day' or a mini-story (max 50 words) for a student studying Cambridge IGCSE. Make it sound magical and inspiring."
    : "为学习剑桥 IGCSE 的学生生成一个简短、精彩且鼓舞人心的教育“每日趣闻”或一个小故事（最多 80 个字）。让它听起来充满魔力和启发性。";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text || (lang === 'en' ? "Let's learn something new today!" : "让我们今天学点新东西！");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return lang === 'en' 
      ? "The magic is recharging... try again later!" 
      : "魔法正在充电中……请稍后再试！";
  }
};